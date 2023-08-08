export const UPDATE_FILTER = 'UPDATE_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILTER';

// export const updateFilter = (category, filter) => {
//   return {
//     type: UPDATE_FILTER,
//     payload: { [category]: filter },
//   };
// };
export const updateFilter = (filteredProducts) => {
  return {
    type: UPDATE_FILTER,
    payload: filteredProducts,
  };
};
export const clearFilter = () => {
  return {
    type: UPDATE_FILTER,
  };
};
