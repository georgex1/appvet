import React, { useLayoutEffect, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import LocationsItem from '../components/LocationsItem';
import { getPlaces } from '../store/actions/placesAction';

import CustomHeaderButton from '../components/HeaderButton' 

export default Locations = ({ navigation }) => {
    const dispatch = useDispatch();
    const places = useSelector(state => state.places.list);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="Nueva"
                        iconName="folder-plus"
                        onPress={() => navigation.navigate('addLocation')}
                    />
                </HeaderButtons>
            ),
        });
    }, [navigation]);

    useEffect(() => {
        dispatch(getPlaces());
    }, []);

    const renderItem = data => (
        <LocationsItem
            title={data.item.title}
            onSelect={() => navigation.push('Detalle')}
        />
    )

    return (
        <FlatList
            data={places}
            keyExtractor={item => item.id}
            renderItem={renderItem}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

