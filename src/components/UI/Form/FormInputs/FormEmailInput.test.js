import React from 'react';
import renderer from 'react-test-renderer';
import Email from './FormEmailInput';


describe('<Email /> snapshot ', () => {
  const inputConfig = {
    inputType: 'email',
    inputName: 'email',
    label: 'Username',
    isRequired: true,
    register: () => {},
    errors: {}
  };


  it('renders correctly', () => {
    const tree = renderer
      .create(<Email inputConfig={inputConfig}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
