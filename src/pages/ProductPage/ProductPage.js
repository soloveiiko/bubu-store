import React, { useEffect, useState } from 'react';
import { BrowsingHistory, Product, ProductCharacteristics, ProductDescription } from '../../components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsData } from '../../redux/products/action';
import ProductReviews from '../../components/ProductReviews/ProductReviews';
import { getCommentsData } from '../../redux/comments/action';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import AddReview from '../../components/AddReview/AddReview';
import { getCatalogData } from '../../redux/catalogs/action';

const ProductPage = () => {
  const [visibleReviews, setVisibleReviews] = useState(6);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const comments = useSelector((state) => state.comments.comments);
  const recentlyViewedProducts = useSelector((state) => state.history.products);
  const catalogsList = useSelector((state) => state.catalog.catalogs);
  const { id } = useParams();
  const productId = id;

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
          <ProductDescription product={product} />
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
