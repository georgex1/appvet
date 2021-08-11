import React, { useEffect, useLayoutEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import {TreatmentsStyles, buttonStyle} from '../constants/styles';
import MainCard from '../components/MainCard';

import { filterTreatments } from '../store/actions/treatmentsAction';

import CustomHeaderButton from '../components/HeaderButton' 

export default Treatments = ( {navigation, route} ) => {

    const dispatch = useDispatch();

    //const listTreatmentsDb = require('../data/Treatments.json');
    const listTreatmentsArray = useSelector(state => state.treatments.filteredTreatments);
    const ActualPet = useSelector(state => state.pets.selected);

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

    return (
        <InnerApp >
            

            <View style={TreatmentsStyles.screen}>

                <MainCard data={ActualPet} />

                <Text style={TreatmentsStyles.title}>Tratamientos</Text>

                <FlatList 
                    style={TreatmentsStyles.listStyle}
                    data={listTreatmentsArray}
                    renderItem={data => {
                        return (
                            <View style={TreatmentsStyles.itemList}>
                                <Text style={TreatmentsStyles.title2}>{data.item.name}</Text>
                                <Text>Fecha Inicio: {data.item.startDate}</Text>
                                
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

