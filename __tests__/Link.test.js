import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent, waitFor} from '@testing-library/react-native';

import Link from '../src/components/Link';

describe('<Link />', () => {
  const PROPS = {title: 'Test link', onPress: jest.fn()};
  const wrapper = renderer.create(<Link {...PROPS} />);

  test('render link', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('render link and press it', async () => {
    const ON_PRESS_LINK = jest.fn();
    const PROPS = {title: 'Test link', onPress: ON_PRESS_LINK};

    const {getByTestId} = render(<Link {...PROPS} />);
    fireEvent.press(getByTestId('link'));
    await waitFor(() => {
      expect(ON_PRESS_LINK).toHaveBeenCalled();
    });
  });
});
