import axios from "axios";

export default async function postDetails({ postId }) {
	// const postId = params.postId;
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 2000);
	});

	try {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/posts/${postId}`
		);
		const post = response.data;

		return (
			<div>
				<div className="post-card">
					<h2 className="post-title">{post.title}</h2>
					<p className="post-body">{post.body}</p>
				</div>
			</div>
		);
	} catch (error) {
		console.error("An error occurred while fetching the post:", error);
		return <div>Error loading post details.</div>;
	}
}
