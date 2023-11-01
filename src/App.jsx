import React, { useRef, useState } from 'react';
import imgLogo from "./assets/image_logo.png";
import img1 from "./assets/images/image-11.jpeg";
import img2 from "./assets/images/image-1.webp";
import img3 from "./assets/images/image-2.webp";
import img4 from "./assets/images/image-3.webp";
import img5 from "./assets/images/image-5.webp";
import img6 from "./assets/images/image-6.webp";
import img7 from "./assets/images/image-7.webp";
import img8 from "./assets/images/image-8.webp";
import img9 from "./assets/images/image-9.webp";
import img10 from "./assets/images/image-10.jpeg";
import img11 from "./assets/images/image-4.webp";

const items = [
    {
        id: 1,
        img: img1,
        order: 1
    },
    {
        id: 2,
        img: img2,
        order: 2
    },
    {
        id: 3,
        img: img3,
        order: 3
    },
    {
        id: 4,
        img: img4,
        order: 4
    },
    {
        id: 5,
        img: img5,
        order: 5
    },
    {
        id: 6,
        img: img6,
        order: 6
    },
    {
        id: 7,
        img: img7,
        order: 7
    },
    {
        id: 8,
        img: img8,
        order: 8
    },
    {
        id: 9,
        img: img9,
        order: 9
    },
    {
        id: 10,
        img: img10,
        order: 10
    },
    {
        id: 11,
        img: img11,
        order: 11
    },
]

const App = () => {
    const [selectedImages, setSelectedImages] = useState([]);
    const [imageGallery, setImageGallery] = useState(items)
    const dragImage = useRef(0);
    const dragOverImage = useRef(0);

    console.log(dragImage);
    console.log(dragOverImage);


    const handle_selected_Image = id =>{
        const exist = selectedImages?.includes(id);

        if(exist){
            const unSelect = selectedImages?.filter(item=> item !== id);
            setSelectedImages(unSelect)
        }
        else{
            setSelectedImages([...selectedImages, id]);
        }
        // console.log(exist)
    }

    // delete the selected images 
    const handleDelete = () =>{
        const new_list = imageGallery.filter((image) => !selectedImages.includes(image.id))

        setImageGallery(new_list)
        setSelectedImages([])
    }

    // drag event 
    const handleSort = ()=>{
        const imageGalleryClone = [...imageGallery]
        const temp = imageGalleryClone[dragImage.current]
        imageGalleryClone[dragImage.current] = imageGalleryClone[dragOverImage.current]
        imageGalleryClone[dragOverImage.current] = temp
        setImageGallery(imageGalleryClone)

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
            <div className='grid grid-cols-5 gap-6 p-6'>
                {
                    imageGallery?.map((item, index)=>

                        <div
                        key={item.id} 
                        className={`first:col-span-2 first:row-span-2 border-2 rounded-lg overflow-hidden relative group`}
                        draggable
                        onDragStart={()=>dragImage.current = index}
                        onDragEnter={()=> dragOverImage.current = index}
                        onDragEnd={handleSort}
                        onDragOver={(e)=> e.preventDefault()}
                        
                        >
                            <img src={item.img} alt="i" />

                            <div
                            
                            className='w-full h-full bg-gray-700 p-6 absolute top-0 bg-opacity-0 group-hover:bg-opacity-50 duration-700 active:opacity-0'>

                                <input
                                onClick={()=>handle_selected_Image(item.id)}
                                type="checkbox" 
                                className='w-5 h-5' />
                            </div>
                        </div>
                    )
                }
                <div className='flex flex-col justify-center items-center border-2 border-dashed rounded-lg min-h-[191px]'>
                    <img src={imgLogo} alt="l" className='w-fit'/>
                    <p>Add Images</p>
                </div>
            </div>
        </div>
    );
};

export default App;