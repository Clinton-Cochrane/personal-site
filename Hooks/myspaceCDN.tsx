import { useEffect, useState } from "react";

export const useBlurbContent = () => {
	const [aboutMe, setAboutMe] = useState<string>("");
	const [meetGoals, setMeetGoals] = useState<string>("");

	useEffect(() => {
		const fetchAboutMe = async () => {
			const response = await fetch("/data/aboutMe.json");
			const data = await response.json();
			setAboutMe(data.bio);
			setMeetGoals(data.meetGoals);
		};

		fetchAboutMe();
	}, []);

	return { aboutMe, meetGoals };
};

export const useUserInfo = () => {
	const [email, setEmail] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [firstName, setFirstName] = useState<string>("");

	useEffect(() => {
		const fetchUserInfo = async () => {
			const response = await fetch("/data/aboutMe.json");
			const data = await response.json();
			setFirstName(data.firstName);
			setName(data.firstName + "" + data.lastName);
			setEmail(data.email);
		};
		fetchUserInfo();
	},[]);
    return {email, name, firstName}
};
