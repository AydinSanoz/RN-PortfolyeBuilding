import React from 'react';
import {SafeAreaView, View, Text,ScrollView, FlatList} from 'react-native';
import {TopicItem} from '../components';
import { introStyles } from '../styles';

const topics = [
  {
    id: 0,
    name: 'Java',
    color: 'fb5607',
  },
  {
    id: 1,
    name: 'Python',
    color: '007f5f',
  },
  {
    id: 2,
    name: 'Javascript',
    color: 'ffb703',
  },
  {
    id: 3,
    name: '.NET',
    color: '023e7d',
  },
  {
    id: 4,
    name: 'Dart',
    color: '001845',
  },
  {
    id: 5,
    name: 'Go',
    color: 'f8961e',
  },
  {
    id: 6,
    name: 'Ruby',
    color: 'e63946',
  },
  {
    id: 7,
    name: 'C',
    color: 'fb8b24',
  },
  {
    id: 8,
    name: 'C++',
    color: '06d6a0',
  },
];


export const Intro = (props) => {

    function onSelectedJob(job){
        props.navigation.navigate('Job', {selectedJob : job})
    }
  return (
    <SafeAreaView style = {{flex:1}}>
      <View style = {{flex:1}}>
        <Text style = {introStyles.text}>Select A Job Title</Text>
        <ScrollView horizontal>
          {topics.map((t, index) => {
            return <TopicItem key={index.toString()} item={t} onSelected = {() => onSelectedJob(t.name)}/>;
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
