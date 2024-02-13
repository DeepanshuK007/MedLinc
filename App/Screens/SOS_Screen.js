import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	Button,
	TouchableOpacity,
	Image,
	ScrollView,
	KeyboardAvoidingView,
	TextInput
} from 'react-native';
import * as Location from 'expo-location';
import call from 'react-native-phone-call';
import sos from '../../assets/Images/sos.png';
import MapViewDirections from 'react-native-maps-directions';

export default function App() {
	const [ inputValue, setInputValue ] = useState('9619774182');
	// const [ state, setState ] = {
	// 	pickupCords: {
	// 		latitude: location.coords.latitude,
	// 		longitude: location.coords.longitude,
	// 		latitudeDelta: 0.0922,
	// 		longitudeDelta: 0.0421
	// 	},
	// 	droplocationCords: {
	// 		latitude: 19.28,
	// 		longitude: 72.86,
	// 		latitudeDelta: 0.0922, //for zoom in accuracy
	// 		longitudeDelta: 0.0421
	// 	}

	// const { pickupCords, droplocationCords } = state;

	const triggerCall = () => {
		const args = {
			number: inputValue,
			prompt: true
		};
		//make a call
		call(args).catch(console.error);
	};

	const [ mapRegion, setMapRegion ] = useState({
		latitude: 37.7851092,
		longitude: -122.4324,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421
	});

	const userLoaction = async () => {
		let { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== 'granted') {
			setErrorMsg('Permission to access location was denied');
			return;
		}
		let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
		setMapRegion({
			latitude: location.coords.latitude,
			longitude: location.coords.longitude,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421
		});
		console.log(location.coords.latitude, location.coords.longitude);
	};

	useEffect(() => {
		userLoaction();
	}, []);
	//PAssing the location info in useEffect as we want react to remember the state changed

	return (
		<View style={styles.container}>
			{/* <ScrollView> */}
			<MapView style={styles.map} region={mapRegion}>
				<Marker coordinate={mapRegion} title="You" />
				{/* <MapViewDirections origin={userLoaction} destination={droplocationCords} apikey={GOOGLE_MAPS_APIKEY} /> */}
			</MapView>
			<View
				style={{
					borderRadius: 50,
					marginLeft: 20,
					marginRight: 20,
					marginTop: 20,
					backgroundColor: 'green',
					padding: 10
				}}
			>
				<TouchableOpacity onPress={userLoaction}>
					<Text style={{ textAlign: 'center', fontFamily: 'appFont-semi', fontSize: 15, color: '#fff' }}>
						{' '}
						Live Location{' '}
					</Text>
				</TouchableOpacity>
				{/* <Button title="Get Location" onPress={userLoaction} style /> */}
			</View>

			<View>
				<TouchableOpacity activeOpacity={0.7} style={{}} onPress={triggerCall}>
					<Image
						source={sos}
						style={{
							width: Dimensions.get('screen').width * 0.2,
							height: Dimensions.get('screen').width * 0.2,
							justifyContent: 'center',
							alignItems: 'center',
							alignContent: 'center',
							paddingLeft: 20,
							// paddingTop: 10

							marginLeft: 140,
							marginTop: 20
						}}
					/>
				</TouchableOpacity>
			</View>

			<View>
				<KeyboardAvoidingView keyboardVerticalOffset={100}>
					<TextInput> Book Ambulance </TextInput>
				</KeyboardAvoidingView>
			</View>

			{/* </ScrollView> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 0.7,
		marginTop: 30,
		borderRadius: 50,
		// padding: 40,
		// borderBlockEndColor: 'green',
		// borderColor: 'green',
		marginBottom: 20
	},
	map: {
		width: '100%',
		height: '100%',
		// borderBlockEndColor: 'green',
		// borderColor: 'green',
		borderRadius: 20

		// padding:
	}
});
