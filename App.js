
import React from 'react';
import { KeyboardAvoidingView , View , Image , TextInput ,TouchableOpacity , Text , StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <KeyboardAvoidingView style={style.background}>
      <View style={style.ContainerLogo}>
        <Image 
        source={require('./assets/logo.png')}
        />
      </View>
      <View style={style.Container}>
        <TextInput
           style={style.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={()=>{}}
        />
        <TextInput
        style={style.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={()=>{}}
        />
        <TouchableOpacity style={style.btnSubmit}>
          <Text style={style.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.btnRegister}>
          <Text style={style.registerText}>Criar conta graituita</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    
  );
}

const style = StyleSheet.create({
  background:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#191919',

  },
  ContainerLogo:{
    flex:1,
    justifyContent:'center',
  },
  Container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    paddingBottom:50,

  },
  input:{
    backgroundColor:'#FFF',
    width:'90%',
    marginBottom:15,
    color:'#222',
    fontSize:17,
    borderRadius:7,
    padding:10,
  },
  btnSubmit:{
    backgroundColor:'#35AAF1',
    width:'90%',
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7,

  },
  submitText:{
    color:'#FFF',
    fontSize:18,

  },
  btnRegister:{
    marginTop:10,
  },
  registerText:{
    color:'#fff'
  }
});