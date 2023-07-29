import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import { Row, Col } from "antd";
import FeaturedProductCard from "../components/FeaturedProductCard";
import FeaturedCategoryCard from "../components/FeaturedCategoryCard";
import dynamic from "next/dynamic";

const HomePage = ({ featuredProducts, featuredCategories }) => {
  const shuffledProducts = featuredProducts
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);
  const shuffledCategories = featuredCategories
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  const DynamicBanner = dynamic(() => import("@/components/Banner"), {
    loading: () => <h1>Loading...</h1>,
    ssr: false,
  });

  return (
    <div>
      <Head>
        <title>PC Builder</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamicBanner />
      <div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            margin: "30px 0px",
          }}
        >
          Featured Products
        </h1>
        <Row gutter={[16, 16]}>
          {shuffledProducts.map((product) => (
            <Col key={product._id} xs={24} sm={12} md={8} lg={6} xl={6}>
              <FeaturedProductCard product={product} />
            </Col>
          ))}
        </Row>

        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            margin: "30px 0px",
          }}
        >
          Featured Categories
        </h1>
        <Row gutter={[16, 16]}>
          {shuffledCategories.map((category) => (
            <Col key={category.url} xs={24} sm={12} md={8} lg={8} xl={8}>
              <FeaturedCategoryCard
                categoryName={category.name}
                categoryURL={category.url}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const resProducts = await fetch(
    "https://pc-builder-backend-knowaminul.vercel.app/products"
  );
  const featuredProducts = await resProducts.json();

  // Extract unique categories from the products
  const featuredCategories = Array.from(
    new Set(featuredProducts.data.map((product) => product.category))
  );

  // Create a mapping of categories and their respective URLs
  const categoryURLMap = {};
  featuredProducts.data.forEach((product) => {
    if (!categoryURLMap[product.category]) {
      categoryURLMap[product.category] = product.categoryURL;
    }
  });

  // Convert the categoryURLMap to an array of objects containing name and url
  const featuredCategoriesWithUrls = featuredCategories.map((category) => ({
    name: category,
    url: categoryURLMap[category],
  }));

  return {
    props: {
      featuredProducts: featuredProducts.data,
      featuredCategories: featuredCategoriesWithUrls,
    },
    revalidate: 10,
  };
};
