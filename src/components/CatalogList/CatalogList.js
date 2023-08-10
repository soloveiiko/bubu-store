import React from 'react';
import { ProductItem, ShowMore } from '../commons';

const CatalogList = ({ filter, visibleProducts, filterData, catalogProducts, handleShowMore }) => {
  return (
    <div className="catalog-list">
      <div className="sorted-products">
        {filter.isFiltered ? (
          filter.filteredProducts.length > 0 ? (
            filter.filteredProducts
              .slice(0, visibleProducts)
              .map((el) =>
                (filterData.isAvailable && el.isAvailable) || !filterData.isAvailable ? (
                  <ProductItem key={el.id} product={el} />
                ) : null
              )
          ) : (
            <div>No such product</div>
          )
        ) : (
          catalogProducts.slice(0, visibleProducts).map((el) => <ProductItem key={el.id} product={el} />)
        )}
      </div>
      {catalogProducts.length > 16 && <ShowMore onClick={handleShowMore} />}
    </div>
  );
};

export default CatalogList;
