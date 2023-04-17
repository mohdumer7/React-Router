import { useLoaderData } from "react-router-dom";

export default function Loader() {
  const data = useLoaderData();
  return (
    <>
      <h1>{data}</h1>
    </>
  );
}
