import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Pressable, ScrollView, Image } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import DatePicker from 'react-native-datepicker'

export default function App() {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ petName, setPetName ] = useState('');
  const [ date, setDate ] = useState('09-10-2020');
  const [ breed, setBreed ] = useState('');
  const [ favoriteToy, setFavoriteToy ] = useState('');

  const breeds = [ 'Labrador', 'Pit Bull', 'Chihuaua', 'Papillion', 'Siberian Husky', 'Boxer', 'Poodle', 'Retriever', 'German Shepherd', 'Mix', 'Other' ]

  return (
    <ScrollView style={ styles.container }>
      <View style={ styles.header }>
        <Image 
        style={ styles.tinyIcon }
        source={ require( './images/icons8-corgi-64.png' ) }/>
        <Text style={ styles.title }>Woofstagram</Text>
      </View>
      <View style={ styles.inputBox }>
        <Text style={ styles.inputText }>Email:</Text>
        <TextInput 
        textContentType={ 'emailAddress' }
        keyboardType={ 'email-address' }
        style={ styles.input } 
        placeholder="fido@woofstagram.com" 
        onChangeText={ text => setEmail( text ) } 
        />
      </View>
      <View style={ styles.inputBox }>
        <Text style={ styles.inputText }>Password:</Text>
        <TextInput 
        textContenttype={ password }
        style={ styles.input } 
        placeholder="Password" 
        onChangeText={ text => setPassword( text ) } 
        secureTextEntry={ true }
        />
      </View>
      <View style={ styles.inputBox }>
        <Text style={ styles.inputText }>Confirm Password:</Text>
        <TextInput 
        style={ styles.input } 
        placeholder="Password" 
        onChangeText={ text => null } 
        secureTextEntry={ true }
        />
      </View>
      <View style={ styles.inputBox }>
        <Text style={ styles.inputText }>Pet's Name:</Text>
        <TextInput 
        style={ styles.input } 
        placeholder="Fido" 
        onChangeText={ text => setPetName( text ) } 
        />
      </View>
      <View style={ styles.inputBox }>
        <Text style={ styles.inputText }>Pet's Date of Birth:</Text>
        <DatePicker
          style={ styles.datePickerStyle }
          date={ date } // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={ ( date ) => {
            setDate( date );
          } }
        />
      </View>
      <View style={ styles.inputBox }>
        <Text style={ styles.inputText }>Breed:</Text>
        <SelectDropdown
          buttonStyle={{ backgroundColor: '#ceefed' }}
          data={ breeds }
          onSelect={ ( selectedItem ) => setBreed( selectedItem )}
          defaultButtonText="Select a Breed" 
        />
      </View>
      <View style={ styles.inputBox }>
        <Text style={ styles.inputText }>Favorite Toy:</Text>
        <TextInput 
        style={ styles.input } 
        placeholder="rope toy" 
        onChangeText={ text => setFavoriteToy( text ) } 
        />
      </View>
      <Pressable 
      style={ styles.button } 
      title="Create New Account" 
      onPress={ ()=> alert('new account created') }>
        <Text style={ styles.buttonText }>Create Account</Text>
      </Pressable>
      <StatusBar style="auto" />
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#20dad8',
  
  },
  header: {
    paddingTop: 45,
    position: 'fixed',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: '#130935',

  },
  input: {
    height: 50,
    fontSize: 15,
    backgroundColor: '#ceefed',
    width: 280,
    alignItems: 'center',
    padding: 8,
    borderWidth: 1,
    borderRadius: 15, 
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20
  },
  inputText: {
    width: 100,
    fontSize: 18,
    padding: 8
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#20a1d8',
    top: 20,
    height: 65
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#130935',
  },
  tinyIcon: {
    width: 50,
    height: 50,
  }
});
