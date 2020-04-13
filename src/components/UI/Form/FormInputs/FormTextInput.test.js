import React from 'react';
import renderer from 'react-test-renderer';
import Text from './FormTextInput';


describe('<Text /> snapshot ', () => {
  const inputConfig = {
    inputType: 'text',
    inputName: 'text',
    label: 'Text',
    isRequired: true,
    register: () => {},
    errors: {}
  };


  it('renders correctly', () => {
    const tree = renderer
      .create(<Text inputConfig={inputConfig}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
