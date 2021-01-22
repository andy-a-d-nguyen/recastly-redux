import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

// Instead of passing props to from parent to children, use Redux store to pass Reux state to children through containers

var mapStateToProps = (state) => ({ // this function lives in the container and gets notified by connect about changes to Redux state
  videos: state.videos
})

// dispatch is a function that takes an action object and sends it to the Redux store.
// the Redux store then calls the rootReducer to update the specified Redux state
var mapDispatchToProps = (dispatch) => ({
  handleVideoListEntryTitleClick: (video) => { // this function lives in the container and gets passed to the component as a prop and produces an action object
    dispatch(changeVideo(video));              // dispatch takes in the produced action object and sends it to the Redux store
  }                                            // inside the Redux store, a function (reducer) takes in the aprevious state and the action
                                               // and produces a new state
})

// the container will now pass props to children
// event listeners now live in the container instead of the component and will be passed to the component as a prop
// connect will listen for changes to the Redux store
// when connect is notified of a new state, it invokes getState
// connect then notifies mapStateToProps of new state
// mapStateToProps then gives connect a props object
// connect then reinitialize a new component with new props
var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
