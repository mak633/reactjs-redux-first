const initialState = ["playlist 1", "playlist 2"];

export default function playlists(state = initialState, action){
  if(action.type === "ADD_PLAYLIST"){
    return [
      ...state,
      action.payload
    ]
  }
  return state;
}
