import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Alert, Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Image, ScrollView, FlatList, TouchableOpacity, DevSettings, KeyboardAvoidingView, Platform, Animated } from 'react-native'
import { Fontisto } from '@expo/vector-icons'; 
import Home from './src/components/screens/home';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ReviewDetail from './src/components/screens/reviewDetail';
import About from './src/components/screens/demo/about';
import { FontAwesome } from '@expo/vector-icons'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Setting from './src/components/screens/Setting';
import DrawerItem from '@react-navigation/drawer';
import { EvilIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import DrawerContent  from './src/components/screens/DrawerContent';
import More from './src/components/screens/More';
import Calculator from './src/components/screens/exercises/Calculator';
// import Home from './src/components/screens/self-taught projects/Home'
import PlantDetail from './src/components/screens/self-taught projects/PlantDetail';
import STAnimation from './src/components/screens/animation/STAnimation';
import AnimationHeader from './src/components/screens/animation/AnimationHeader';
import DoubleTap from './src/components/screens/exercises/DoubleTap';
import PhoneNumber from './src/components/screens/exercises/PhoneNumber';
import OpenCamera from './src/components/screens/exercises/OpenCamera';
import navigationIntent from './src/components/screens/exercises/navIntent/navigationIntent';
import CalendarAsync from './src/components/screens/exercises/CalendarAsync';
import HomeAnimation from './src/components/screens/animation/HomeAnimation';
import * as firebase from 'firebase';

export default function DemoCode() {

  // FIREBASE CONFIG
  var firebaseConfig = {
    apiKey: "AIzaSyBodj0Cm1qHe7fcjOCqza613JJEYQTvQ-g",
    authDomain: "vigor-mobile.firebaseapp.com",
    projectId: "vigor-mobile",
    storageBucket: "vigor-mobile.appspot.com",
    messagingSenderId: "13336958074",
    appId: "1:13336958074:web:4f835f529e5111351857c3",
    measurementId: "G-3D5KWH61V7"
  }

  // Initialize firebase 
  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  } else {
    firebase.app()
  }



  // =================================================================

  // const [valueChange, setValueChange] = useState('');
  // const [titleColor, setTitleColor] = useState('aqua');

  // const [cars, setCars] = useState([
  //   {name: 'Audi', _id: '1'},
  //   {name: 'BMW', _id: '2'},
  //   {name: 'Chevrolet', _id: '4'},
  //   {name: 'Dodge', _id: '5'},
  //   {name: 'Ford', _id: '6'},
  //   {name: 'GMC', _id: '7'},
  //   {name: 'Huyndai', _id: '8'},
  //   {name: 'Infinity', _id: '9'},
  //   {name: 'Jeep', _id: '10'},
  //   {name: 'Kia', _id: '11'},
  //   {name: 'Lexus', _id: '12'},
  //   {name: 'Mustang', _id: '13'},
  //   {name: 'Nissan', _id: '14'},
  //   {name: 'Opel', _id: '15'},
  //   {name: 'Ram', _id: '16'},
  // ]);

  // const changeTitleColor = () => {
  //   setTitleColor('green');
  //   // styles.title.color = titleColor;
  // }

  // const touchHandler = (id) => {
  //   console.log(id);
  //   setCars((prevCar) => {
  //     return prevCar.filter(delCar => delCar._id !== id)
  //   })
  // }

  // const carsAlert = (carNameAlert) => {
  //   switch (carNameAlert) {
  //     case 'Audi':
  //       // setCarsName('Audi');
  //       Alert.alert('Audi', 'Car with A char', [
  //         {text: 'Wanna buy :))', onPress: () => console.log("Let's take a ride :)))")},
  //         {text: 'Wow'},
  //         {text: ':V'},
  //       ]);
  //       break;
  //     case 'BMW':
  //       // setCarsName('BMW');
  //       Alert.alert('BMW');
  //       break;
  //     case 'Chevrolet':
  //       // setCarsName('Chevrolet');
  //       Alert.alert('Chevrolet');
  //       break;
  //     case 'Dodge':
  //       // setCarsName('Dodge');
  //       Alert.alert('Dodge');
  //       break;
  //     case 'Ford':
  //       // setCarsName('Ford');
  //       Alert.alert('Ford');
  //       break;
  //     case 'GMC':
  //       // setCarsName('GMC');
  //       Alert.alert('GMC');
  //       break;
  //     case 'Huyndai':
  //       // setCarsName('Huyndai');
  //       Alert.alert('Huyndai');
  //       break;
  //     case 'Infinity':
  //       // setCarsName('Infinity');
  //       Alert.alert('Infinity');
  //       break;
  //     case 'Jeep':
  //       // setCarsName('Jeep');
  //       Alert.alert('Jeep');
  //       break;
    
  //     default:
  //       // setCarsName('Unavailable car name');
  //       Alert.alert('Unavailable car name');
  //       break;
  //   }
  // }

  let [fontsLoaded] = useFonts({
    'nunito-regular': require('./src/assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./src/assets/fonts/Nunito-Bold.ttf')
  });

  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

   const settingStackNavigator = ({navigation}) => {
    return (
      <Stack.Navigator mode='modal' > 
        {/* initialRouteName='Setting' */}
        <Stack.Screen 
          name='Setting' 
          component={Setting} 
          options={{title: 'Setting', headerLeft: () => (
          <Ionicons 
            name="chevron-back-outline" 
            size={30} 
            color="black"
            style={{marginLeft: 10}} 
            onPress={() => navigation.goBack()}
          />
          )}} 
        />
        {/* <Stack.Screen name='Home' component={Home} /> */}
      </Stack.Navigator>
    )
  }

  const DrawerNav = () => {
    return (
      <Drawer.Navigator 
        edgeWidth={0} 
        // drawerStyle={{
        //   backgroundColor: '#c6cbef',
        //   // width: 240,
        // }}
        drawerContent={(navigation) => <DrawerContent {...navigation} />}
      >
        <Drawer.Screen 
          name='Home' 
          component={StackNavigator} 
          options={{
            headerTitle: 'Homeee',
          }}
        />
        <Drawer.Screen 
          name='Setting' 
          component={settingStackNavigator} 
        />
        <Drawer.Screen 
          name='More' 
          component={moreStackNavigator} 
        />
      </Drawer.Navigator>
    )
  }

  const StackNavigator = ({navigation}) => {
    return (
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#F7BC8D',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: '900',
            fontSize: 35,
          },
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen name='Home' options={{title: 'Vigor', 
          headerRight: () => (
            <FontAwesome 
              name="search" size={24} 
              color="white" 
              style={{marginRight: 20}} 
              onPress={() => Alert.alert('...searching')}
            />
          ), 
          headerLeft: () => (
            // <DrawerItem
            //   label="Toggle drawer"
            //   onPress={() => navigation.toggleDrawer()}
            // />
            <EvilIcons 
              name="navicon" size={35} 
              color="white" 
              style={{marginLeft: 20}} 
              onPress={() => navigation.toggleDrawer()}
            />
          )}} component={Home} />
        <Stack.Screen name='Detail' component={ReviewDetail} />
        <Stack.Screen name='About' options={({route}) => ({ headerBackTitle: route.params?.manufacturer, title: '', headerBackTitleStyle: {fontWeight: '900'}, headerTitleAlign: 'center'})} component={About} />
      </Stack.Navigator>
    )
  }

  const moreStackNavigator = ({navigation, route}) => {
    return (
      <Stack.Navigator 
        initialRouteName='More' 
        mode='modal'
      >
        <Stack.Screen name='More' component={More} />
        <Stack.Screen 
          name='Calculator' 
          component={Calculator} 
          options={{
            headerStyle: {
              backgroundColor: 'black',
              shadowColor: 'black'
            }, 
            headerTintColor: 'white',
            // headerBackTitle: '', 
            headerTitle: '', 
            // headerBackTitleVisible: false,
            headerLeft: null
          }}
        />
        <Stack.Screen 
          name='DoubleTap' 
          component={DoubleTap} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='PhoneNumber' 
          component={PhoneNumber} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='Camera' 
          component={OpenCamera} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='NavIntent' 
          component={navigationIntent} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='CalendarAsync' 
          component={CalendarAsync} 
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    )
  }

  // =====================================================

  // SELF-TAUGHT PROJECT 1
  // Tab navigator
  // const Tab = createBottomTabNavigator();
  // const tabOptions = {
  //   showLabel: false,
  //   style: {
  //     height: '10%'
  //   }
  // }

  // const CameraButton = () => {
  //   return (
  //     <View
  //       style={{
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         width: 50,
  //         height: 50,
  //         borderRadius: 50 / 2,
  //         backgroundColor: '#00996D'
  //       }}
  //     >
  //       <Image 
  //         source={{uri: 'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/icons/camera.png?raw=true'}}
  //         resizeMode='contain'
  //         style={{
  //           width: 23,
  //           height: 23
  //         }}
  //       />
  //     </View>
  //   )
  // }

  // const tabNavigator = ({navigation}) => {
  //   return (
  //     <Tab.Navigator
  //       tabBarOptions={tabOptions}
  //       screenOptions={({route}) => ({
  //         tabBarIcon: ({focused}) => {
  //           const tintColor = focused ? '#00996D' : '#BEC1D2';

  //           switch (route.name) {
  //             case 'Home':
  //               return (
  //                 <Image 
  //                   source={{uri: 'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/icons/flash_icon.png?raw=true'}}
  //                   resizeMode='contain'
  //                   style={{
  //                     tintColor: tintColor,
  //                     width: 25,
  //                     height: 25
  //                   }}
  //                 />
  //               )
  //               // break;
  //             case 'Box':
  //               return (
  //                 <Image 
  //                   source={{uri: 'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/icons/cube_icon.png?raw=true'}}
  //                   resizeMode='contain'
  //                   style={{
  //                     tintColor: tintColor,
  //                     width: 25,
  //                     height: 25
  //                   }}
  //                 />
  //               )
  //               // break;
  //             case 'Camera':
  //               return (
  //                 <CameraButton />
  //               )
  //               // break;
  //             case 'Search':
  //               return (
  //                 <Image 
  //                   source={{uri: 'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/icons/search_icon.png?raw=true'}}
  //                   resizeMode='contain'
  //                   style={{
  //                     tintColor: tintColor,
  //                     width: 25,
  //                     height: 25
  //                   }}
  //                 />
  //               )
  //               // break;
  //             case 'Favorite':
  //               return (
  //                 <Image 
  //                   source={{uri: 'https://github.com/byprogrammers/lets-code-react-native/blob/master/LCRN02-plant-app-exploration/assets/icons/heart_icon.png?raw=true'}}
  //                   resizeMode='contain'
  //                   style={{
  //                     tintColor: tintColor,
  //                     width: 25,
  //                     height: 25
  //                   }}
  //                 />
  //               )
  //               // break;
  //           }
  //         }
  //       })}
  //     >
  //       <Tab.Screen 
  //         name="Home"
  //         component={Home}
  //       />
  //       <Tab.Screen 
  //         name="Box"
  //         component={Home}
  //       />
  //       <Tab.Screen 
  //         name="Camera"
  //         component={Home}
  //       />
  //       <Tab.Screen 
  //         name="Search"
  //         component={Home}
  //       />
  //       <Tab.Screen 
  //         name="Favorite"
  //         component={Home}
  //       />
  //     </Tab.Navigator>
  //   )
  // }

  // ===================================================================

  // if(!fontsLoaded) {
  //   return <AppLoading />
  // } else {
  //   return (
  //     <NavigationContainer>
  //       {}
  //       <StatusBar style='dark' networkActivityIndicatorVisible={false} />
  //       {/* SELF-TAUGHT PROJECT 1 */}
  //       {/* <Stack.Navigator
  //         initialRouteName='Home'
  //         screenOptions={{
  //           headerShown: false,
  //           gestureEnabled: false,
  //         }}
  //       >
  //         <Stack.Screen 
  //           name="Home"
  //           component={tabNavigator}
  //         />
  //         <Stack.Screen 
  //           name="PlantDetail"
  //           component={PlantDetail}
  //         />
  //       </Stack.Navigator> */}
  //       {/* ==================================== */}

  //       <DrawerNav />
  //     </NavigationContainer>
  //   )
  // }

  // =================================================

  // return (
    // <ScrollView>
    //   <DismissKeyboard>
    //     <View style={styles.container}>
    //       <View style={styles.header}>
    //         <Text style={styles.title}>VIGOR {titleColor}</Text>
    //       </View>
    //       <View style={styles.buttonContainer}>
    //         <Button 
    //           title='Demo button' 
    //           // onPress={changeTitleColor}
    //           onPress={() => Alert.alert('Yoo')}
    //         />
    //       </View>
    //       <Image 
    //         source={require('./assets/favicon.png')}
    //       />
    //         {cars.map(car => (
    //         <View key={car.key} style={styles.carViewStyle}>
    //           <Text
    //             style={styles.carStyle}
    //           >
    //             {car.name}
    //           </Text>
    //         </View>
    //       ))}
    //     </View>
    //   </DismissKeyboard>
    //   <View>
    //     <TextInput 
    //       style={styles.input}
    //       placeholder='demo input react native'
    //       onChangeText={text => setValueChange(text)} 
    //       value={valueChange} 
    //       multiline
    //       editable={true}
    //       numberOfLines={10}
    //       dataDetectorTypes='phoneNumber'
    //       keyboardAppearance='dark'
    //     />
    //   </View> 
    // </ScrollView>
  // <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
