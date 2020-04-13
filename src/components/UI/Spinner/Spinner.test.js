import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Spinner from './Spinner';


describe('<Spinner /> snapshot ', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Spinner/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Spinner /> ', () => {
  it(' renders div witha a class name Loading', () => {
    const spinner = shallow(<Spinner/>);
    expect(spinner.text()).toEqual('Loading...');
  });
});
