import React from 'react';
import renderer from 'react-test-renderer';
import Password from './FormPasswordInput';


describe('<Password /> snapshot ', () => {
  const inputConfig = {
    inputType: 'password',
    inputName: 'password',
    label: 'Password',
    isRequired: true,
    register: () => {},
    errors: {}
  };


  it('renders correctly', () => {
    const tree = renderer
      .create(<Password inputConfig={inputConfig}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
