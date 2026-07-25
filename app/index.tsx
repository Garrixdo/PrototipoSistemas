import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {

  const [inputText, updText] = useState('')
  const [username, setUsername] = useState('');

  useEffect(() => {
    hola();

  }, []);

  function hola(){
    console.log("Hola mundo");
  }
/*
  function cambiarTexto(texto: string){
    if (texto.trim() !== ''){
      setUsername(texto)
    }
  }
*/

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{
        color: "blue"
      }}
      >
        {(username.trim() !== '') ? `Hola, ${username} + !` : "Edit app/index.tsx to edit this screen."}</Text>
        <TextInput
        value={inputText}
        onChangeText={updText}
        />
        <TouchableOpacity
        onPress={() => {setUsername(inputText)}}
        >
          <Text>Guardar</Text>
        </TouchableOpacity>
        <View>
          <Link href="/template">El Login</Link>
        </View>
    </View>
  );

}

