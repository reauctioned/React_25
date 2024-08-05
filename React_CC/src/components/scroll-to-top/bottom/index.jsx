import useFetch from "../../useFetch-hook";
import "./buttons.css"

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

    function handleScrollTop(){
        window.scrollTo({
            top:0,
            left: 0,
            behavior: "instant"
        })
    }
    function handleScrollBottom(){
        window.scrollTo({
            bottom:0,
            left: 0,
            behavior: "instant"
        })
    }


    return (
        <div>
            <h1>Scroll To Top & Bottom</h1>
            <button onClick={handleScrollBottom}>Bottom</button>
            <h3>This is top section</h3>
            <ul style={{listStyle: 'none'}}>
                {data && data.products && data.products.length > 0 
                    ? data.products.map((item) => <li key={item.id}>{item.title}</li>)
                    : <li>No products available</li>
                }
            </ul>
            <h3>This is Bottom section</h3>
            <button onClick={handleScrollTop}>Top</button>
        </div>
    );
}
