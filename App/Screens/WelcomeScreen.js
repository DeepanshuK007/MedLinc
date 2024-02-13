import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../../theme';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<SafeAreaView>
				<Text style={styles.textAlign}> From My Sleep Tonight, ICU! </Text>
				{/* <Text style={styles.textAlign}> You Checked In Yet? </Text> */}
				<Text style={{ fontSize: 20, textAlign: 'right', fontWeight: 'bold' }}> -Lincmed </Text>
				{/* <Text style={{ fontSize: 20, textAlign: 'right', fontWeight: 'bold' }}> -Saathi </Text> */}

				<View>
					<Image
						source={require('../../assets/Images/receptionist.png')}
						style={{ height: 300, width: 200, marginLeft: 65, marginTop: 30 }}
					/>
				</View>

				<View style={{ borderRadius: 40, backgroundColor: '#6fa971' }}>
					<View style={{ padding: 15 }}>
						<TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
							<Text style={styles.SignUp}> Sign Up </Text>
						</TouchableOpacity>
					</View>

					<View>
						<Text style={styles.accText}> Already have an Accout? </Text>
						<TouchableOpacity onPress={() => navigation.navigate('Login')}>
							<Text style={styles.LogIn}>LogIn</Text>
						</TouchableOpacity>
					</View>
				</View>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'centre',
		alignItems: 'center',
		backgroundColor: '#a8e3c6'
	},
	textAlign: {
		justifyContent: 'center',
		marginTop: 100,
		fontSize: 25,
		fontWeight: '700'
	},
	SignUp: {
		borderRadius: 40,
		backgroundColor: '#194D33',
		color: '#fff',
		textAlign: 'center',
		padding: 15,
		marginTop: 40,
		fontSize: 17,
		marginLeft: 20,
		marginRight: 20
	},
	accText: {
		textAlign: 'center',
		fontSize: 15,
		marginTop: 10
	},
	LogIn: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 15,
		marginBottom: 80
	}
});
