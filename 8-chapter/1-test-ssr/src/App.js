import React from 'react';
import Home from './Home';
import About from './About';

class App extends React.Component {
  state = {
    page: this.props.page,
  };
  componentDidMount() {
    window.onpopstate = event => {
      this.setState({ page: event.state });
    };
  }
  onChangePage = e => {
    const page = e.target.dataset.page;
    window.history.pushState(page, '', `/${page}`);
    this.setState({ page });
  };
  render() {
    const { page } = this.state;
    const PageComponent = page === 'home' ? Home : About;
    return (
      <div className="container">
        <button data-page="home" onClick={this.onChangePage}>
          Home
        </button>
        <button data-page="about" onClick={this.onChangePage}>
          About
        </button>
        <PageComponent />
      </div>
    );
  }
}
export default App;
