import React, { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((resp) => resp.json());

function Swr() {
  const { data, error } = useSWR(
    "https://dog.ceo/api/breeds/image/random",
    fetcher,
    {
      suspense: true,
    }
  );

  if (error) {
    return <h1> There was an error!</h1>;
  }

  return (
    <Suspense fallback={<h1> Loading...</h1>}>
        <div>
          <img width={500} src={data.message} />
        </div>
    </Suspense>
  );
}

export default Swr;
