import React, { Component } from 'react';
import './App.css';
import './'

class App extends Component {

  render() {
     return (
        <div className="flex">
          <div className="text">
            <p>Hello, I'm <span className="highlight">{this.props.name}</span>.</p>
            <p>{this.props.comment}</p>
          </div>

          <div className="button page-link" dest="about">View my work <i className="mdi mdi-arrow-right"></i></div>
          <nav className="flex">
            <div className="link-wrap">
              <div className="active page-link" dest="home">home</div>
              <div className="page-link" dest="about">about</div>
              <div className="page-link" dest="portfolio">portfolio</div>
              <div className="page-link" dest="blog">my life</div>
              <div className="page-link" dest="contact">contact</div>
            </div>
            <i className="mdi mdi-menu"></i>
          </nav>
        </div>
     );
  }
}
export default App;


