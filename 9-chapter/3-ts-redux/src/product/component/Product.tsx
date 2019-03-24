import React from 'react';
import { connect } from 'react-redux';
import { ReduxState } from '../../common/store';
import { actions } from '../state/action';
import { Dispatch } from 'redux';

type PropsState = ReturnType<typeof mapStateToProps>;
type PropsDispatch = ReturnType<typeof mapDispatchToProps>;
type Props = PropsState & PropsDispatch;

class Product extends React.Component<Props> {
  onClick = () => {
    this.props.setName('shampoo');
    this.props.setPrice(12000);
    this.props.increaseCount();
  };
  render() {
    const { name, price, count } = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>{price}</p>
        <p>{`update count: ${count}`}</p>
        <button onClick={this.onClick}>정보 추가하기</button>
      </div>
    );
  }
}

export const mapStateToProps = (state: ReduxState) => {
  return {
    name: state.product.name,
    price: state.product.price,
    count: state.product.count,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setName: (name: string) => {
      dispatch(actions.setName(name));
    },
    setPrice: (price: number) => {
      dispatch(actions.setPrice(price));
    },
    increaseCount: () => {
      dispatch(actions.increaseCount());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);
