import { callApi } from '../src/api';

// 실습1
class Page2 extends React.Component {
  static async getInitialProps({ query }) {
    const text = query.text || 'none';
    const data = await callApi();
    return { text, data };
  }
  onClick = () => {
    import('../src/sayHello').then(({ sayHello }) => console.log(sayHello()));
  };
  render() {
    const { text, data } = this.props;
    return (
      <div>
        <p>this is home page2</p>
        <p>{`text: ${text}`}</p>
        <p>{`data is ${data}`}</p>
        <button onClick={this.onClick}>sayHello</button>
      </div>
    );
  }
}

// 실습2
// class Page2 extends React.Component {
//   static async getInitialProps({ query }) {
//     const { sayHello } = await import('../src/sayHello');
//     console.log(sayHello());
//     const text = query.text || 'none';
//     const data = await callApi();
//     return { text, data };
//   }
//   render() {
//     const { text, data } = this.props;
//     return (
//       <div>
//         <p>this is home page2</p>
//         <p>{`text: ${text}`}</p>
//         <p>{`data is ${data}`}</p>
//       </div>
//     );
//   }
// }
export default Page2;
