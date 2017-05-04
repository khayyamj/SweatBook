import React from 'react';
import {
  View,
  Text
} from 'react-native';
import TabView from 'react-native-scrollable-tab-view';

export const Main = () => (
    <View style={{ flex: 1 }}>
      <TabView
        tabBarTextStyle={{ fontSize: 30 }}
        tabBarPosition="overlayBottom"
      >
        <Text tabLabel="tab1">Tab1</Text>
        <Text tabLabel="tab2">Tab2</Text>
      </TabView>
    </View>
);
