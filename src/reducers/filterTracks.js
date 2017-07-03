const initialState = '';

export default function tracks(state = initialState, action){
  if(action.type === "FILTER_TRACKS"){
    return action.payload;
  }
  return state;
}
