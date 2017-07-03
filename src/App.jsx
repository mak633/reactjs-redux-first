import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTracks } from './actions/tracks'

class App extends React.Component {
  addTrack = () => {
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value= '';
  }
  findInput = () => {
      this.props.onSearchTrack(this.searchInput.value);
  }
  render() {
        return (
            <div>
              <div>
                <input type="text" ref={(input) => {this.trackInput = input}}/>
                <button onClick={this.addTrack}>Add track</button>
              </div>
              <div>
                <input type="text" ref={(input) => {this.searchInput = input}}/>
                <button onClick={this.findInput}>Search</button>
              </div>
              <div>
                <button onClick={this.props.onAsyncGet}>Get Tracks</button>
              </div>
              <ul>
                {
                  this.props.tracks.map((item) =>
                    <li key={item.id}>{item.name}</li>
                  )
                }
              </ul>
            </div>
        )
  }
}
export default connect(
  state => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
  }),
  dispatch => ({
    onAddTrack: (name) => {
      const payload = {
        id: Date.now(),
        name
      }
      dispatch({type: "ADD_TRACK", payload})
    },
    onSearchTrack: (name) => {
      dispatch({type: "FILTER_TRACKS", payload: name})
    },
    onAsyncGet: () => {
      dispatch(getTracks());
    }
  })
)(App);
