class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  render() {
    const text = this.state.liked ? '좋아요 취소4' : '좋아요';
    return React.createElement(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      text,
    );
  }
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        <LikeButton />
        <div style={{ marginTop: 20 }}>
          <span>현재 카운트: </span>
          <span>{this.state.count}</span>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            증가
          </button>
          <button
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            감소
          </button>
        </div>
      </div>
    );
  }
}

const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(Container), domContainer);
