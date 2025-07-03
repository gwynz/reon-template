type TopClickedBoxProps = {
	article: Article;
};
export default function TopClickedBox({ article }: TopClickedBoxProps) {
	return (
		<div className="flex flex-col items-center justify-center w-full cursor-pointer group">
			<img
				src={article.image}
				alt={"Product image"}
				className="object-cover w-full h-full aspect-square group-hover:opacity-90"
			/>
			<h3 className="mt-3 text-2xl font-semibold text-center text-black transition-colors">
				<span className="group-hover:shadow-underline">{article.title}</span>
			</h3>
		</div>
	);
}
