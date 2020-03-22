import { callApi } from '../src/api';
import { add } from '../src/util';

// 실습1
Page2.getInitialProps = async ({ query }) => {
  const text = query.text || 'none';
  const data = await callApi();
  return { text, data };
};

export default function Page2({ text, data } = {}) {
  function onClick() {
    import('../src/sayHello').then(({ sayHello }) => console.log(sayHello()));
  }
  return (
    <div>
      <p>this is home page2</p>
      <p>{`text: ${text} ${add(1, 2)}`}</p>
      <p>{`data is ${data}`}</p>
      <button onClick={onClick}>sayHello</button>
    </div>
  );
}

// 실습2
// Page2.getInitialProps = async ({ query }) => {
//   const { sayHello } = await import('../src/sayHello');
//   console.log(sayHello());
//   const text = query.text || 'none';
//   const data = await callApi();
//   return { text, data };
// };

// export default function Page2({ text, data }) {
//   return (
//     <div>
//       <p>this is home page2</p>
//       <p>{`text: ${text}`}</p>
//       <p>{`data is ${data}`}</p>
//     </div>
//   );
// }
