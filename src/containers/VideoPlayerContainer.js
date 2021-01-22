import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

// mapStateToProps: props to pass to the component
// everytime the state changes, state is passed to mapStateToProps to get props for the component
var mapStateToProps = (state) => ({
  video: state.currentVideo
})

// mapDispatchToProps: actions to pass to the component
// action is only passed once at the beginning
// mapDispatchToProps is not needed here because it does not receive an action / user input

// connect registers the component that needs to be rerendered
var VideoPlayerContainer = connect(mapStateToProps, null)(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
