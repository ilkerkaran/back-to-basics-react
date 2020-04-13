import React from 'react';
import renderer from 'react-test-renderer';
import TextArea from './FormTextAreaInput';


describe('<TextArea /> snapshot ', () => {
  const inputConfig = {
    inputType: 'textArea',
    inputName: 'textArea',
    label: 'TextArea',
    isRequired: true,
    register: () => {},
    errors: {}
  };


  it('renders correctly', () => {
    const tree = renderer
      .create(<TextArea inputConfig={inputConfig}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
