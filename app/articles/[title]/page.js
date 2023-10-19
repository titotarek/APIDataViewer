export default function showArticlePage(props) {
	console.log(props);
	return (
		<div>
			<div>showArticlePage</div>
			<h1>{props.params.title}</h1>
		</div>
	);
}
