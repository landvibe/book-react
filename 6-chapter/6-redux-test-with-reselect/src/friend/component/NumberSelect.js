import React from 'react';

class NumberSelect extends React.Component {
  onChange = e => {
    const value = Number(e.currentTarget.value);
    this.props.onChange(value);
  };
  render() {
    const { value, options, postfix } = this.props;
    return (
      <div>
        <select onChange={this.onChange} value={value}>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {postfix}
      </div>
    );
  }
}
export default NumberSelect;
