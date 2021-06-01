import React from 'react';
import renderer from 'react-test-renderer';

import {render, fireEvent, waitFor} from '@testing-library/react-native';

import Button from '../src/components/button/Button';

describe('<Button />', () => {
  test('render button enable and short', () => {
    const ENABLE_SHORT = {
      title: 'Test button',
      onPress: () => console.log('onPress'),
      disabled: false,
      large: false,
    };
    const wrapper = renderer.create(<Button {...ENABLE_SHORT} />);
    expect(wrapper.getInstance);
  });

  test('render button disable and short', () => {
    const DISABLE_SHORT = {
      title: 'Test button',
      onPress: () => console.log('onPress'),
      disabled: true,
      large: false,
    };
    const wrapper = renderer.create(<Button {...DISABLE_SHORT} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('render button enable and large', () => {
    const ENABLE_LARGE = {
      title: 'Test button',
      onPress: () => console.log('onPress'),
      disabled: false,
      large: true,
    };

    const wrapper = renderer.create(<Button {...ENABLE_LARGE} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('render button disable and large', () => {
    const DISABLE_LARGE = {
      title: 'Test button',
      onPress: () => console.log('onPress'),
      disabled: true,
      large: true,
    };

    const wrapper = renderer.create(<Button {...DISABLE_LARGE} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('render button enable and short and press it', async () => {
    const ON_PRESS_BUTTON = jest.fn();
    const ENABLE_LARGE = {
      title: 'Test button',
      onPress: ON_PRESS_BUTTON,
      disabled: false,
      large: true,
    };

    const {getByTestId} = render(<Button {...ENABLE_LARGE} />);
    fireEvent.press(getByTestId('button'));
    await waitFor(() => {
      expect(ON_PRESS_BUTTON).toHaveBeenCalled();
    });
  });
});
