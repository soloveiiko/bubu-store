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
  const [lessThan1200, setLessThan1200] = useState(false);
  const [greaterThan768, setGreaterThan768] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const comments = useSelector((state) => state.comments.comments);
  const recentlyViewedProducts = useSelector((state) => state.history.products);
  const catalogsList = useSelector((state) => state.catalog.catalogs);
  const { id } = useParams();
  const productId = id;

  useEffect(() => {
    const handleResize = () => {
      setLessThan1200(window.innerWidth < 1200);
      setGreaterThan768(window.innerWidth >= 768);
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
  const onOpenForm = () => {
    setIsOpenForm(!isOpenForm);
  };
  return (
    <>
      {product && selectedCatalog && comments ? (
        <div className="product-page">
          <Breadcrumbs isProduct={true} catalogName={product.catalog} catalogId={selectedCatalog.id} />
          <div className="product-container">
            <Product product={product} comments={comments} isGreater={greaterThan768} />
            <AlsoBuySlider products={products.products} selectedCatalog={selectedCatalog} />
            <div className="information-container">
              <div className="container">
                <ProductDescription product={product} isTablet={lessThan1200} />
                <ProductCharacteristics product={product} isTablet={lessThan1200} />
                <ProductReviews
                  handleOpenForm={onOpenForm}
                  product={product}
                  comments={comments}
                  onShowMore={handleShowMore}
                  visibleReviews={visibleReviews}
                />
              </div>
            </div>
            {recentlyViewedProducts.length > 0 && <BrowsingHistory recentlyViewedProducts={recentlyViewedProducts} />}
            <AddReview isOpenForm={isOpenForm} handleOpenForm={onOpenForm} />
          </div>
        </div>
      ) : (
        <div>Loading ...</div>
      )}
    </>
  );
};

export default ProductPage;
