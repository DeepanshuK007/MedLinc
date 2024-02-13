import { View, Text, FlatList, Dimensions, Image } from 'react-native';
import React from 'react';
// import { FlatList } from 'react-native-gesture-handler';

export default function Slider() {
	const sliderList = [
		{
			id: 1,
			name: 'Slider-1',
			imageUrl:
				'https://bestlifeonline.com/wp-content/uploads/sites/3/2019/03/kids-pee-in-pool.jpg?resize=768,512&quality=82&strip=all'
		},
		{
			id: 2,
			name: 'Slider-2',
			imageUrl:
				'https://bestlifeonline.com/wp-content/uploads/sites/3/2019/07/woman-nose-bad-smell.jpg?resize=768,512&quality=82&strip=all'
		}
	];

	return (
		<View style={{ marginTop: 10 }}>
			<FlatList
				data={sliderList}
				horizontal={true}
				showsHorizontalScrollIndicator={true}
				renderItem={({ item }) => (
					<Image
						source={{ uri: item.imageUrl }}
						style={{
							width: Dimensions.get('screen').width * 0.9,
							height: 170,
							borderRadius: 20,
							margin: 1
						}}
					/>
				)}
			/>
		</View>
	);
}
