import { useGitHubInfo } from "@/Hooks/api"
import Image from "next/image";

const ProfilePhoto = () => {
    const {photo} = useGitHubInfo();


    return(
        <Image src={photo} alt=""/>
    )
}

export default ProfilePhoto;