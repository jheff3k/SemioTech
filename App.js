import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { loadFonts } from './Fonts';
import SemioTechIcons from '../Project2/assets/SemioTechIcons.svg';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Project2/src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        component={Main} 
        name="Main" 
        options={{headerShown:false}}/>
      <Stack.Screen 
        component={HomeScreen} 
        name="Home" 
        options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const Main = ({ navigation }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function load() {
      await loadFonts();
      setFontsLoaded(true);
    }

    load();
  }, []);

  const handlePress = () => {
    console.log('navigation:', navigation);
    navigation.navigate ('Home');
  };

  if (!fontsLoaded) {
    return null; // or a loading screen
  }

  const buttonStyles = {
    backgroundColor: '#083b66',
    padding: 20,
    width: '70%',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  };

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


const Home = () => {
   return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Home screen</Text>
    </View>
  );
 }

export default App;
