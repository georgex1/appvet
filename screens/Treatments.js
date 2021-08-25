import React, { useEffect, useLayoutEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import {TreatmentsStyles, buttonStyle} from '../constants/styles';
import MainCard from '../components/MainCard';

import { FontAwesome5 } from '@expo/vector-icons';

import { filterTreatments, deleteTreatment, selectTreatment } from '../store/actions/treatmentsAction';

import ListMedications from '../components/ListMedications';

import CustomHeaderButton from '../components/HeaderButton' 

export default Treatments = ( {navigation, route} ) => {

    const dispatch = useDispatch();

    //const listTreatmentsDb = require('../data/Treatments.json');
    const listTreatmentsArray = useSelector(state => state.treatments.filteredTreatments);
    const ActualPet = useSelector(state => state.pets.selected);
    const user = useSelector(state => state.auth.user);

    //const listTreatmentsArray = listTreatmentsDb.filter(item => item.pet_id === route.params.pet.id);
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="Nueva"
                        iconName="folder-plus"
                        onPress={() => navigation.navigate('addTreatments')}
                    />
                </HeaderButtons>
            ),
        });
    }, [navigation]);


    useEffect(() => {
        dispatch(filterTreatments(ActualPet.id));
    }, []);




    const connfirmDeleteTreatment = (item) => {
        dispatch(deleteTreatment(item.id, item.firebaseId, user.id));
    }

    const handleDeleteTreatment = (item) => {
        
        Alert.alert(
            "Borrar Tratamiento",
            "Esta seguro que desea borrar este tratamiento?",
            [
                {
                  text: "Cancelar",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                { text: "Aceptar", onPress: () => connfirmDeleteTreatment(item) }
            ]
        );
        
    }


    return (
        <InnerApp >
            

            <View style={TreatmentsStyles.screen}>

                <MainCard data={ActualPet} />

                <Text style={TreatmentsStyles.title}>Tratamientos</Text>

                <FlatList 
                    style={[TreatmentsStyles.listStyle, TreatmentsStyles.listHeight]}
                    data={listTreatmentsArray}
                    renderItem={data => {
                        const medicationList = JSON.parse(data.item.medications)
                        return (
                            <View style={TreatmentsStyles.itemList}>
                                <View style={TreatmentsStyles.itemListInner}>
                                    <View>
                                        <Text style={TreatmentsStyles.title2}>{data.item.name}</Text>
                                        <Text>Fecha Inicio: {data.item.startDate}</Text>
                                    </View>

                                    <View>
                                        
                                    
                                        <TouchableOpacity  onPress={handleDeleteTreatment.bind(this, data.item)}>
                                            <FontAwesome5 name="times-circle" size={24} color={TreatmentsStyles.green.color} />
                                        </TouchableOpacity>


                                    </View>
                                </View>

                                <Text style={TreatmentsStyles.title3}>Medicación</Text>
                                {medicationList.length > 0 && 
                                    <ListMedications medicationList={medicationList} />
                                }
                                
                                
                                {/* <Text style={TreatmentsStyles.title3}>Medicación</Text>

                                {data.item.medications.map((meds) => (

                                    <View style={TreatmentsStyles.itemMeds} key={meds.id}>
                                        <View style={TreatmentsStyles.flexA}>
                                            <Text style={TreatmentsStyles.medItemText}>{meds.name}</Text>
                                            <Text style={TreatmentsStyles.medItemText}>{meds.date}</Text>
                                        </View>
                                        <View style={TreatmentsStyles.flexA}>
                                            <Text style={TreatmentsStyles.medItemText}>Recursividad</Text>
                                            <Text style={TreatmentsStyles.medItemText}>{meds.recursivity}</Text>
                                        </View>
                                        <View style={TreatmentsStyles.flexA}>
                                            <Text style={TreatmentsStyles.medItemText}>Cantidad</Text>
                                            <Text style={TreatmentsStyles.medItemText}>{meds.amount}</Text>
                                        </View>
                                    </View>

                                ))}  */}

                            </View>
                        )
                    }}
                    keyExtractor={item => item.id.toString()}
                />


                

            </View>
        </InnerApp>
  );
}

