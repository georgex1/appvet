import React, {useEffect, useLayoutEffect} from 'react';
import { FlatList, TouchableOpacity, Text, View, Button, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MainCard from '../components/MainCard';
import { listPetsStyles, buttonStyle } from '../constants/styles';
import InnerApp from '../components/InnerApp';

import { getPets, selectPet, deletePet } from '../store/actions/petsAction';
import { getUser } from '../store/actions/authAction';

import CustomHeaderButton from '../components/HeaderButton' 

export default ListPets = ({ navigation }) => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const listPetsArray = useSelector(state => state.pets.list);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="Nueva"
                        iconName="folder-plus"
                        onPress={() => navigation.navigate('AddPet')}
                    />
                </HeaderButtons>
            ),
        });
    }, [navigation]);


    const handleChoosePet = (pet) => {

        dispatch(selectPet(pet.id));
        navigation.navigate('Treatments')
    }

    const connfirmDeletePet = (pet) => {
        dispatch(deletePet(pet.id, pet.firebaseId, user.id));
    }

    const handleDeletePet = (pet) => {
        
        Alert.alert(
            "Borrar Macota",
            "Esta seguro que desea borrar esta mascota?",
            [
                {
                  text: "Cancelar",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                { text: "Aceptar", onPress: () => connfirmDeletePet(pet) }
            ]
        );
        
    }

    useEffect(() => {
        dispatch(getUser());
        dispatch(getPets(user.id));
    }, []);

    return (
        <InnerApp >

            <FlatList 
                style={listPetsStyles.listStyle}
                data={listPetsArray}
                renderItem={data => {
                    return (
                        <View style={listPetsStyles.listInner}>
                            <TouchableOpacity onPress={handleChoosePet.bind(this, data.item)}>
                                <MainCard data={data.item} />
                            </TouchableOpacity>
                            <Button title="Borrar" color={buttonStyle.buttonDelete.color} onPress={handleDeletePet.bind(this, data.item)}></Button>
                        </View>
                    )
                }}
                keyExtractor={item => item.id.toString()}
            />
        </InnerApp>
  );
}

