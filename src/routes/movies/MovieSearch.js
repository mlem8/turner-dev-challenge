import React, { Component } from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Movies.css';

const MovieSearch = React.createClass({

  handleChange: function(e){
    this.props.handleChange(e);
  },

  render: function() {

    return (

      <div>
        <h2>Find Movies</h2>
        <form>
          <FormGroup>
            <ControlLabel>Search by title</ControlLabel>
            <FormControl
              type="text"
              value={this.props.searchString}
              placeholder="Type here"
              onChange={this.props.handleChange}
            />
            <FormControl.Feedback />
          </FormGroup>
        </form>
      </div>

    );

  }
});

export default withStyles(s)(MovieSearch);