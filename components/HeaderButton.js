import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { FontAwesome5 } from '@expo/vector-icons';


export default CustomHeaderButton = props => (
  <HeaderButton
    {...props}
    IconComponent={FontAwesome5}
    iconSize={23}
    color='white'
  />
)
