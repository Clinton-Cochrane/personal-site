import { useBlurbContent, useUserInfo } from "@/Hooks/myspaceCDN";

const Blurbs = () => {
	const { aboutMe, meetGoals: whoIWannaMeetText, } = useBlurbContent();
	const { name } = useUserInfo();

	return (
		<div className="blurb-content">
			<h3>{name}&apos;s Blurbs</h3>
			<div className="about-me">
				<h4>About Me:</h4>
				<p>{aboutMe}</p>
			</div>
			<div className="about-me">
				<h4>Who I&apos;d like to meet:</h4>
				<p>{whoIWannaMeetText}</p>
			</div>
		</div>
	);
};

export default Blurbs;
