import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../SemioTech/AwesomeProject/src/screens/HomeScreen';
import SemioTechIcons from './src/assets/SemioTechIcons';

import { loadFonts } from './Fonts';

const buttonStyles = {
  backgroundColor: '#083b66',
  padding: 20,
  width: '70%',
  borderRadius: 5,
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const Stack = createNativeStackNavigator();

const MainScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Home');
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
    <SafeAreaView 
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <View>
        <Text style={{ 
          fontSize: 50, 
          color: '#083b66', 
          fontFamily: 'BraahOne-Regular'
          }}>
          SemioTech
        </Text>
      </View>
      <SemioTechIcons 
        width={500} 
        height={500}
      />
      <TouchableOpacity 
        style={buttonStyles} 
        onPress={handlePress}
      >
        <Text style={{ 
          fontSize: 18, 
          color: '#fff', 
          fontFamily: 'Ubuntu-Bold' 
        }}>
          Bora Lá!
        </Text>
        <MaterialIcons 
          name="arrow-forward-ios" 
          size={22} 
          color="#fff" 
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          component={MainScreen} 
          name="MainScreen" 
          options={{headerShown:false}} 
        />
        <Stack.Screen 
          component={HomeScreen} 
          name="Home" 
          options={{headerShown:false}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
