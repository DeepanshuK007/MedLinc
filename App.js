import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, SafeAreaView } from 'react-native';
import Login from './App/Screens/LoginScreen';
import Colors from './assets/Shared/Colors';
import img1 from './assets/Images/img1.png';
import HomeScreen from './App/Screens/HomeScreen';
import WelcomeScreen from './App/Screens/WelcomeScreen';
import AppNavigation from './navigation/appNavigation';
import { useFonts } from 'expo-font';

export default function App() {
	const [ fontsLoaded ] = useFonts({
		appFont: require('./assets/fonts/Outfit-Regular.ttf'),
		'appFont-bold': require('./assets/fonts/Outfit-Bold.ttf'),
		'appFont-semi': require('./assets/fonts/Outfit-SemiBold.ttf'),
		'appFont-light': require('./assets/fonts/Outfit-Light.ttf')
	});

	if (!fontsLoaded) {
		return null;
	}

	return <AppNavigation />;
}
