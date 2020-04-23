import React from 'react'
import './App.css'

import { Grid } from '@material-ui/core'
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'

import youtube from './components/api/Youtube'

class App extends React.Component {
  state = {
    video: [],
    selectedVideo: null
  }
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
    // returns vidoes
        part: 'snippet',
        maxResults: 5,
        key : 'AIzaSyB22W246Jhryn4R97A3n-OAlVlPxg6b0y0',
        q: searchTerm
  }
    })
    console.log(response)
  }
  render () {
    return (
      <Grid justify='center' container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail />
            </Grid>
            <Grid item xs={4}>
              {/* video lists */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default App
