import React, {useContext} from 'react';
import { DataContext } from '../App.js';
import './imageLibrary.css'
import Card from '../Card/card.jsx';

export const ImageList = () => {
    const { data } = useContext(DataContext);

    return (
    <div>
        <div className='imageGallery'>
            {data.results.map(e =>(
                <Card nombre={e.name} key={e.id} url={e.image} alt={e.name} species={e.species}/>
            ))}
        </div>
    </div>
    )
}
export default ImageList