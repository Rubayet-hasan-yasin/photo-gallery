
import { DndContext, closestCenter } from "@dnd-kit/core";
import imgLogo from "../assets/image_logo.png";
import { SortableContext, arrayMove, horizontalListSortingStrategy, rectSortingStrategy, rectSwappingStrategy, verticalListSortingStrategy } from "@dnd-kit/sortable";
import Sortable from "./Sortable";


const DraggableItems = ({ selectedImages, setSelectedImages, setImageGallery, imageGallery }) => {



    


    const onDragEnd = event => {
        if (event.over && event.active.id !== event.over.id) {
            const oldIndex = imageGallery.findIndex((item) => item.id === event.active.id);
            const newIndex = imageGallery.findIndex((item) => item.id === event.over.id);
      
            if (oldIndex !== -1 && newIndex !== -1) {
              const newImageGallery = arrayMove(imageGallery, oldIndex, newIndex);
              setImageGallery(newImageGallery);
            }
          }
    }



    return (
        <div className='grid grid-cols-5 gap-6 p-6'>
            <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
                <SortableContext items={imageGallery} strategy={rectSwappingStrategy}>
                    {
                        imageGallery?.map((item, index) =>

                            <Sortable item={item} key={item.id} selectedImages={selectedImages} setSelectedImages={setSelectedImages}/>
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