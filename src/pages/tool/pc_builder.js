import Link from "next/link";
import RootLayout from "@/components/Layouts/RootLayout";
import { Row, Col, Button, Card } from "antd";
import { useAppSelector } from "@/redux/hook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { clearPCBuilder } from "@/redux/pcBuilderSlice";
import { useRouter } from "next/router";

const PCBuilderPage = ({ categories }) => {
  const selectedComponents = useAppSelector(
    (state) => state.pcBuilder.selectedComponents
  );

  // Calculate the number of selected components
  const selectedComponentsCount = Object.values(selectedComponents).filter(
    (component) => component !== null
  ).length;

  // Check if at least 5 components are selected
  const isBuildComplete = selectedComponentsCount >= 5;

  const dispatch = useDispatch();

  const router = useRouter();

  const handleCompleteBuild = () => {
    const selectedCount = Object.values(selectedComponents).filter(
      (component) => component !== null
    ).length;

    if (selectedCount >= 5) {
      // Show the success toast using react-toastify
      toast.success("Build completed successfully!");

      // Clear the Redux store for the pcBuilder slice
      dispatch(clearPCBuilder());
      router.push("/");
    } else {
      toast.error(
        "Please select at least 5 components before completing the build."
      );
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "50px", margin: "30px 0px" }}>
        PC Builder - Build Your Own Computer
      </h1>
      {categories.map((category) => (
        <Row key={category.url}>
          <Col span={24}>
            <Card className="category-card">
              <div className="category-info">
                <Row justify="space-between">
                  <h2>{category.name}</h2>
                  <Link
                    href={`/tool/pc_builder/choose/${encodeURIComponent(
                      category.url
                    )}`}
                  >
                    <Button type="primary">Choose/Select</Button>
                  </Link>
                </Row>
              </div>
            </Card>
            {selectedComponents[category.name] && (
              <Card className="selected-component-card">
                <h3>Selected Component:</h3>
                <p>{selectedComponents[category.name]?.productName}</p>
              </Card>
            )}
          </Col>
        </Row>
      ))}
      <div style={{ textAlign: "center", margin: "20px" }}>
        <Button
          type="primary"
          size="large"
          disabled={!isBuildComplete}
          onClick={handleCompleteBuild} // Call the handleCompleteBuild function on button click
        >
          Complete Build
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PCBuilderPage;

PCBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-backend-knowaminul.vercel.app/products"
  );
  const products = await res.json();

  // Extract unique categories from the products
  const categories = Array.from(
    new Set(products.data.map((product) => product.category))
  );

  // Create a mapping of categories and their respective URLs
  const categoryURLMap = {};
  products.data.forEach((product) => {
    if (!categoryURLMap[product.category]) {
      categoryURLMap[product.category] = product.categoryURL;
    }
  });

  // Convert the categoryURLMap to an array of objects containing name and url
  const categoriesWithUrls = categories.map((category) => ({
    name: category,
    url: categoryURLMap[category],
  }));

  return {
    props: {
      products: products.data,
      categories: categoriesWithUrls,
    },
    revalidate: 10,
  };
};
