/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

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

  return (
    <SafeAreaView style={backgroundStyle}>
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
        </View>
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

export default App;
