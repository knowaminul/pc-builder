import RootLayout from "@/components/Layouts/RootLayout";
import { useSelector, useDispatch } from "react-redux";
import { addComponent } from "@/redux/pcBuilderSlice";
import { useEffect, useState } from "react";
import { Card, Col, Row, Button, Rate } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Component({ products }) {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    setComponents(products);
  }, [products]);

  const selectedComponents = useSelector(
    (state) => state.pcBuilder.selectedComponents
  );
  const dispatch = useDispatch();

  const router = useRouter();

  const handleAddToBuilder = (category, component) => {
    dispatch(addComponent({ category, component }));
    router.push("/tool/pc_builder");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "50px", margin: "30px 0px" }}>
        Choose Component
      </h1>
      {components?.map((component) => (
        <Card className="category-card" key={component._id}>
          <Row gutter={16}>
            <Col span={8}>
              <Image
                src={component.image}
                width={100}
                height={100}
                responsive
                alt={component.productName}
              />
            </Col>
            <Col span={12}>
              <div>
                <h3>{component.productName}</h3>
                <p>Category: {component.category}</p>
                <p>Status: {component.status}</p>
                <p>Price: ${component.price}</p>
                <p>
                  Rating:{" "}
                  <Rate disabled allowHalf value={component.averageRating} />
                </p>
              </div>
            </Col>
            <Col span={4}>
              <Button
                block
                disabled={selectedComponents[component.category] !== null}
                onClick={() =>
                  handleAddToBuilder(component.category, component)
                }
              >
                Add to Builder
              </Button>
            </Col>
          </Row>
        </Card>
      ))}
    </div>
  );
}

Component.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async ({ params }) => {
  const category = params?.categoryURL;

  const res = await fetch(
    "https://pc-builder-backend-knowaminul.vercel.app/products"
  );
  const data = await res.json();

  const products = data.data.filter(
    (product) => product.categoryURL === category
  );

  return {
    props: {
      products,
    },
  };
};
