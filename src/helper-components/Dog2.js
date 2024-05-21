import React from "react";
import { useQuery } from "react-query";
import { getDog } from "../Fetchers";

function Dog2() {
  const { data, status } = useQuery("dog", getDog());

  //the status can be error or loading....

  return <img src={data?.url} width={100} />;
}

export default Dog2;