import React, { useEffect, useState } from "react";
import Product from "../components/product/Product";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingBox from "../components/loading/LoadingBox";
import Metadata from "../components/Metadata/Metadata";

const ProductScreen = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [product, setProduct] = useState();

  useEffect(() => {
    const asyncCaller = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api/product/getProduct/${id}`
        );
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    asyncCaller();
  }, [id]);

  return (
    <div>
      {product && (
        <Metadata title={product.name} description={product.description} />
      )}
      {!product && <LoadingBox />}
      {product && <Product product={product} navigate={navigate} />}
    </div>
  );
};

export default ProductScreen;
