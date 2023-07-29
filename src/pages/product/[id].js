import React from "react";
import RootLayout from "@/components/Layouts/RootLayout";
import { Row, Col, Image, Typography, Tag, Divider, Rate, Card } from "antd";
import styles from "@/styles/ProductDetailPage.module.css";

const { Title, Paragraph } = Typography;

const ProductDetailPage = ({ product }) => {
  return (
    <div
      className={styles.product_details_container}
      style={{
        justifyContent: "space-between",
      }}
    >
      <Card>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12} lg={12}>
            <Image
              src={product.image}
              alt={product.productName}
              className={styles.product_image}
            />
          </Col>
          <Col xs={24} md={12} lg={12} className={styles.product_info}>
            <Title level={2}>{product.productName}</Title>
            <Paragraph>Category: {product.category}</Paragraph>
            <Paragraph>
              Status:{" "}
              <Tag color={product.status === "In Stock" ? "green" : "red"}>
                {product.status}
              </Tag>
            </Paragraph>
            <Paragraph>Price: ${product.price}</Paragraph>
            <Title level={4}>Description</Title>
            <Paragraph>{product.description}</Paragraph>
            <Title level={4}>Key Features</Title>
            <ul className={styles.key_features_list}>
              {product.keyFeatures.map((feature, index) => (
                <li key={index} className={styles.key_feature_item}>
                  {feature}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Card>
      <Divider />
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <Title level={4}>Individual Rating</Title>
          <Rate disabled allowHalf value={product.individualRating} />
        </Col>
        <Col xs={24} sm={12}>
          <Title level={4}>Average Rating</Title>
          <Rate disabled allowHalf value={product.averageRating} />
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={24}>
          <Title level={4}>Reviews</Title>
          {product.reviews.map((review, index) => (
            <div key={index} className={styles.review_item}>
              <Paragraph>
                Rating: <Rate disabled allowHalf value={review.rating} />
              </Paragraph>
              <Paragraph>{review.comment}</Paragraph>
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async ({ params }) => {
  const productId = params?.id;

  const resProduct = await fetch(
    `https://pc-builder-backend-knowaminul.vercel.app/product/${productId}`
  );
  const product = await resProduct.json();

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths = async () => {
  const resProducts = await fetch(
    "https://pc-builder-backend-knowaminul.vercel.app/products"
  );
  const products = await resProducts.json();

  const paths = products.data.map((product) => ({
    params: { id: product._id },
  }));

  return {
    paths,
    fallback: false,
  };
};
