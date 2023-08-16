import React, { useEffect, useState } from 'react';
import { ProductItem, ShowMore } from '../commons';
import Pagination from '../commons/Pagination/Pagination';

const CatalogList = ({ filter, visibleProducts, filterData, catalogProducts, handleShowMore }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItemsCount, setTotalItemsCount] = useState(10);
  const totalVisibleProducts = filter.isFiltered ? filter.filteredProducts.length : catalogProducts.length;

  useEffect(() => {
    setTotalItemsCount(totalVisibleProducts);
  }, [currentPage]);

  const paginate = (p) => {
    setCurrentPage(p);
  };
  const prevPage = () => setCurrentPage((prev) => prev - 1);
  const nextPage = () => setCurrentPage((next) => next + 1);
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
        <Pagination
          totalItemsCount={totalItemsCount}
          pageSize={visibleProducts}
          currentPage={currentPage}
          paginate={paginate}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </div>
    </div>
  );
};

export default CatalogList;
