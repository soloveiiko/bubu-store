export const UPDATE_FILTER = 'UPDATE_FILTER';

export const updateFilter = (category, filter) => {
  return {
    type: UPDATE_FILTER,
    payload: { [category]: filter },
  };
};
