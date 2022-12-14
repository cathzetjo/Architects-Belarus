import React, { Component } from 'react';
import { TextField, Container } from '@material-ui/core';
import ArchitectNav from '../Navigation/ArchitectNav';

class SearchByArchitects extends Component {
  state = {
    searchResults: this.props.architects,
    value: '',
  }

  componentDidUpdate(prevProps) {
    if (prevProps.searchPlaceholder !== this.props.searchPlaceholder) {
      this.setState({
        searchResults: this.props.architects,
        value: '',
      });
    }
  }

  findArchitects(searchText) {
    const matches = [];
    const regExp = new RegExp(`^${searchText}|\\s${searchText}`, 'i');
    this.props.architects.forEach((architect) => {
      const criteria = [
        architect.name,
        architect.placeOfBirth,
        architect.placeOfResidence,
      ];
      let fit = false;
      criteria.forEach((text) => {
        if (text.match(regExp)) {
          fit = true;
        }
      });
      if (fit) {
        matches.push(architect);
      }
    });
    return matches;
  }

  handleSearch(value) {
    if (value !== '') {
      const searchResults = this.findArchitects(value);
      this.setState({
        searchResults,
        value,
      });
    } else {
      this.setState({
        searchResults: this.props.architects,
        value,
      });
    }
  }

  render() {
    return <>
      <Container maxWidth="lg">
        <form noValidate autoComplete="off">
          <TextField
            id="outlined-full-width"
            value={this.state.value}
            label={this.props.searchPlaceholder}
            fullWidth
            onChange={(ev) => this.handleSearch(ev.target.value)}
            margin="normal"
            variant="outlined"
          />
        </form>
        <ArchitectNav links={this.state.searchResults} />
      </Container>
    </>
  }
}

export default SearchByArchitects;
