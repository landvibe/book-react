import { callApi } from '../src/api';

class Page2 extends React.Component {
  static async getInitialProps({ query }) {
    const text = query.text || 'none';
    const data = await callApi();
    return { text, data };
  }
  render() {
    const { text, data } = this.props;
    return (
      <div>
        <p>this is home page2</p>
        <p>{`text: ${text}`}</p>
        <p>{`data is ${data}`}</p>
      </div>
    );
  }
}
export default Page2;
