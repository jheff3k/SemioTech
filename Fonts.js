import * as Font from 'expo-font';

export async function loadFonts() {
  await Font.loadAsync({
    'Ubuntu-Regular': require('../Project2/assets/fonts/Ubuntu-Regular.ttf'),
    'Ubuntu-Bold': require('../Project2/assets/fonts/Ubuntu-Bold.ttf'),
    'BraahOne-Regular': require('../Project2/assets/fonts/BraahOne-Regular.ttf'),
  });
}
