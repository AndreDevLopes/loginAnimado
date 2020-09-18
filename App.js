
import React,{useState, useEffect} from 'react';
import {
        KeyboardAvoidingView,
        View,
        Image,
        TextInput,
        TouchableOpacity,
        Text,
        StyleSheet,
        Animated,
      } from 'react-native';


export default function App() {
  const [offset]= useState(new Animated.ValueXY({x:0,y:80}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x:130 , y:155}));
  useEffect(()=>{
    

    Animated.parallel([
      Animated.spring(offset.y,{
            toValue:0,
            speed:4, 
            useNativeDriver:true,
            bounciness:20,
          }),
      Animated.timing(opacity,{
        toValue:1,
        duration:500,
        useNativeDriver:true, 

      })    
    ]).start();
    
  },[])

  return (
    <KeyboardAvoidingView style={style.background}>
      <View style={style.ContainerLogo}>
        <Animated.Image 
        style={{width:55 , height:70}}
        source={require('./assets/logo.png')}
        />
      </View>
      <Animated.View 
      style={[
        style.Container,
        {
          opacity:opacity,
          transform:[
            {
              translateY:offset.y
            }
          ]
        }
      ]}
      
      >
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
      </Animated.View>
    </KeyboardAvoidingView>
    
  );
}

const style = StyleSheet.create({
  background:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#191919'
    

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