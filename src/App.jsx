import React from 'react';
import imgLogo from "./assets/image_logo.png";

const items = [
    {
        id: 1,
        img: "/src/assets/images/image-1.webp",
    },
    {
        id: 2,
        img: "/src/assets/images/image-2.webp",
    },
    {
        id: 3,
        img: "/src/assets/images/image-3.webp",
    },
    {
        id: 4,
        img: "/src/assets/images/image-4.webp",
    },
    {
        id: 5,
        img: "/src/assets/images/image-5.webp",
    },
    {
        id: 6,
        img: "/src/assets/images/image-6.webp",
    },
    {
        id: 7,
        img: "/src/assets/images/image-7.webp",
    },
    {
        id: 8,
        img: "/src/assets/images/image-8.webp",
    },
    {
        id: 9,
        img: "/src/assets/images/image-9.webp",
    },
    {
        id: 10,
        img: "/src/assets/images/image-10.jpeg",
    },
    {
        id: 11,
        img: "/src/assets/images/image-11.jpeg",
    },
]

const App = () => {
    return (
        <div className='w-10/12 mx-auto my-14 bg-white border rounded-lg shadow-lg'>
            {/* top part */}
            <div className='flex justify-between p-6 pb-5'>
                <h4 className='text-2xl font-bold'>Gallery</h4>

                <div className='sr-only'>
                    <input className='w-4 h-4' type="checkbox" checked readOnly />
                    <label className='ml-2 font-bold text-xl'>3 File Selected</label>
                </div>

                <button className='border bg-orange-600 py-2 px-4'>Delete image</button>
            </div>
            <hr />

            {/* image component */}
            <div className='grid grid-cols-5 gap-6 p-6'>
                {
                    items.map((item, index)=>
                        <div className={`${item.id == 1 ? "col-span-2 row-span-2" : "col-span-1"} border-2 rounded-lg overflow-hidden relative group`}>
                            <img src={item.img} alt="i" />

                            <div className='w-full h-full bg-gray-700 p-6 absolute top-0 bg-opacity-0 group-hover:bg-opacity-50 duration-700'>

                                <input type="checkbox" className='w-5 h-5' />
                            </div>
                        </div>
                    )
                }
                <div className='flex flex-col justify-center items-center border-2 border-dashed rounded-lg'>
                    <img src={imgLogo} alt="l" className='w-fit'/>
                    <p>Add Images</p>
                </div>
            </div>
        </div>
    );
};

export default App;