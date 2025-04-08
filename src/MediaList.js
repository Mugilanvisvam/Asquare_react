import { useEffect, useState } from "react";
import axios from "axios";

const MediaList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("http://192.168.1.6:5000/categories")
            .then(res => {
                console.log("Categories:", res.data);
                setCategories(res.data);
            })
            .catch(err => console.error("Error fetching categories:", err));
    }, []);

    return (
        <div>
            {categories.map(category => (
                <div key={category.id}>
                    <h2>{category.name}</h2>
                    {category.image_path && (
                        <img
                            src={`http://192.168.1.6:5000/${category.image_path}`}
                            alt={category.name}
                            width="200"
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default MediaList;
