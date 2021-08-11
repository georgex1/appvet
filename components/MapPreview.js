import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { MAP_API } from '../constants/database';

import { placeStyles } from '../constants/styles';

const MapPreview = ({ location, style, children }) => {
  const loc = location || {}
  const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?
      center=${loc.lat},${loc.lng}
      &zoom=13
      &size=600x300
      &maptype=roadmap
      &markers=color:blue%7Clabel:S%7C${loc.lat},${loc.lng}
      &key=${MAP_API}`;


  return (
    <View style={{ ...placeStyles.mapPreviewInner, ...style }}>
      {location
        ? <Image style={placeStyles.mapImage} source={{ uri: mapPreviewUrl }} />
        : children
      }
    </View>
  );
}

export default MapPreview;