import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableHighlight
} from 'react-native';
import TabView from 'react-native-scrollable-tab-view';
import LinearGradient from 'react-native-linear-gradient';
import { CurrentWorkout } from './currentWorkout';


export class Main extends Component {

  render () {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={['#FF9500', '#FF5E3A']}
          style={styles.container}>
          <TabView
            tabBarTextStyle={{ fontSize: 30 }}
            tabBarPosition="overlayBottom">
            <CurrentWorkout tabLabel="CW" />
            <Text tabLabel="tab1">Tab1</Text>
            <Text tabLabel="tab2">Tab2</Text>
          </TabView>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
