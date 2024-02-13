import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import img1 from '../../assets/Images/img1.png';
import { useNavigation } from '@react-navigation/native';
import signUp from '../../assets/Images/signUp.png';
import back from '../../assets/Images/back.png';
import google from '../../assets/Images/google.png';
import apple from '../../assets/Images/apple.png';
import facebook from '../../assets/Images/facebook.png';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';

export default function SignUp() {
	const navigation = useNavigation();
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const handleSubmit = async () => {
		if (email && password) {
			try {
				await createUserWithEmailAndPassword(auth, email, password);
			} catch (err) {
				console.log('Got Error: ', err.message);
			}
		}
	};

	return (
		<View style={styles.container}>
			<SafeAreaView>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<SafeAreaView>
						<Image source={back} style={styles.Back} />
					</SafeAreaView>
				</TouchableOpacity>
			</SafeAreaView>

			<Image source={signUp} style={styles.appImage} />
			{/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
			<View style={styles.headingWrap}>
				{/* <Text style={styles.heading1}> Saathi </Text> */}
				<Text style={styles.heading}> Your Ultimate Doctor </Text>
				<Text style={styles.heading}> Appointment Booking App </Text>
				<Text style={styles.info}> Book Appointments Effortlessly and Manage your Health Journey </Text>
			</View>

			<View style={{ marginTop: -15 }}>
				<Text style={{ textAlign: 'left', fontSize: 15, marginLeft: 20 }}> Full Name </Text>
				<TextInput placeholder="Enter full name" style={styles.placeHolder} />
			</View>

			<View style={{ marginTop: 20 }}>
				<Text style={{ textAlign: 'left', fontSize: 15, marginLeft: 20, marginTop: -10 }}> Email Address </Text>
				<TextInput
					placeholder="Enter Email"
					style={styles.placeHolder}
					value={email}
					onChangeText={(value) => setEmail(value)}
				/>
			</View>

			<View style={{ marginTop: 10 }}>
				<Text style={{ textAlign: 'left', fontSize: 15, marginLeft: 20 }}> Password </Text>
				<TextInput
					placeholder="Enter Password"
					style={styles.placeHolder}
					secureTextEntry
					value={password}
					onChangeText={(value) => setPassword(value)}
				/>
			</View>

			<View style={{ padding: 35, marginTop: -30 }}>
				<TouchableOpacity onPress={handleSubmit}>
					<Text style={styles.GoogleLogin}> Sign Up </Text>
				</TouchableOpacity>
			</View>

			<View>
				<Text style={{ marginTop: -45, textAlign: 'center', fontWeight: 'bold', fontSize: 17 }}> Or </Text>
			</View>

			<View style={styles.Icons}>
				<TouchableOpacity>
					<Image source={google} style={{ backgroundColor: '#9ABB9A', borderRadius: 10 }} />
				</TouchableOpacity>
				<TouchableOpacity>
					<Image source={apple} style={{ height: 50 }} />
				</TouchableOpacity>
				<TouchableOpacity>
					<Image source={facebook} style={{ backgroundColor: '#9ABB9A', borderRadius: 10 }} />
				</TouchableOpacity>
			</View>

			<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
				<Text> Already have an account? </Text>
				<TouchableOpacity onPress={() => navigation.navigate('Login')}>
					<Text style={{ color: '#013220', fontWeight: 'bold' }}> Login </Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appImage: {
		width: 270,
		height: 250,
		objectFit: 'fill',
		alignItems: 'center',
		marginLeft: 40,
		marginTop: 5,
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40
	},
	container: {
		flex: 1,
		backgroundColor: '#b3d9b3'
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	heading1: {
		fontSize: 20,
		fontWeight: 'bold',
		alignItems: 'center',
		padding: 10,
		marginTop: -25,
		marginBottom: -7
	},
	heading: {
		fontSize: 16,
		fontWeight: 'bold',
		alignItems: 'center',
		marginTop: -2
	},
	headingWrap: {
		marginTop: -60,
		alignItems: 'center',
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		backgroundColor: '#b3d9b3',
		padding: 30
	},
	info: {
		textAlign: 'center',
		padding: 20,
		marginBottom: 24
	},
	GoogleLogin: {
		marginTop: 15,
		backgroundColor: '#013220',
		marginBottom: 20,
		borderRadius: 10,
		width: Dimensions.get('screen').width * 0.8,
		textAlign: 'center',
		fontSize: 18,
		color: '#fff',
		alignItems: 'center',
		padding: 10
	},
	Back: {
		height: 40,
		width: 50,
		marginTop: 35,
		marginLeft: 5
	},
	placeHolder: {
		color: '#c7ecec',
		padding: 10,
		backgroundColor: '#9ABB9A',
		marginLeft: 20,
		marginRight: 20,
		borderRadius: 10,
		marginTop: 5
	},
	Icons: {
		// height: 40,
		marginLeft: 50,
		marginRight: 50,
		marginTop: -15,
		// width: 50,
		borderRadius: 10,
		// backgroundColor: '#9ABB9A',
		// padding: 25,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	}
});
