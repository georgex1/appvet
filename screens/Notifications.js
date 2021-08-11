import React, {useEffect} from 'react';
import { FlatList, View, Text } from 'react-native';

import { NOTIFICATIONS } from '../data/notifications';


import { listPetsStyles, mainCard } from '../constants/styles';
import InnerApp from '../components/InnerApp';


export default Notifications = ({ navigation }) => {

    const listNotifications = NOTIFICATIONS;

    return (
        <InnerApp >

            <FlatList 
                style={listPetsStyles.listStyle}
                data={listNotifications}
                renderItem={data => {
                    return (
                        <View style={mainCard.card}>
                            <View style={mainCard.column}>
                                <Text style={mainCard.title}>{data.item.name}</Text>
                                <Text style={mainCard.title}>{data.item.date}</Text>
                                <Text >{data.item.description}</Text>
                            </View>
                        </View>
                    )
                }}
                keyExtractor={item => item.id}
            />
        </InnerApp>
  );
}
