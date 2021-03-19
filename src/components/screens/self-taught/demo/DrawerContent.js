import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Avatar, Caption, Drawer, Paragraph, Switch, Title, TouchableRipple } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function DrawerContent({navigation, route}) {

	const [theme, setTheme] = useState(false);
	
	const toggleTheme = () => {
		setTheme(!theme);
	}

	return (
		<View style={{flex: 1}}>
			<DrawerContentScrollView>
				<View style={{flex: 1}}>
					<View style={{paddingLeft: 20}}>
						<View style={{flexDirection: 'row', marginTop: 15}}>
							<Avatar.Image 
								source={{uri: 'https://instagram.fdad3-3.fna.fbcdn.net/v/t51.2885-19/s150x150/58410203_2288313868152295_3964763875206758400_n.jpg?tp=1&_nc_ht=instagram.fdad3-3.fna.fbcdn.net&_nc_ohc=Y2IdKFuFPNkAX9uf3q6&oh=07229445389294b67ff677de70bf2d7c&oe=6068AFA7'}}
								// source={require('https://scontent-hkt1-1.cdninstagram.com/v/t51.2885-19/s150x150/58410203_2288313868152295_3964763875206758400_n.jpg?_nc_ht=scontent-hkt1-1.cdninstagram.com&_nc_ohc=QCL0wV1MIrEAX_nEjm5&tp=1&oh=f7ca7c3938593e20527b2956e1d637c2&oe=603D2E27')}
								size={50}
							/>
							<View style={{marginLeft: 15}}>
								<Title
									style={{fontSize: 16, marginTop: 3, fontWeight: 'bold'}}
								>
									Khale
								</Title>
								<Caption
									style={{fontSize: 14, lineHeight: 14}}
								>
									@Khale720301
								</Caption>
							</View>
						</View>

						<View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
							<View style={{flexDirection: 'row', alignItems: 'center', marginRight: 15}}>
								<Paragraph style={{fontWeight: 'bold', marginRight: 3, fontSize: 14, lineHeight: 14}}>100</Paragraph>
								<Caption style={{fontSize: 14, lineHeight: 14}}>Following</Caption>
							</View>
							<View style={{flexDirection: 'row', alignItems: 'center', marginRight: 15}}>
								<Paragraph style={{fontWeight: 'bold', marginRight: 3, fontSize: 14, lineHeight: 14}}>100</Paragraph>
								<Caption style={{fontSize: 14, lineHeight: 14}}>Followers</Caption>
							</View>
						</View>
					</View>

					<Drawer.Section style={{marginTop: 15}}>
						<DrawerItem
							icon={({color, size}) => (
								<AntDesign name="home" size={size} color={color} />
							)}
							label='Home'
							onPress={() => navigation.navigate('Home')}
							// activeTintColor='aqua'
							// activeBackgroundColor='red'
						/>
						<DrawerItem
							icon={({color, size}) => (
								<MaterialCommunityIcons name="face-profile" size={size} color={color} />
							)}
							label='Profile'
							onPress={() => navigation.navigate('Profile')}
						/>
						<DrawerItem
							icon={({color, size}) => (
								<Feather name="bookmark" size={size} color={color} />
							)}
							label='Bookmark'
							onPress={() => navigation.navigate('Bookmark')}
						/>
						<DrawerItem
							icon={({color, size}) => (
								<AntDesign name="setting" size={size} color={color} />
							)}
							label='Setting'
							onPress={() => navigation.navigate('Setting')}
						/>
						<DrawerItem
							icon={({color, size}) => (
								<SimpleLineIcons name="support" size={size} color={color} />
							)}
							label='Support'
							onPress={() => navigation.navigate('Support')}
						/>
						<DrawerItem
							icon={({color, size}) => (
								<Feather name="more-horizontal" size={size} color={color} />
							)}
							label='More'
							onPress={() => navigation.navigate('More')}
						/>
					</Drawer.Section>
					<Drawer.Section title='Preferences'>
						<TouchableRipple onPress={() => {toggleTheme()}}>
							<View
								style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 12, paddingHorizontal: 16, alignItems: 'center'}}
							>
								<Text>Dark Theme</Text>
								<View pointerEvents='none'>
									<Switch value={theme} />
								</View>
							</View>
						</TouchableRipple>
					</Drawer.Section>
				</View>
			</DrawerContentScrollView>
			<Drawer.Section style={{marginBottom: 15, borderColor: '#f4f4f4', borderWidth: 1}}>
				<DrawerItem
					icon={({color, size}) => (
						<AntDesign name="logout" size={size} color={color} />
					)}
					label='Sign out'
					onPress={() => navigation.navigate('Setting')}
				/>
			</Drawer.Section>
		</View>
	)
}
