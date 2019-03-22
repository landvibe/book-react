import Head from 'next/head';
import Icon from '../static/icon.png';
import { add } from '../src/util';
import styled from 'styled-components';

const MyP = styled.div`
  color: blue;
  font-size: 18pt;
`;

function Page1() {
  return (
    <div>
      <MyP>{`10 + 20 = ${add(10, 20)}`}</MyP>
      <MyP>this is home page</MyP>
      <p>{`10 + 20 = ${add(10, 20)}`}</p>
      <p>this is home page</p>
      <img src={Icon} />
      <Head>
        <title>page1</title>
      </Head>
      <Head>
        <meta name="description" content="hello world" />
      </Head>
    </div>
  );
}

export default Page1;
