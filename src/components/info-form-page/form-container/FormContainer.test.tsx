import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../redux/store/configureStore';
import { FormContainer } from './FormContainer';

const ReduxWrapper = (children: React.ReactNode) => <Provider store={store}>{children}</Provider>;

describe('FormContainer', () => {
  test('renders FormContainer component', () => {
    render(ReduxWrapper(<FormContainer />));
    const container = screen.getByTestId('form-container');
    const form = screen.getByTestId('info-form');

    expect(container).toBeInTheDocument();
    expect(container).toContainElement(form);
  });
});
