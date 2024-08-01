export default function fetchHookTest() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  return (
    <div>
      <h1>Test Fetch Hook</h1>
    </div>
  );
}
