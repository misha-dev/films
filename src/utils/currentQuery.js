const storageQuery = 'searchedQuery';

export const getCurrentQuery = () => {
  return localStorage.getItem(storageQuery);
};

export const setCurrentQuery = (query) => {
  localStorage.setItem(storageQuery, query);
};
