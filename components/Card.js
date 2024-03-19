import Image from "next/image";
import React, { useState } from "react";

function Card({ prop, text })
{
    const [editable, setEditable] = useState(false);
    const handleClick = () =>
    {
        setEditable(!editable);
    };
    return (
        <div
            className="
                flex
                justify-center
                text-3xl md:text-7xl 
                p-6 w-50 h-50 md:p-10 md:w-60 md:h-60 bg-white
                items-center
                drop-shadow-md	
                rounded-md"
        >
            <div onClick={handleClick}>
                {/* Displaying Image  */}
                <Image src={prop} alt="rand" width={500} height={500} />
                <p className="text-sm text-center font-bold">{text}</p>
            </div>

        </div>
    );
}

export default Card;