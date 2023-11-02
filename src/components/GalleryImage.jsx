const GalleryImage = ({ item, index, handle_selected_Image, setDragImage, handleSort, dragEnter, dragOverImage, selectedImages }) => {
    




    


    return (
        <div
            className={`first:col-span-2 first:row-span-2 border-2 rounded-lg overflow-hidden relative group`}
            draggable
            onDragStart={() => setDragImage(index)}
            onDragEnter={() => dragEnter(index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
        >
            <img src={item?.img} alt="i" className={`${dragOverImage == index ? "opacity-0" : "opacity-100"}`} />

            <div

                className='w-full h-full bg-gray-700 p-6 absolute top-0 bg-opacity-0 group-hover:bg-opacity-50 duration-700 active:opacity-0'>

                <input
                    onChange={() => handle_selected_Image(item.id)}
                    type="checkbox"
                    checked={
                        selectedImages.includes(item.id)
                    }
                    className='w-5 h-5' />
            </div>
        </div>
    );
};

export default GalleryImage;