import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../App/Screens/HomeScreen';
import WelcomeScreen from '../App/Screens/WelcomeScreen';
import Login from '../App/Screens/LoginScreen';
import SignUpScreen from '../App/Screens/SignUpScreen';
import useAuth from '../hooks/useAuth';
import ProfileScreen from '../App/Screens/ProfileScreen';
import Appointment from '../App/Screens/SOS_Screen';
import TabNavigation from '../App/Navigations/TabNavigation';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
	const { user } = useAuth();
	if (user) {
		return (
			<NavigationContainer>
				<TabNavigation />
				{/* <Stack.Navigator initialRouteName="Welcome">
					<Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
					<Stack.Screen name="ProfileScreen" options={{ headerShown: false }} component={ProfileScreen} />
					<Stack.Screen name="Appointment" options={{ headerShown: false }} component={Appointment} />
				</Stack.Navigator> */}
			</NavigationContainer>
		);
	} else {
		return (
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Welcome">
					<Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen} />
					<Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
					<Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUpScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
