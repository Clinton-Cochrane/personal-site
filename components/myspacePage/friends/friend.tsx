import Image from "next/image";

interface friendProps {
    name: string;
    image: string
    url: string
}

const Friend = ({name, image} : friendProps) => {

    return (
        <div>
            <p>{name}</p>
            <Image src={image} alt={`${name}'s profile`} />
        </div>
    )
}

export default Friend;