import { useGitHubInfo } from "@/Hooks/api";
import { useUserInfo } from "@/Hooks/myspaceCDN";
import Friend from "./friend";

const TopFriends = () => {
	const { firstName } = useUserInfo();
	const { url: githubUrl, repositories } = useGitHubInfo();

	return (
		<div>
			<div className="heading">
				<h3>{firstName}&apos;s Friend Space</h3>
				<a href={githubUrl}> [view all]</a>
			</div>
			<p>
				{firstName} has {repositories.length}
			</p>
			<ul>
				{repositories.map((item,index) => (
					<li key={index}>
						<Friend 
                        name={item.name}
                        image={item.image}
                        url={item.url} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default TopFriends;
