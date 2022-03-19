import React from "react";
import { Helmet } from "react-helmet";

const Metadata = ({ title, description }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link
        rel="canonical"
        href="https://audiophile-ecommerce-app.netlify.app/"
      />
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Metadata;
