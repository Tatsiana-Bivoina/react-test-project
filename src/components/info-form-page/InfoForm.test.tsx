import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/store/configureStore';
import { InfoForm } from './InfoForm';

const ReduxWrapper = (children: React.ReactNode) => <Provider store={store}>{children}</Provider>;

describe('InfoForm', () => {
  test('renders InfoForm component', () => {
    render(ReduxWrapper(<InfoForm />));
    const section = screen.getByTestId('form-section');
    const form = screen.getByTestId('info-form');
    const cardsContainer = screen.getByTestId('form-cards-container');
    const formFields = screen.getAllByTestId('form-field');

    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('info-form-section');
    expect(form).toBeInTheDocument();
    expect(cardsContainer).toBeInTheDocument();
    expect(formFields).toHaveLength(10);
  });
});
