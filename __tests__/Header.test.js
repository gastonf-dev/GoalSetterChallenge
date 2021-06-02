import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../src/components/Header';
describe('<Header />', () => {
  test('render header with title and subtitle', () => {
    const PROPS = {
      title: 'Test title',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus ipsum nec sapien pretium iaculis. Vestibulum condimentum sapien vitae felis consequat maximus.',
    };
    const wrapper = renderer.create(<Header {...PROPS} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('render header with title only', () => {
    const PROPS = {
      title: 'Test title',
    };
    const wrapper = renderer.create(<Header {...PROPS} />);
    expect(wrapper).toMatchSnapshot();
  });
});
