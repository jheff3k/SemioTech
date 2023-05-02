import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, ImageBackground, TextInput, TouchableOpacity, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import { introducao, examefisicogeral } from '../../src/model/data';
import CustomSwitch from '../../src/components/CustomSwitch';
import ListItem from '../../src/components/ListItem';
import { loadFonts } from '../../Fonts';

const HomeScreen = ({navigation}) => {
  const [gamesTab, setGamesTab] = useState(1);
  const [mostAccessedItem, setMostAccessedItem] = useState(null);

  const onSelectSwitch = value => {
    setGamesTab(value);
  };

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function load() {
      await loadFonts();
      setFontsLoaded(true);
    }

    load();
  }, []);

  if (!fontsLoaded) {
    return null; // or a loading screen
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ padding: 19 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
          <Text style={{ fontSize: 20, fontFamily: 'Ubuntu-Bold' }}>Olá Jeffeson Pereira</Text>
          <ImageBackground
            source={require('../assets/homescreen/user-profile.jpg')}
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
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
            height: 40,
          }}
        >
          <Feather name="search" size={25} color="#C6C6C6" style={{ marginRight: 5 }} />
          <TextInput placeholder="Busque no SemioTech" />
        </View>

        <View style={{ marginVertical: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18, fontFamily: 'Ubuntu-Bold' }}>Mais acessados</Text>
          {mostAccessedItem && ( 
          <TouchableOpacity onPress={() => {}}>
          <Text style={{ color: '#0aada8' }}>{mostAccessedItem.titulo}</Text>
          </TouchableOpacity>
          )}
            {!mostAccessedItem && (
          <Text style={{ color: '#fff' }}>Nenhum item acessado ainda</Text>
          )}
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Text style={{ color: '#0aada8' }}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginVertical: 20 }}>
          <CustomSwitch 
            selectionMode={1} 
            option1="Introdução" 
            option2="Exame Físico Geral" 
            onSelectSwitch={onSelectSwitch}
            />
        </View>
        {gamesTab === 1 && 
          introducao.map(item => (
            <ListItem key={item.id} photo={item.poster} title={item.titulo} />
          ))}
        {gamesTab === 2 && 
          examefisicogeral.map(item => (
            <ListItem key={item.id} photo={item.poster} title={item.titulo} 
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
