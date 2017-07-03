var mockApiTracks = [
  {
    id: 1,
    name: "song api 1"
  },
  {
    id: 2,
    name: "song api 2"
  },
  {
    id: 3,
    name: "song api 1"
  },
  {
    id: 4,
    name: "song api 4"
  },
  {
    id: 5,
    name: "song api 5"
  }
];

export const getTracks = () =>  dispatch => {
    setTimeout(() =>{
      console.log("I got it")
      dispatch({type:"FETCH_TRACKS_SUCCESS", payload: mockApiTracks})
    },2000)
};
