import React, { useState, useEffect } from "react";
import Category from "../components/category/Category";
import axios from "axios";
import { useParams } from "react-router-dom";
import LoadingBox from "../components/loading/LoadingBox";

const CategoryScreen = () => {
  const { zone } = useParams();
  const [dataset, setDataset] = useState();
  const [current, setCurrent] = useState(zone);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  useEffect(() => {
    let cat = window.location.href.split("/")[4];
    if (current !== cat) {
      window.location.reload();
    }
  }, [zone, current]);

  useEffect(() => {
    const asyncCaller = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api/product/getProducts/${zone}`
        );
        setDataset(data);
      } catch (error) {
        console.log(error);
      }
    };
    asyncCaller();
  }, [zone]);

  return (
    <div className="headphones">
      {!dataset && <LoadingBox />}
      {dataset && <Category data={dataset} />}
    </div>
  );
};

export default CategoryScreen;
