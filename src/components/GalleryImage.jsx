const GalleryImage = ({ item, index, handle_selected_Image, setDragImage, handleSort, setDragOverImage, dragOverImage, selectedImages }) => {


    const dragEnter = (index) => {
        setDragOverImage(index);
    }

    



    return (
        <div
            className={`${dragOverImage == index ? "border-4" : "border-2"} first:col-span-2 first:row-span-2 first:max-h-[100%] rounded-lg overflow-hidden relative group h-full w-full max-h-[235px] sm:max-h-[188px] md:max-h-[150px] lg:max-h-[193px] xl:max-h-[226px] 2xl:max-h-[400px]`}
            draggable
            onDragStart={() => setDragImage(index)}
            onDragEnter={() => dragEnter(index)}
            onDragEnd={handleSort}
            onDragOver={(e) => {e.preventDefault()}}

        >
            <img src={item?.img} alt="i" className={`${dragOverImage == index ? "opacity-0" : "opacity-100"} object-cover w-full`} />

            <div className='w-full h-full bg-gray-700 sm:p-6 p-2 absolute top-0 bg-opacity-0 group-hover:bg-opacity-50 duration-700 active:opacity-0'>

                <input
                    onChange={() => handle_selected_Image(item?.id)}
                    type="checkbox"
                    checked={
                        selectedImages.includes(item?.id)
                    }
                    className={`sm:w-5 sm:h-5 ${selectedImages.includes(item?.id) ? "opacity-100" : "opacity-0"} group-hover:opacity-100 duration-500`} />
            </div>
        </div>
    );
};

export default GalleryImage;