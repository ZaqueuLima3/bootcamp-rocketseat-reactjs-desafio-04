import React, { Component } from 'react';

import Header from '../components/Header';
import PostsList from '../components/PostsList';

class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container"> 
          <PostsList />
        </div>
      </>
    );
  }
}

export default Main;