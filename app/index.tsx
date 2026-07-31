import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';

export default function Home() {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const vaiPraIndexDasTabs = () => {
    router.push('/(tabs)')
  }

  return (
    <View style={s.body}>
      <View style={s.wrap}>
        <Text style={s.t}>LOGIN</Text>
        <Text style={s.t}>Email</Text>
        <TextInput style={s.input} onChangeText={setEmail} value={email} placeholder='Insira seu email'/>
        <Text style={s.t}>Senha</Text>
        <TextInput style={s.input} onChangeText={setPass} value={pass} placeholder='Insira sua senha'/>
        <View>
          <TouchableOpacity style={s.button} onPress={vaiPraIndexDasTabs}>
            <Text style={s.btnText}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  body: {
    backgroundColor: '#1f3d99',
    flex: 1
  },

  wrap: {
    gap: 10,
    backgroundColor: '#3668a8',
    width: '60%',
    height: 265,
    alignSelf: 'center',
    marginTop: '50%',
    padding: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  t: {
    color: '#ffffff',
    fontSize: 18
  },

  input: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#ffffff',
    color: '#090909',
    borderRadius: 5
  },

  button: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 5

  },

  btnText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 600
  }
});