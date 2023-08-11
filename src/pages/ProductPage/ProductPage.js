import React, { useEffect, useState } from 'react';
import { BrowsingHistory, Product, ProductCharacteristics, ProductDescription } from '../../components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsData } from '../../redux/products/action';
import ProductReviews from '../../components/ProductReviews/ProductReviews';
import { getCommentsAsync } from '../../redux/comments/action';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const ProductPage = () => {
  const [visibleReviews, setVisibleReviews] = useState(6);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const comments = useSelector((state) => state.comments);
  const recentlyViewedProducts = useSelector((state) => state.history.products);
  const { id } = useParams();
  const productId = id;
  useEffect(() => {
    dispatch(getProductsData());
    dispatch(getCommentsAsync(id));
  }, [dispatch]);
  const product = products.products.find((product) => product.id === productId);
  const handleShowMore = () => {
    setVisibleReviews(visibleReviews + 6);
  };
  console.log('recentlyViewedProducts', recentlyViewedProducts);
  return (
    <>
      {product ? (
        <div>
          <Breadcrumbs isProduct={true} />
          <Product product={product} />
          <ProductDescription product={product} />
          <ProductCharacteristics product={product} />
          <ProductReviews
            product={product}
            comments={comments.comments}
            onShowMore={handleShowMore}
            visibleReviews={visibleReviews}
          />
        </div>
      ) : (
        <div>Loading ...</div>
      )}
      {recentlyViewedProducts.length > 0 && <BrowsingHistory recentlyViewedProducts={recentlyViewedProducts} />}
    </>
  );
};

export default ProductPage;
