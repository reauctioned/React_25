import { useState } from "react";
import useFetch from "../../useFetch-hook";


export default function ScrollToTB(){

    const { data, error, loading } = useFetch(
        "https://dummyjson.com/products?limit=100",
        {}
      );
    
      


}