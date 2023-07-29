import React from "react";
import FeaturedProductCard from "@/components/FeaturedProductCard";
import { Col, Row } from "antd";
import RootLayout from "@/components/Layouts/RootLayout";

const CategoryPage = ({ productsInCategory }) => {
  const firstObject = productsInCategory[0];
  return (
    <div>
      <div className="products-container">
        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            margin: "30px 0px",
          }}
        >
          {firstObject.category}
        </h1>
        <Row gutter={[16, 16]}>
          {productsInCategory.map((product) => (
            <Col key={product._id} xs={24} sm={12} md={8} lg={6} xl={6}>
              <FeaturedProductCard product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async ({ params }) => {
  const category = params?.categoryURL;

  const resProducts = await fetch(
    "https://pc-builder-backend-knowaminul.vercel.app/products"
  );
  const data = await resProducts.json();

  const productsInCategory = data.data.filter(
    (product) => product.categoryURL === category
  );

  return {
    props: {
      //   category,
      productsInCategory,
    },
  };
};

export const getStaticPaths = async () => {
  const resProducts = await fetch(
    "https://pc-builder-backend-knowaminul.vercel.app/products"
  );
  const data = await resProducts.json();

  const categories = data.data.map((product) => product.categoryURL);
  const uniqueCategories = Array.from(new Set(categories));

  const paths = uniqueCategories.map((category) => ({
    params: { categoryURL: category.toString() }, // Ensure category is a string
  }));

  return {
    paths,
    fallback: false,
  };
};
