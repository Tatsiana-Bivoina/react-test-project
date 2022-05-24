import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../redux/store/configureStore';
import { Form } from './Form';

const ReduxWrapper = (children: React.ReactNode) => <Provider store={store}>{children}</Provider>;

describe('Form', () => {
  test('renders Form component', () => {
    render(ReduxWrapper(<Form />));
    const form = screen.getByTestId('info-form');
    const formFields = screen.getAllByTestId('form-field');

    expect(form).toBeInTheDocument();
    expect(formFields).toHaveLength(10);
  });

  test('btn sould be disabled on form initialization', () => {
    render(ReduxWrapper(<Form />));
    const btn = screen.getByText('Create card');
    expect(btn).toBeDisabled();
  });
});
