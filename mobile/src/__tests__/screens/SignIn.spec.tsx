import React from 'react';
import { render } from 'react-native-testing-library';

import SignIn from '../../screens/SignIn';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

describe('SignIn page', () => {
  it('should contains email/password input', () => {
    const { getByPlaceholder } = render(<SignIn />);

    expect(getByPlaceholder('E-mail')).toBeTruthy();
    expect(getByPlaceholder('Senha')).toBeTruthy();
  });
});
