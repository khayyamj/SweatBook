import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export const Topbar = () => (
  <View style={[styles.container, props.style]}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 60,
    flex: 1
  }
})
