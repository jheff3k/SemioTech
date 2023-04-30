import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

export default function ListItem({photo, title, onPress, }) {
  return (
    <View style={{
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    }}>

      <TouchableOpacity onPress={onPress} 
      style={{
        backgroundColor:'#183d5a',
        width:'100%', 
        padding:10, 
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden', // adicione esta propriedade
      }}>
        <Image
          source={photo}
          style={{
            width: 50, 
            height: 50, 
            borderRadius: 10, 
            marginRight: 20,
            position: 'relative', // posicione a imagem absolutamente dentro da TouchableOpacity
            left: 0, // ajuste a posição esquerda da imagem
          }}
        />
        <Text style={{
            fontSize: 18,
            padding: 5,
            borderRadius: 5,
            color: '#fff',
            alignItems: 'center',
            fontFamily:'Ubuntu-Regular'
            }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
