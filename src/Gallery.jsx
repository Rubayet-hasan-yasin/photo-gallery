import { useState } from 'react';

import { items } from './data/data';
import DraggableItems from './components/DraggableItems';

const Gallery = () => {
    const [selectedImages, setSelectedImages] = useState([]);
    const [imageGallery, setImageGallery] = useState(items);

    
    const handleDelete = () =>{
        const new_list = imageGallery.filter((image) => !selectedImages.includes(image.id))

        setImageGallery(new_list)
        setSelectedImages([])
    }
    

    return (
        <div className='w-10/12 mx-auto my-14 bg-white border rounded-lg shadow-lg'>
            {/* top part */}
            <div className='flex justify-between p-6 pb-5'>
                {
                    selectedImages.length ?
                <div className=''>
                    <input className='w-4 h-4' type="checkbox" checked readOnly />
                    <label className='ml-2 font-bold text-xl'>{selectedImages?.length} File Selected</label>
                </div>
                :
                <h4 className='text-2xl font-bold'>Gallery</h4>
                }


                <button onClick={handleDelete} className='border bg-orange-600 py-2 px-4'>Delete image</button>
            </div>
            <hr />

            {/* image component */}
            <DraggableItems 
            selectedImages={selectedImages}
            setSelectedImages={setSelectedImages}
            imageGallery={imageGallery}
            setImageGallery={setImageGallery}
            />
        </div>
    );
};

export default Gallery;