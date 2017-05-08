import React from 'react';
import {
  Modal,
  View,
  Text,
  TextInput
} from 'react-native';
import { ExerciseList } from './ExerciseList';
import { Topbar } from './Topbar';
import { SearchBar } from './Searchbar';
import LinearGradient from 'react-native-linear-gradient';


export const ExerciseModal = (props) => (
  <Modal
    style={{ flex: 1 }}
    animationType={'slide'}
    visible={props.visible}
    onRequestClose={props.closeModal}
  >
    <View>
      <Topbar>
        <LinearGradient
          colors={['#87FC70', '#0BD318']}
          start={[0.0, 0.5]}
          end={[1.0, 0.5]}
          locations={[0.0, 1.0]}
        >
          <SearchBar />
        </LinearGradient>
      </Topbar>
    </View>
    <ExerciseList {...props} />
  </Modal>
);
