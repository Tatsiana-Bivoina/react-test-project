export const getLocalStorageSearchValue = (search: string): string => {
  const searchValue: string | null = localStorage.getItem(search);
  if (searchValue == null) {
    return 'Nature';
  }
  return searchValue;
};
