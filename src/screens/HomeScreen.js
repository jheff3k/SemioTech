import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather'
import Carousel from 'react-native-snap-carousel';

export default function HomeScreen() {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ padding: 40 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
          <Text style={{ fontSize: 20, fontFamily: 'Ubuntu-Bold', }}>Olá Jeffeson Pereira</Text>
          <ImageBackground
            source={require('../assets/images/user-profile.jpg')}
            style={{ width: 35, height: 35 }}
            imageStyle={{ borderRadius: 25 }}
          />
        </View>

        <View 
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: '#C6C6C6',
                borderWidth: 1,
                borderRadius:8,
                paddingHorizontal:10,
                paddingVertical:8,
                }}>
                <Feather 
                 name="search" 
                    size={25} 
                    color="#C6C6C6" 
                    style={{marginRight:5}} 
                    />
            <TextInput placeholder='Busque no SemioTech' />
        </View>

        <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, fontFamily: 'Ubuntu-Bold'}}>
            Upcoming Games
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#0aada8'}}>See all</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
