import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import SOS_Screen from '../Screens/SOS_Screen';
import PlantInfo from '../Screens/PlantInfo';
import ProfileScreen from '../Screens/ProfileScreen';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function TabNavigation() {
	const Stack = createBottomTabNavigator();

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color, size }) => <AntDesign name="home" size={size} color="#4caf50" />
				}}
			/>
			<Stack.Screen
				name="Emergengy"
				component={SOS_Screen}
				options={{
					tabBarIcon: ({ color, size }) => <Ionicons name="location-outline" size={30} color="#4caf50" />
				}}
			/>
			<Stack.Screen
				name="PlantInfo"
				component={PlantInfo}
				options={{
					tabBarIcon: ({ color, size }) => <FontAwesome name="leaf" size={28} color="#4caf50" />
				}}
			/>
			<Stack.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ color, size }) => <Feather name="user" size={size} color="#4caf50" />
				}}
			/>
		</Stack.Navigator>
	);
}
