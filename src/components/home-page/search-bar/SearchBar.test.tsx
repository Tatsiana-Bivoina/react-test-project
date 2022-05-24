import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../../redux/store/configureStore';
import { SearchBar } from './SearchBar';

const fakeLocalStorage = (() => {
  const store = new Map<string, string>();
  return {
    getItem: function (key: string): string | null {
      return store.get(key) || null;
    },
    setItem: function (key: string, value: string): void {
      store.set(key, value);
    },
    removeItem: function (key: string): void {
      store.delete(key);
    },
    clear: function (): void {
      store.clear();
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: fakeLocalStorage,
});

const ReduxWrapper = (children: React.ReactNode) => <Provider store={store}>{children}</Provider>;

describe('SearchBar', () => {
  test('renders searchBar component', () => {
    render(ReduxWrapper(<SearchBar />));
    const container = screen.getByTestId('search-container');
    const inputs: HTMLElement[] = screen.getAllByRole('textbox');
    const btn: HTMLElement = screen.getByText(/Search/i);
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('search-container');
    expect(container).toContainElement(btn);
    expect(inputs).toHaveLength(2);
    expect(btn).toBeInTheDocument();
  });

  test('change searchBar value', () => {
    render(ReduxWrapper(<SearchBar />));
    const input: HTMLElement = screen.getByTestId('input-search');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('Nature');
    fireEvent.change(input, {
      target: { value: 'JavaScript' },
    });
    expect(input).toHaveValue('JavaScript');
  });

  test('write value to localStorage', () => {
    render(ReduxWrapper(<SearchBar />));
    const input: HTMLInputElement = screen.getByTestId('input-search');
    input.value = 'fake-test';
    window.localStorage.setItem('action', input.value);
    expect(window.localStorage.getItem('action')).toEqual('fake-test');
  });
});
