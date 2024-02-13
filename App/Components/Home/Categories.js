import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Categories() {
	return (
		<View>
			<View style={{ marginTop: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
				<Text style={{ fontFamily: 'appFont-semi', fontSize: 20 }}>Doctor Speciality</Text>
				<Text style={{ fontFamily: 'appFont', color: 'green', marginTop: 5, marginLeft: 100 }}>See All</Text>
			</View>

			<View
				style={{
					// padding: 15,
					// backgroundColor: '#c8e6c9',
					flexDirection: 'row',
					justifyContent: 'space-between',
					borderRadius: 10,
					marginLeft: 10
				}}
			>
				<FontAwesome5
					name="tooth"
					size={30}
					color="green"
					style={{ padding: 15, backgroundColor: '#c8e6c9' }}
				/>
				<FontAwesome
					name="heartbeat"
					size={30}
					color="green"
					style={{ padding: 15, backgroundColor: '#c8e6c9' }}
				/>
				<FontAwesome5 name="brain" size={30} color="green" style={{ padding: 15 }} />
				<MaterialIcons name="pregnant-woman" size={35} color="green" style={{ padding: 15 }} />
				<Ionicons name="ear" size={30} color="green" style={{ padding: 15 }} />
				<FontAwesome5 name="eye" size={30} color="green" style={{ padding: 15 }} />
			</View>
		</View>
	);
}
