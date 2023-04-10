import './JavaStack.css';

import React, { useState, useEffect } from "react";

function JavaStack() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/api/PartmasterApi")
            .then(res => res.text())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="stack-css">
                {items}
            </div>
        );
    }
}

export default JavaStack;

