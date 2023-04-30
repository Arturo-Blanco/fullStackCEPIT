import React from "react";
import { useEffect, useState } from "react";
import { getPhotos } from "../../API/getPhotos";
import "./contentPage.css"

const ContentPage = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
    const fetchPhotos = async () => {
        const data = await getPhotos();
        setImages(data);
    };
    fetchPhotos();
    }, []);

    return (
        <section class="image">
        {images.map(image=>(
            <img key={image.id} src={image.url} alt={image.title} />
        ))}
        </section>
    )
}
export default ContentPage