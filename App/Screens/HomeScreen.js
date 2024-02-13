import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import Header from '../Components/Home/Header';
import { StatusBar } from 'expo-status-bar';
import SearchBar from '../Components/Home/SearchBar';
import Slider from '../Components/Home/Slider';
import Categories from '../Components/Home/Categories';
import LogOut from '../Components/Home/LogOut';

export default function HomeScreen() {
	const [ statusBar, setStatusBar ] = useState(false);
	const [ barStyle, setBarStyle ] = useState('default');

	const handleLogout = async () => {
		await signOut(auth);
	};

	return (
		<View style={{ padding: 20 }}>
			<StatusBar hidden={statusBar} barStyle={barStyle} backgroundColor="white" />
			<Header />
			<SearchBar setSearchText={(value) => console.log(value)} />
			{/* Here we have ... */}
			<Slider />
			<Categories />
			{/* <LogOut /> */}

			<TouchableOpacity onPress={handleLogout}>
				<Text
					style={{
						marginLeft: 5,
						backgroundColor: 'red',
						borderRadius: 10,
						// marginRight: 150,
						padding: 5,
						justifyContent: 'center'
					}}
				>
					{' '}
					Logout{' '}
				</Text>
			</TouchableOpacity>
		</View>
	);
}
