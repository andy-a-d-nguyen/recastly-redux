import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

// asynchronous action creator
// by using redux-thunk, action creators can return a function which take in dispatch or getState as parameters
// redux thunk is implemented when the Redux store is created with createStore
var handleVideoSearch = (q) => {
  return (dispatch) => {
    var options = {
      key: YOUTUBE_API_KEY,
      query: query
    };

    searchYouTube(options, (videos) => {
      dispatch(changeVideo(videos[0]));
      dispatch(changeVideoList(videos));
    });

  }
  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;
