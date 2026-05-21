const BlogPreview = (name: string) => {
	const [blogs] = UseBlogContent();
	return (
		<div className="">
			<h3>{name}&apos;s Latest Blog Entries </h3>

			{!blogs ? <p>There are no Blog Entries yet</p> : <div>
				<ul>
					{blogs.map((item,index: number) => (
						<li key={index}>
							{blogs}
						</li>
					))}
					
				</ul>
				</div>}
		</div>
	);
};
export default BlogPreview;