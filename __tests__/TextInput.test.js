import React from 'react';
import renderer from 'react-test-renderer';
import {render, fireEvent, waitFor} from '@testing-library/react-native';

import TextInput from '../src/components/TextInput';
describe('<TextInput />', () => {
  test('render input without value', () => {
    const WITHOUT_VALUE = {
      label: 'Test label',
      placeholder: 'Test placeholder',
      type: 'person',
      handleBlur: jest.fn(),
      handleChange: jest.fn(),
      value: '',
      name: 'test',
      error: '',
      touched: false,
    };
    const wrapper = renderer.create(<TextInput {...WITHOUT_VALUE} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('render input without value', () => {
    const WITH_VALUE = {
      label: 'Test label',
      placeholder: 'Test placeholder',
      type: 'person',
      handleBlur: jest.fn(),
      handleChange: jest.fn(),
      value: 'Test value',
      name: 'test',
      error: '',
      touched: false,
    };
    const wrapper = renderer.create(<TextInput {...WITH_VALUE} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should exists label component when render input with value', () => {
    const WITH_VALUE = {
      label: 'Test label',
      placeholder: 'Test placeholder',
      type: 'person',
      handleBlur: jest.fn(),
      handleChange: jest.fn(),
      value: 'Test value',
      name: 'test',
      error: '',
      touched: false,
    };
    const {getByTestId} = render(<TextInput {...WITH_VALUE} />);

    expect(getByTestId('label')).toBeTruthy();
  });
});
