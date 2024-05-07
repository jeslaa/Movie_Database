import React from "react";

type Props = {};

const bannerSpec = ({ params }: { params: { id: string } }) => {
  return <div>page {params.id}</div>;
};

export default bannerSpec;
