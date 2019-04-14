import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image, ProgressViewIOS} from 'react-native';
import Logo from './assets/chef.png';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.h1}>AlligatorChef</Text>
          <Text style={styles.h2}>Providing cajun bacon recipes since 1987.</Text>
        </View>
        <View style={styles.middleContainer}>
          <Image
            source={Logo}
            style={styles.image}
          />
        </View>
        <ProgressViewIOS number={1} />
        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <Button
              title="LET'S START"
              style={styles.button}
              onPress={() => this.onPress()}
              color="#fff"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  topContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    color: '#008F68',
    fontSize: 40,
  },
  h2: {
    color: '#FAE042',
    fontSize: 18,
    marginTop: 8,
  },
  middleContainer: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 260,
    justifyContent: 'center',
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    width: '90%',
    margin: 20,
    padding: 10,
  },
  buttonContainer: {
    backgroundColor: '#008F68',
    borderRadius: 5,
    padding: 8,
    margin: 8,
  },
});
