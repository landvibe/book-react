function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? '좋아요 취소' : '좋아요';
  return React.createElement('button', {
    onClick: () => setLiked(!liked)
  }, text);
}

function Container() {
  const [count, setCount] = React.useState(0);
  return React.createElement("div", null, React.createElement(LikeButton, null), React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, React.createElement("span", null, "\uD604\uC7AC \uCE74\uC6B4\uD2B8: "), React.createElement("span", null, count), React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "\uC99D\uAC00"), React.createElement("button", {
    onClick: () => setCount(count - 1)
  }, "\uAC10\uC18C")));
}

const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(Container), domContainer);