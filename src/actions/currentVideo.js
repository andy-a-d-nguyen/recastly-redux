var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
  type: 'CHANGE_VIDEO',
  video
});

export default changeVideo;
// changeVideo is an action creator that returns an action---an object that contains the new state of an existing state in Redux store