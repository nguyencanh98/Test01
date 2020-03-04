import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, TextInput, StyleSheet
} from 'react-native';
import {Dimensions} from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'null'
    }
}
  _onPressType = (value) =>{
    if (value==0){
      this.setState({ type: 'email-address' })
    }else{
      this.setState({ type: 'number-pad' })
    }  
  }
  render() {
    var radio_props = [
      { label: 'Email', value: 0 },
      { label: 'Phone', value: 1 }
    ];
    var {height, width} = Dimensions.get('window');
    let { container, input, button, text,pick,login,up } = styles;
    return (
      <View style={container}>
        <View style={up}>
        <TextInput
          style={input}
          keyboardType='email-address'
          placeholder='User name'
        />
        <TextInput
          style={input}
          keyboardType={this.state.type}
          placeholder='Email/Phone number'
        />
        <TextInput
          style={input}
          keyboardType='email-address'
          placeholder='Password'

        />
        <View>
          <RadioForm
            style={pick}
            radio_props={radio_props}
            initial={0}
            onPress={this._onPressType}
            formHorizontal={true}
            labelStyle={{fontSize: 15, color: 'black'}}
            buttonSize={10}
            buttonInnerColor={'black'}          
            buttonOuterSize={20}
            
          />
        </View>
        </View>
        
        <View style={login}>
          <TouchableOpacity style={button}>
            <Text style={{ fontSize: 20, color: 'orange' }}>Đăng Kí</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  up:{
    flex:8,
    marginTop:20
  },
  input: {
    marginTop: 15,
    height: 60,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    // width: {width} - 30,
  },
  login: {
    flex:3
  },
  button: {
    marginTop: 15,
    marginBottom: 15,
    height: 60,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
  pick:{
    justifyContent: 'center',
    marginTop: 25,
  }
})