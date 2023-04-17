import { useLoaderData, useRouteLoaderData } from "react-router-dom";

export default function Loader() {
  const data = useLoaderData();
  // This specifies the loader of the specific route ID to be used
  // const data = useRouteLoaderData('loader-id');
  return (
    <>
      <h1>{data}</h1>
    </>
  );
}
