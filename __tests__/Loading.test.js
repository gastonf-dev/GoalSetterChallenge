import React from 'react';
import renderer from 'react-test-renderer';
import Loading from '../src/components/Loading';

describe('<Loading />', () => {
  const wrapper = renderer.create(<Loading />);

  test('render', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
