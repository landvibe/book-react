import React from 'react';
import style from './Box2.module.css';
import cn from 'classnames';

function Box({ size }) {
  const isBig = size === 'big';
  const label = isBig ? '큰 박스' : '작은 박스';
  return (
    <div
      className={cn(style.box, { [style.big]: isBig, [style.small]: !isBig })}
    >
      {label}
    </div>
  );
}
export default Box;
