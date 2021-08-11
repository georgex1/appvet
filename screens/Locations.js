import React, { useLayoutEffect, useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Modal, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import InnerApp from '../components/InnerApp';
import MapPreview from '../components/MapPreview'

import { getPlaces } from '../store/actions/placesAction';

import { mainCard, modalStyles, FormStyles, placeStyles } from '../constants/styles';
import CustomHeaderButton from '../components/HeaderButton' 

export default Locations = ({ navigation }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const places = useSelector(state => state.places.list);

    const [modaVisible, setmodaVisible] = useState(false);
    const [locationData, setlocationData] = useState({});

    const handleOpenMap = (locationData_) =>{
        setlocationData(locationData_)
        setmodaVisible(true)
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
        dispatch(getPlaces(user.id));
    }, []);

    return (
        <InnerApp >
            <FlatList
                data={places}
                keyExtractor={item => item.id}
                renderItem={data => {
                    return (
                        <TouchableOpacity onPress={handleOpenMap.bind(this, data.item)}>
                        <View style={mainCard.card}>
                            
                                <View style={mainCard.column}>
                                    <Text style={mainCard.title}>{data.item.name}</Text>
                                    <Text style={mainCard.title}>{data.item.date}</Text>
                                </View>
                        </View>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={item => item.id.toString()}
            />

            <Modal animationType="fade" visible={modaVisible} transparent >
                <View style={modalStyles.modalOverviewStyle}>
                    <View style={modalStyles.modalStyle}>
                        
                        <Text style={modalStyles.title}>{locationData?.name} | {locationData?.date}</Text>

                        <MapPreview style={placeStyles.mapPreview} location={locationData}>
                            {/* {isFetching
                            ? <ActivityIndicator size="large" color={placeStyles.button.color} />
                            : <Text>En proceso...</Text>
                            } */}
                        </MapPreview>

                        
                        <Button title="Cerrar" color={FormStyles.button.color} onPress={() => setmodaVisible(false)} />
                        

                    </View>
                </View>
            </Modal>
        </InnerApp>
    )
}
