import { useState } from "react";
import File from "../File/File";

const Folder = ({ index, item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div key={index} role='directory'>
            <h2 onClick={() => setIsOpen(!isOpen)} className="text-lg py-4 cursor-pointer underline">{item.name}</h2>
            {isOpen && item.files.map((subItem, index) => {
                console.log(item)
                return (
                    <File item={subItem} key={index} />
                )
            })}
        </div>
    )
}

export default Folder;