//   <KeyboardAvoidingView
//     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
//     style={styles.contain}
//   >
//   <View style={styles.container}>
//   <View style={styles.viewFlexMore}>
//     <Button
//       title='Reload'
//       onPress={() => DevSettings.reload()}
//     />
//     <View>
//       <TextInput 
//         style={styles.input}
//         placeholder='demo input react native'
//         onChangeText={text => setValueChange(text)} 
//         value={valueChange} 
//         multiline
//         editable={true}
//         numberOfLines={10}
//         dataDetectorTypes='phoneNumber'
//         keyboardAppearance='dark'
//       />
//     </View> 
//     <View style={styles.viewFlex}>
//     <FlatList
//       data={cars}
//       renderItem={({ item }) => (
//       //      <DismissKeyboard>
//       //       <View style={styles.container}>
//       //         <View style={styles.header}>
//       //           <Text style={styles.title}>VIGOR {titleColor}</Text>
//       //         </View>
//       //         <View style={styles.buttonContainer}>
//       //           <Button 
//       //             title='Demo button' 
//       //             // onPress={changeTitleColor}
//       //             onPress={() => Alert.alert('Yoo')}
//       //           />
//       //         </View>
//       //     <Image 
//       //       source={require('./assets/favicon.png')}
//       //     />
            
