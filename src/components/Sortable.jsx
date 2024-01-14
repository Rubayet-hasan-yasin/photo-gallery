import { useSortable } from '@dnd-kit/sortable';
import React from 'react';

import { CSS } from '@dnd-kit/utilities'

const Sortable = ({ item, setSelectedImages , selectedImages }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: item.id })


    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }


    const handle_selected_Image = id => {
        const exist = selectedImages?.includes(id);

        if (exist) {
            const unSelect = selectedImages?.filter(item => item !== id);
            setSelectedImages(unSelect)
        }
        else {
            setSelectedImages([...selectedImages, id]);
        }
        console.log(selectedImages)
    }


    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
            className={`first:col-span-2 first:row-span-2 border-2 rounded-lg overflow-hidden bg-white relative group`}
        >

            <img src={item.img} alt="i" />

            <div
                className='w-full h-full bg-gray-700 p-6 absolute top-0 bg-opacity-0 group-hover:bg-opacity-50 duration-700 active:bg-opacity-0'>


                <input
                id={`check${item.id}`}
                    onClick={() => handle_selected_Image(item.id)}
                    type="checkbox"
                    className='w-5 h-5' />
            </div>
        </div>
    );
};

export default Sortable;