import React from "react";

type Props = {};

const movieSpec = ({ params }: { params: { id: string } }) => {
  return <div>page {params.id}</div>;
};

export default movieSpec;
