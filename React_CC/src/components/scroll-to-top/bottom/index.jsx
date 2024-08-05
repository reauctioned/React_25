import useFetch from "../../useFetch-hook";

export default function ScrollToTB() {
    const { data, error, loading } = useFetch(
        "https://dummyjson.com/products?limit=100",
        {}
    );

    if (loading) {
        return <h1>Loading!</h1>;
    }
    if (error) {
        return <h1>Error!</h1>;
    }

    return (
        <div>
            <h1>Scroll To Top & Bottom</h1>
            <h3>This is top section</h3>
            <button>Scroll To Bottom</button>
            <ul>
                {data && data.products && data.products.length > 0 
                    ? data.products.map((item) => <li key={item.id}>{item.title}</li>)
                    : <li>No products available</li>
                }
            </ul>
            <button>Scroll to Top</button>
            <h3>This is Bottom section</h3>
        </div>
    );
}
