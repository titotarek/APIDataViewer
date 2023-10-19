import PostDetails from "@/app/components/PostDetails";
import { Suspense } from "react";
export default async function PostDetailsPage({ params }) {
	const postId = params.postId;
  const loadingJsx = (<div>loading...</div>)

	return (
		<div>
			<h1>post Details</h1>
			<Suspense fallback={loadingJsx}>
				<PostDetails postId={postId} />
			</Suspense>
		</div>
	);
}
