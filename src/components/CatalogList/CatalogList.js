import React from 'react';
import { ProductItem, ShowMore } from '../commons';

const CatalogList = ({ filter, visibleProducts, filterData, catalogProducts, handleShowMore }) => {
  const totalVisibleProducts = filter.isFiltered ? filter.filteredProducts.length : catalogProducts.length;

  return (
    <div className="catalog-list">
      <div className="catalog-list-container">
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
        {visibleProducts < totalVisibleProducts && <ShowMore onClick={handleShowMore} />}
      </div>
    </div>
  );
};

export default CatalogList;
