import React from 'react';
import renderer from 'react-test-renderer';
import Number from './FormNumberInput';


describe('<Number /> snapshot ', () => {
  const inputConfig = {
    inputType: 'number',
    inputName: 'number',
    label: 'Number',
    isRequired: true,
    register: () => {},
    errors: {}
  };


  it('renders correctly', () => {
    const tree = renderer
      .create(<Number inputConfig={inputConfig}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
