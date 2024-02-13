import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar({ setSearchText }) {
	const [ searchInput, setSearchInput ] = useState();

	return (
		<View>
			<View style={{ flexDirection: 'row', backgroundColor: '#81c784', padding: 7, borderRadius: 70 }}>
				<AntDesign name="search1" size={24} color="green" />
				<TextInput
					placeholder="Search"
					style={{ marginLeft: 10, width: '100%', fontFamily: 'appFont' }}
					onChangeText={(value) => setSearchInput(value)}
					// Here ve have made a var setSearchInput
					onSubmitEditing={() => setSearchText(searchInput)}
				/>
			</View>
		</View>
	);
}
