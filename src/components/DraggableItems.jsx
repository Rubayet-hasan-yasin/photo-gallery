import { useState } from "react";
import imgLogo from "../assets/image_logo.png";
import GalleryImage from "./GalleryImage";




const DraggableItems = ({ selectedImages, setSelectedImages, setImageGallery, imageGallery }) => {
    const [dragImage, setDragImage] = useState(null);
    const [dragOverImage, setDragOverImage] = useState(null);
    // const dragImage = useRef(0);
    // const dragOverImage = useRef(0);

    // console.log(imageGallery);


    const handle_selected_Image = id => {
        const exist = selectedImages?.includes(id);

        if (exist) {
            const unSelect = selectedImages?.filter(item => item !== id);
            setSelectedImages(unSelect)
        }
        else {
            setSelectedImages([...selectedImages, id]);
        }
        // console.log(exist)
    }

    // delete the selected images 


    // drag event 
    const handleSort = () => {
        const imageGalleryClone = [...imageGallery];
        const current = imageGalleryClone[dragImage];
        imageGalleryClone[dragImage] = imageGalleryClone[dragOverImage]
        imageGalleryClone[dragOverImage] = current;
        setImageGallery(imageGalleryClone);

        setDragOverImage(null);
    }



    //add image
    const addImage = image =>{
        const url = URL.createObjectURL(image)

        const newImage = {
            id: imageGallery.length +1,
            img: url
        }

        setImageGallery([...imageGallery, newImage])
    }




    return (

        <div
            className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 xl:gap-6 gap-3 p-6'>
            {
                imageGallery?.map((item, index) =>

                    <GalleryImage
                        key={index}
                        item={item}
                        index={index}
                        imageGallery={imageGallery}
                        selectedImages={selectedImages}
                        setSelectedImages={setSelectedImages}
                        setImageGallery={setImageGallery}
                        handle_selected_Image={handle_selected_Image}
                        setDragImage={setDragImage}
                        handleSort={handleSort}
                        setDragOverImage={setDragOverImage}
                        dragOverImage={dragOverImage}
                    />
                )
            }
            <div className={`border-2 border-dashed rounded-lg min-h-[105px] sm:min-h-[150px] md:min-h-[105px] lg:min-h-[150px] xl:min-h-[180px]`}>
                <label className="">
                    <input
                    onChange={(e)=> addImage(e.target.files[0])}
                        type="file"
                        name="add_photo"
                        accept="image/*"
                        id=""
                        className="sr-only"
                    />

                    <div className="border h-full flex flex-col justify-center items-center">
                        <img src={imgLogo} alt="l" className='w-fit' />
                        <p>Add Images</p>
                    </div>
                </label>
            </div>
        </div>
    );
};

export default DraggableItems;