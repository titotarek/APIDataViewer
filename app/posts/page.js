"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const PostPage = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://jsonplaceholder.typicode.com/posts"
				);
				if (response.status === 200) {
					setPosts(response.data);
				} else {
					console.error("Failed to fetch posts.");
				}
			} catch (error) {
				console.error("An error occurred while fetching posts:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<h1 className="page-title">Posts Page</h1>
			<div>
				{posts.map((post) => (
					<Link href={`/posts/${post.id}`} key={post.id}>
						<div className="post-card">
							<h2 className="post-title">{post.title}</h2>
							<p className="post-body">{post.body}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default PostPage;
