/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Button,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={backgroundStyle} style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text style={{
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 24,
              margin: 20,
          }}>
            JustAReactNativeApp
          </Text>
    </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="People" component={People} />
        <Stack.Screen name="Person" component={Person} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

const People = ({navigation}) => {
    const [people, setPeople] = useState([]);

    const getPeople = () => {
        fetch('https://fakerapi.it/api/v1/users?_quantity=10')
            .then((response) => response.json())
            .then((json) => {
                setPeople(json.data);
              }
            ).catch((error) => { console.log(error); });
    }

    useEffect(() => {
        getPeople();
    }, [])

    return (
    <View>
    {!people.isEmpty ?
        <FlatList
          data={people}
          renderItem={({ item }) => (
              <Button
                title={`${item.firstname} ${item.lastname}`}
                onPress={() => navigation.navigate('Person', { person: item })}
              />
          )} />

        : <Text>No people data</Text>}
    </View>
   );
};

const Home = ({navigation}) => {
    return (
    <View>
        <Text style={{ margin: 10, fontSize: 16 }}>
           This is a React Native application built for Android. This second sentence shows what happens when the text overlaps.
        </Text>
        <Text style={{
           marginLeft: 10,
           marginTop: 10,
           marginBottom: 15,
           fontSize: 18
         }}>
           Here is a list of my classes this quarter:
         </Text>
         <FlatList
         data={[
           { key: 'AD315', title: 'Discrete Math for Computer Programming' },
           { key: 'AD340', title: 'Mobile Application Development' },
           { key: 'AD410', title: 'Web Application Practicum' }
         ]}
         renderItem={({item}) =>
           <Text style={{ margin: 5, marginLeft: 20 }}>
             {item.key}: {item.title}
           </Text>}
       />
       <Button
           title="Go to People"
           onPress={() => navigation.navigate('People')}
       />
   </View>
   );
}

const Person = ({navigation, route}) => {
    const {
        id,
        firstname,
        lastname,
        username,
        email,
        website,
        image
    } = route.params.person;

    return (
        <View style={{margin:10, alignItems: 'center' }}>
            <Text style={{marginBottom: 10, fontSize: 30}}>{firstname} {lastname}</Text>
            <Text style={{marginBottom: 10, fontSize: 20}}>{username}</Text>
            <Text style={{marginBottom: 10, fontSize: 20}}>{email}</Text>
            <Text style={{marginBottom: 10, fontSize: 20}}>{website}</Text>
            <Image
                source={{uri: `${image}${id}`}}
                style={{ width: '50%', height: '50%', marginTop: 30}}/>
        </View>);
}

export default App;
