import useFetch from ".";

export default function FetchHookTest() {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  return (
    <div>
      <h1>Test Fetch Hook</h1>
      {loading ? <h3>Loading...</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p ket={productItem.key}>{productItem.title} </p>
          ))
        : null}
    </div>
  );
}
