
import { DndContext, closestCenter } from "@dnd-kit/core";
import imgLogo from "../assets/image_logo.png";
import { SortableContext, arrayMove, horizontalListSortingStrategy, rectSortingStrategy, rectSwappingStrategy, verticalListSortingStrategy } from "@dnd-kit/sortable";
import Sortable from "./Sortable";


const DraggableItems = ({ selectedImages, setSelectedImages, setImageGallery, imageGallery }) => {



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
    }



    return (
        <div className='grid grid-cols-5 gap-6 p-6'>
            <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
                <SortableContext items={imageGallery} strategy={rectSwappingStrategy}>
                    {
                        imageGallery?.map((item, index) =>

                            <Sortable item={item} key={item.id} selectedImages={selectedImages} setSelectedImages={setSelectedImages} />
                        )
                    }
                </SortableContext>
            </DndContext>
            <div className='flex flex-col justify-center items-center border-2 border-dashed rounded-lg min-h-[191px]'>
                <img src={imgLogo} alt="l" className='w-fit' />
                <p>Add Images</p>
            </div>

        </div>
    );
};

export default DraggableItems;