import React, {useState} from 'react';
import * as Font from 'expo-font';
import { AppLoading} from 'expo';
import Navigator from './routes/drawer';


const getFonts = () =>  Font.loadAsync({
    'lato-light': require('./assets/Lato-Light.ttf')
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);


  if(fontsLoaded){
  return (
    <Navigator/>
  );
  } else {
    return (
    <AppLoading
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
      />
      )
  }
}

