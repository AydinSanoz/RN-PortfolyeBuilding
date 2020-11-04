import {StyleSheet} from 'react-native';

export const TopicStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 5,
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export const introStyles = StyleSheet.create({
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    borderBottomColor: '#00000050',
    margin: 10,
    textDecorationLine: 'underline',
  },
});

export const JobItemStyles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 5,
    borderBottomWidth: 3,
    borderBottomColor: 'gray',
  },
  textTitle: {
    fontWeight: 'bold',
  },
  textLocation: {},
});

export const JobStyles = StyleSheet.create({
  text: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#a1887f',
  },
});
export const ModalCompStyles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    margin : 1,
    padding: 10,
    
  },
  textTitle: {
    fontSize : 22,
    fontWeight : 'bold', 
    
  },
  textLocation:{
    fontSize : 20,
    textDecorationStyle : 'double',

  },
  textDescription:{
    textAlign : 'justify',
  },
  descContainer:{
    
    borderTopColor : 'gray',
    borderTopWidth : 2,
  }

});
