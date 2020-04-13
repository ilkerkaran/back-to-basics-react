import React from 'react';
import renderer from 'react-test-renderer';
import Backdrop from './Backdrop';


describe('<Backdrop /> snapshot ', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Backdrop show onClick={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
