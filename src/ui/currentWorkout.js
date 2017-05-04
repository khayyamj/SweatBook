import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { TopBar } from './TopBar'

export const CurrentWorkout = () => (
  <View>
    <TopBar style={styles.topbar}>
      <Text style={styles.textbar}>Current Workout</Text>
    </TopBar>
    <Text>
      Current Workout
    </Text>
  </View>
)

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'white'
  },
  textbar: {
    color: 'white',
    fontSize: 30
  }
})
