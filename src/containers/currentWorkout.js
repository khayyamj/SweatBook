import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { TopBar } from './TopBar'
import { connect } from 'react-redux';
import { setExerciseModalVisibility } from '../actions';

const mapStateToProps = (state) => {
  currentWorkout: state.currentWorkout,
  exerciseModal: state.ui.exerciseModal
}
const mapActionsToProps = (dispatch) =>{
  setModalVisibility(visible) {
    return dispatch (setExerciseModalVisibility(visible));
  }
}

class _CurrentWorkout extends Component {
  static defaultProps = {
    currentWorkout: []
  }

  render() {
    return(
      <View>
        <TopBar style={styles.topbar}>
          <Text style={styles.textbar}>Current Workout</Text>
        </TopBar>
        <Text>
          Current Workout
        </Text>
        <Text>
          Exercise Modal
        </Text>
      </View>
    )
  }
}

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
