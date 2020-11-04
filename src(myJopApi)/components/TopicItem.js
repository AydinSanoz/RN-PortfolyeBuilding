import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {TopicStyles} from '../styles'
export const TopicItem = (props) => {
  return (
    <TouchableOpacity 
      style = {[TopicStyles.container, {backgroundColor : `#${props.item.color}`}]}
      onPress = {props.onSelected}
    >
      <Text style = {TopicStyles.text}>{props.item.name}</Text>
    </TouchableOpacity>
  );
};


    