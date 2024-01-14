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

<<<<<<< HEAD
    // const onDragEnd = (event)=>{
    //     const imageGalleryClone = [...imageGallery]
    //     const temp = imageGalleryClone[dragImage.current]
    //     imageGalleryClone[dragImage.current] = imageGalleryClone[dragOverImage.current]
    //     imageGalleryClone[dragOverImage.current] = temp
    //     setImageGallery(imageGalleryClone)
    //     // event.target.classList.remove("") 
    //     console.log(event.target.classList)

    // }


    const onDragEnd = event => {
        const { active, over } = event;
        if (active.id === over.id) {
            return;
        }

        const oldIndex = imageGallery.findIndex((image) => image.id === active.id);
        const newIndex = imageGallery.findIndex((image) => image.id === over.id);

        const imageGalleryClone = [...imageGallery]
        const temp = imageGalleryClone[oldIndex]
        imageGalleryClone[oldIndex] = imageGalleryClone[newIndex]
        imageGalleryClone[newIndex] = temp
        setImageGallery(imageGalleryClone)


        // setImageGallery((imageGallery) => {
        //     const oldIndex = imageGallery.findIndex((image) => image.id === active.id);
        //     const newIndex = imageGallery.findIndex((image) => image.id === over.id);
        //     console.log(imageGallery)
        //     return arrayMove(imageGallery, newIndex, oldIndex);
        // });
=======
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
>>>>>>> 5ba1a1519fe83edbe805a1a0e408c923cbefb03b
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

<<<<<<< HEAD
                            <Sortable item={item} key={item.id} selectedImages={selectedImages} setSelectedImages={setSelectedImages} />
                        )
                    }
                </SortableContext>
            </DndContext>
            <div className='flex flex-col justify-center items-center border-2 border-dashed rounded-lg min-h-[191px]'>
                <img src={imgLogo} alt="l" className='w-fit' />
                <p>Add Images</p>
=======
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
>>>>>>> 5ba1a1519fe83edbe805a1a0e408c923cbefb03b
            </div>
        </div>
    );
};

export default DraggableItems;