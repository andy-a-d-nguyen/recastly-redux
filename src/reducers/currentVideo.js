import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
    case 'CHANGE_VIDEO':
      return action.video || null;
    default:
      return state;
  }
};

export default currentVideoReducer;
// currentVideoReducer is a function that will replace the old Redux state with the new Redux state (action) and return the new state or return the old state if action type does not match condition