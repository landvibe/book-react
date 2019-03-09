import React from 'react';
import './Box1.css';

function Box({ size }) {
  if (size === 'big') {
    return <div className="box big">큰 박스</div>;
  } else {
    return <div className="box small">작은 박스</div>;
  }
}
export default Box;
