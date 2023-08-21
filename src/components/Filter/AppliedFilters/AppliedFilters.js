import React from 'react';
import CloseButton from '../../commons/CloseButton/CloseButton';

const AppliedFilters = ({ selectedFilters, handleRemoveFilter }) => {
  return (
    <div className="applied-filters">
      {selectedFilters.category && (
        <p className="applied-filters__item">
          Категорія: {selectedFilters.category}
          <CloseButton isAccent={true} onClick={() => handleRemoveFilter('category')} />
        </p>
      )}
      {selectedFilters.isAvailable && (
        <p className="applied-filters__item">
          В наявності
          <CloseButton isAccent={true} onClick={() => handleRemoveFilter('isAvailable')} />
        </p>
      )}
      {selectedFilters.isDiscount && (
        <p className="applied-filters__item">
          Зі знижкою
          <CloseButton isAccent={true} onClick={() => handleRemoveFilter('isDiscount')} />
        </p>
      )}
      {Array.isArray(selectedFilters.selectedProducers) && selectedFilters.selectedProducers.length > 0 && (
        <p className="applied-filters__item">
          Виробник: {selectedFilters.selectedProducers.join(', ')}{' '}
          <CloseButton isAccent={true} onClick={() => handleRemoveFilter('selectedProducers')} />
        </p>
      )}
      {selectedFilters.minPrice && selectedFilters.maxPrice && (
        <p className="applied-filters__item">
          {selectedFilters.minPrice} / {selectedFilters.maxPrice}{' '}
          <CloseButton isAccent={true} onClick={() => handleRemoveFilter('minPrice', 'maxPrice')} />
        </p>
      )}
    </div>
  );
};

export default AppliedFilters;
