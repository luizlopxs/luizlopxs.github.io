import React from "react";
import Layout from "./layout";
export const wrapPageElement = ({ element }) => {
  return (
    <>
      <Layout>{element}</Layout>
    </>
  );
};
