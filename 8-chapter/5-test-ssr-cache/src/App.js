import React from 'react';
import Home from './Home';
import About from './About';
import styled from 'styled-components';
import Icon from './icon.png';

const Container = styled.div`
  background-color: #aaaaaa;
  border: 1px solid blue;
`;

function fetchUsername() {
  const usernames = ['mike', 'june', 'jamie'];
  return new Promise(resolve => {
    const username = usernames[Math.floor(Math.random() * 3)];
    setTimeout(() => resolve(username), 100);
  });
}

class App extends React.Component {
  state = {
    page: this.props.page,
    username: null,
  };
  componentDidMount() {
    window.onpopstate = event => {
      this.setState({ page: event.state });
    };
    fetchUsername().then(username => this.setState({ username }));
  }
  onChangePage = e => {
    const page = e.target.dataset.page;
    window.history.pushState(page, '', `/${page}`);
    this.setState({ page });
  };
  render() {
    const { page, username } = this.state;
    const PageComponent = page === 'home' ? Home : About;
    return (
      <Container>
        <button data-page="home" onClick={this.onChangePage}>
          Home
        </button>
        <button data-page="about" onClick={this.onChangePage}>
          About
        </button>
        <PageComponent username={username} />
        <img src={Icon} />
      </Container>
    );
  }
}
export default App;
