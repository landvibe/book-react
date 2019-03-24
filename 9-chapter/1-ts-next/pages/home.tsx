import { add } from '../src/util';
export default () => (
  <div>
    <p>this is next.js + typescript</p>
    <p>{`2 + 3 = ${add(2, 3)}`}</p>
  </div>
);
