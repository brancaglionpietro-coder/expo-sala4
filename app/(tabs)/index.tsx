import { Image, ScrollView, StyleSheet, View, Text, TouchableOpacity  } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={s.container}>
      <Image source={require('../../assets/sesi.jpg')} resizeMode='cover' style={s.image}/>

      <View style={s.content}>
        <Text style={s.title}>SENAI Curitiba</Text>

        <Text style={s.paragraph}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut iste maiores eius, odit in animi incidunt beatae dolores laboriosam minus dicta cumque labore nostrum ab impedit excepturi, delectus molestiae quod.
        </Text>

        <TouchableOpacity onPress={() => router.push('/explore')} style={s.button}> 
          <Text style={s.buttonText}>Lista de cursos</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
    container: {
      flex: 1
    },

    image: {
      width: '100%',
      height: 220
    },

    content: {
      padding: 30
    },

    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#08467c',
      marginBottom: 15
    },

    paragraph: {
      fontSize: 16,
      lineHeight: 22,
      color: '#1a1a1a',
      marginBottom: 30
    },

    button: {
      backgroundColor: '#08467c',
      paddingVertical: 14,
      paddingHorizontal: 20,
      borderRadius: 8,
      alignSelf: 'flex-end'
    },

    buttonText: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 20
    }
});
