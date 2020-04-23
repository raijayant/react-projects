import React, { Component } from 'react';
import './App.css';
import Post from './Components/Post'
import PostForm from './Components/PostFrom'
import { Provider } from 'react-redux'



const store = createStore(() => [], {}, applyMiddleware())

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <hr />
          <Post />
        </div>
      </Provider>
     );
  }
}

export default App;