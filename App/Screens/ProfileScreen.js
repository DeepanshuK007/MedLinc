import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';

//for storing the data
import { db } from '../../config/firebase';
import { ref, set } from 'firebase/database'; //ref is also used for fetching, and db u have to import if u are working with realtime db.
//ref provied the reference to the node of the db and set is th ething we are writing to that node.

//for fetching the data
import { onValue } from 'firebase/database';
//onvalus eis the primary way to read data from the db

//-------------------Code to add data in realtime db firebase-------------------------------
export default function ProfileScreen() {
	//The title and body child nodes are set to the title and body states here.
	const [ title, setTitle ] = useState('');
	const [ body, setBody ] = useState('');

	const [ todoData, setTodoData ] = useState([]);

	//func to add data in the firebase realtime db
	const dataAddOn = () => {
		set(ref(db, 'posts/' + title), {
			title: title,
			body: body
		});
		setTitle('');
		setBody('');
	};

	useEffect(() => {
		const starCountRef = ref(db, 'posts/');
		onValue(starCountRef, (snapshot) => {
			const data = snapshot.val();
			const newPosts = Object.keys(data).map((key) => ({
				id: key,
				...data[key]
			}));
			console.log(newPosts);
			setTodoData(newPosts);
		});
	}, []);
	//------------------------------------------------------------------------------

	//--------------------Code to fetch data---------------------------------------
	const FetchData = () => {
		const [ todoData, setTodoData ] = useState([]);

		useEffect(() => {
			const starCountRef = ref(db, 'posts/');
			//Inside the useEffect hook we are passing the reference to the posts node.
			//When the data at the loc is updated, it will map the data to an arr of objects consisting of key-value pairs and lock the resulting arr to the console.
			//It will also update the components state by calling setTodoData with the arr of objects.
			onValue(starCountRef, (snapshot) => {
				const data = snapshot.val();
				//val extracts and returns the datatype present in the DataSnapshot.
				//A Data Snapshot contains data from the FireBase DB
				//Her snapshot is a param which is connected to the Data Snapshot and using it we can get the val present in it using val().
				const newPosts = Object.keys(data).map(
					(key = {
						id: key,
						...data[key]
						//Here the info fetched is stored in data var which is then passed into keys func of Object type which retuurns the names and object, which we have then mapped where id is the keyand dat of each key is retrieved in the form of an arr.
						//Which is all stored in newPosts var.
					})
				);
				console.log(newPosts);
				setTodoData(newPosts);
				//Passing newPostes to state.
			});
		}, []);
	};

	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.header}>Profile</Text>
				<TextInput
					placeholder="Title"
					value={title}
					onChangeText={(text) => setTitle(text)}
					style={styles.input}
				/>
				<TextInput
					placeholder="Body"
					value={body}
					onChangeText={(text) => setBody(text)}
					style={styles.input}
				/>
				<Button title="Add Data" onPress={dataAddOn} />
			</View>

			<View style={styles.container}>
				<Text style={styles.header}> Fetch Data </Text>
				{todoData.map((item, index) => {
					return (
						<View
							key={index}
							style={{ flexDirection: 'row', textAlign: 'centre', justifyContent: 'center' }}
						>
							<Text style={styles.text}> {item.title} </Text>
							<Text style={styles.text}> {item.body} </Text>
						</View>
					);
				})}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	header: {
		fontSize: 30,
		textAlign: 'center',
		marginTop: 50,
		fontWeight: 'bold'
	},
	input: {
		borderWidth: 1,
		borderColor: 'black',
		margin: 10,
		padding: 10,
		fontSize: 18,
		borderRadius: 6
	},
	text: {
		fontSize: 20,
		textAlign: 'center',
		marginTop: 10
	}
});
