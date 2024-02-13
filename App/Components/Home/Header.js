import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import firestore from '@react-native-firebase/firestore';

export default function Header() {
	// const { isLoaded, isSignedIn, user } = useUser();
	// if (!isLoaded || !isSignedIn) {
	// 	return null;
	// }

	// const [ myData, setMyData ] = useState(null);

	// useEffect(() => {
	// 	getDatabase();
	// }, []);

	// const getDatabase = async () => {
	// 	try {
	// 		const data = await firestore().collection('testing').doc('007').get();
	// 		setMyData(data._data);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	return (
		<View style={{ padding: 20, marginLeft: -10, flexDirection: 'row' }}>
			<View>
				<FontAwesome5 name="user-circle" size={43} color="green" />
			</View>

			<View
				style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}
			>
				<View style={{ flexDirection: 'column', marginLeft: 10, marginTop: 3 }}>
					<Text style={{ fontFamily: 'appFont' }}> Hello, 👋 </Text>
					<Text style={{ fontFamily: 'appFont-bold', fontSize: 17 }}> User </Text>
				</View>

				<View>
					<Ionicons name="notifications-outline" size={30} color="green" style={{ marginLeft: 170 }} />
				</View>
			</View>

			{/* <Text> Name: {myData ? myData.Name : 'Loading...'} </Text>
			<Text> Age: {myData ? myData.Age : 'Loading...'} </Text> */}
		</View>
	);
}
