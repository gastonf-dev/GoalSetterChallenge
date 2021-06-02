import React from 'react';
import renderer from 'react-test-renderer';
import HeaderGradient from '../src/components/HeaderGradient';

jest.mock('react-native-linear-gradient', () => 'LinearGradient');

describe('<HeaderGradient />', () => {
  test('render header gradient', () => {
    const wrapper = renderer.create(<HeaderGradient />);
    expect(wrapper).toMatchSnapshot();
  });
});
