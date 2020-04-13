import React from 'react';
import renderer from 'react-test-renderer';
import Select from './FormSelectInput';


describe('<Select /> snapshot ', () => {
  const inputConfig = {
    inputType: 'select',
    inputName: 'paymentType',
    label: 'Please select a Payment Type',
    isRequired: true,
    options: [{
      id: 'creditCard',
      value: 'Credit/Debit Card'
    }, {
      id: 'cash',
      value: 'Cash'
    }],
    register: () => {},
    errors: {}
  };


  it('renders correctly', () => {
    const tree = renderer
      .create(<Select inputConfig={inputConfig}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
