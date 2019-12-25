import React, {Component} from 'react';
import PostList from './posts/PostList';
import '../styles/App.css';

class App extends Component{
  render(){
    return(
      <div className='wrapper'>
        <PostList />
      </div>
    )
  }
}

export default App;
