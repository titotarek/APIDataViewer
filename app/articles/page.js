import Link from "next/link";
 
export default function page() {
	return (
		<div>
			<div> article page</div>
			<Link href="/posts">
				<button>Take me to the post page</button>
			</Link>
		</div>
	);
}