//       //   </View>
//       // </DismissKeyboard> 
//       //  <View>
//       //   <TextInput 
//       //     style={styles.input}
//       //     placeholder='demo input react native'
//       //     onChangeText={text => setValueChange(text)} 
//       //     value={valueChange} 
//       //     multiline
//       //     editable={true}
//       //     numberOfLines={10}
//       //     dataDetectorTypes='phoneNumber'
//       //     keyboardAppearance='dark'
//       //   />
//       // </View>  
//       <View style={styles.carViewStyle}>
//         <TouchableOpacity onPress={() => touchHandler(item._id)}>
//           <Text
//             style={styles.carStyle}
//             >
//             {item.name}
//           </Text>
//           <Fontisto name='car' size={24} color='black' />
//         </TouchableOpacity>
//         <View style={styles.buttonContainer}>
//           <Button 
//             title='Car name' 
//             // onPress={changeTitleColor}
//             onPress={() => carsAlert(item.name)}
//           />
//         </View>
//       </View>
//       )}
//       keyExtractor={(item) => item._id}
//     />
//     </View>
//   </View>
//   </View>
// {/* </TouchableWithoutFeedback>   */}
//   </KeyboardAvoidingView>
  // );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: 'black',
//     // flexDirection: 'column'
//     // backgroundColor: 'aqua',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
//   contain: {
//     flex: 1,
//   },
//   header: {
   
//   }, 
//   title: {
//     fontSize: 64,
//     color: '#FFBE99',
//   }, 
//   input: {
//     borderWidth: 1,
//     borderColor: 'black', 
//     borderStyle: 'solid', 
//     padding: 8,
//   },
//   buttonContainer: {
//     borderWidth: 1,
//     borderStyle: 'solid',
//     borderColor: 'blue',
//     borderRadius: 50,
//     paddingLeft: 12,
//     paddingRight: 12,
//   }, 
//   carViewStyle: {
//     flexDirection: 'row', 
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: 'aqua', 
//     marginBottom: 20, 
//     paddingHorizontal: 30,
//     paddingVertical: 50,
//   },
//   carStyle: {
//     // backgroundColor: 'pink', 
//     fontSize: 24
//   },
//   viewFlex: {
//     flex: 1,
//     // backgroundColor: 'blue',
//     marginTop: 20,
//     // marginBottom: 50,
//   },
//   viewFlexMore: {
//     flex: 1,
//     // backgroundColor: 'red',
//     padding: 40
//   },
// });

// =========================================================

// ANIMATION
return (
  // <STAnimation />
  <HomeAnimation />
)
}