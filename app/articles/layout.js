export const metadata = {
	title: "article page",
};
export default function layout({ children }) {
	return (
		<div
			style={{
				backgroundColor: "green",
				marginTop: "20px",
				borderRadius: "10px",
				color: "white",
				padding: "30px",
			}}
		>
			{children}
		</div>
	);
}
