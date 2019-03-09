class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
  }

  render() {
    const text = this.state.liked ? '좋아요 취소4' : '좋아요';
    return React.createElement('button', {
      onClick: () => this.setState({
        liked: true
      })
    }, text);
  }

}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return React.createElement("div", null, React.createElement(LikeButton, null), React.createElement("div", {
      style: {
        marginTop: 20
      }
    }, React.createElement("span", null, "\uD604\uC7AC \uCE74\uC6B4\uD2B8: "), React.createElement("span", null, this.state.count), React.createElement("button", {
      onClick: () => this.setState({
        count: this.state.count + 1
      })
    }, "\uC99D\uAC00"), React.createElement("button", {
      onClick: () => this.setState({
        count: this.state.count - 1
      })
    }, "\uAC10\uC18C")));
  }

}

const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(Container), domContainer);