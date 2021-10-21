import React, { Component } from 'react';

export default class Search extends Component {
  state = {
    urlInput: '',
    radioInput: 'GET',
    bodyInput: '',

  }
  
  handleUrlInput = ({ target }) => {
    this.setState({ urlInput: target.value });
  } 

  handleRadioInput = ({ target }) => {
    this.setState({ radioInput: target.value });
  }

  bodyInput = ({ target }) => {
    this.setState({ bodyInput: target.value });
  }
  
  render() {
    return (
      <div>
        
      </div>
    );
  }
}
