import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Modal from './Modal';


describe('<Modal /> snapshot ', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Modal show={true} onClose={() => {}}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Modal /> ', () => {
  it(' renders div witha a class name Modal', () => {
    const spinner = shallow(<Modal show onClose={() => {}}/>);
    expect(spinner.find('.Modal')).toHaveLength(1);
  });
});
