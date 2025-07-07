import { cn } from "@/lib/utils";

type ArticleListBoxProps = {
	article: Article;
};

export default function ArticleListBox({ article }: ArticleListBoxProps) {
	return (
		<div className="relative cursor-pointer group">
			{/* Product image */}
			<div className="mx-auto mb-4 overflow-hidden transition border-[3px] border-black group-hover:scale-101">
				<img
					src={article.image}
					alt={article.title}
					className={cn(
						"object-cover transition-opacity w-full h-full transform aspect-square group-hover:opacity-90"
					)}
				/>
			</div>

			{/* article info */}
			<div className="space-y-2">
				<div className="mx-auto font-semibold tracking-widest text-gray-700 w-fit shadow-underline">
					{article.category}
				</div>
				<h3 className="font-semibold text-black">
					<span className="group-hover:shadow-underline">{article.title}</span>
				</h3>
			</div>
		</div>
	);
}
