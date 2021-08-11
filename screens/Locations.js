import React, { useLayoutEffect, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { getPlaces } from '../store/actions/placesAction';

import { placeStyles, mainCard } from '../constants/styles';

import CustomHeaderButton from '../components/HeaderButton' 

export default Locations = ({ navigation }) => {
    const dispatch = useDispatch();
    const places = useSelector(state => state.places.list);

    const handleOpenMap = (locationData) =>{

    }

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

    return (
        <FlatList
            data={places}
            keyExtractor={item => item.id}
            renderItem={data => {
                return (
                    <View style={mainCard.card}>
                        <TouchableOpacity onPress={handleOpenMap.bind(this, data.item)}>
                            <View style={mainCard.column}>
                                <Text style={mainCard.title}>{data.item.name}</Text>
                                <Text style={mainCard.title}>{data.item.date}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )
            }}
            keyExtractor={item => item.id.toString()}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

