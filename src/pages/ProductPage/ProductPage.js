import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsData } from '../../redux/products/action';
import { getCommentsData } from '../../redux/comments/action';
import { getCatalogData } from '../../redux/catalogs/action';
import {
  AddReview,
  AlsoBuySlider,
  BrowsingHistory,
  Breadcrumbs,
  Product,
  ProductDescription,
  ProductCharacteristics,
  ProductReviews,
} from '../../components';

const ProductPage = () => {
  const [visibleReviews, setVisibleReviews] = useState(6);
  const [tablet, setTablet] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const comments = useSelector((state) => state.comments.comments);
  const recentlyViewedProducts = useSelector((state) => state.history.products);
  const catalogsList = useSelector((state) => state.catalog.catalogs);
  const { id } = useParams();
  const productId = id;

  useEffect(() => {
    const handleResize = () => {
      setTablet(window.innerWidth < 1200);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    dispatch(getProductsData());
    dispatch(getCatalogData());
    dispatch(getCommentsData(id));
  }, [dispatch, id]);
  const handleShowMore = () => {
    setVisibleReviews(visibleReviews + 6);
  };
  const product = products.products.find((product) => product.id === productId);
  const selectedCatalog = catalogsList.find((catalog) => catalog.name === product.catalog);

  return (
    <>
      {product && selectedCatalog && comments ? (
        <div className="product-page">
          <Breadcrumbs isProduct={true} catalogName={product.catalog} catalogId={selectedCatalog.id} />
          <Product product={product} comments={comments} />
          <AlsoBuySlider products={products.products} selectedCatalog={selectedCatalog} />
          <ProductDescription product={product} isTablet={tablet} />
          <ProductCharacteristics product={product} />
          <ProductReviews
            product={product}
            comments={comments}
            onShowMore={handleShowMore}
            visibleReviews={visibleReviews}
          />
          {recentlyViewedProducts.length > 0 && <BrowsingHistory recentlyViewedProducts={recentlyViewedProducts} />}
          <AddReview comments={comments.comments} />
        </div>
      ) : (
        <div>Loading ...</div>
      )}
    </>
  );
};

export default ProductPage;
