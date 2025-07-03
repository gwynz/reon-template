import { cn } from "@/lib/utils";

type ArticleCategoryBoxProps = {
	article: Article;
	size: "lg" | "md" | "sm";
};

const classNamesMapping: {
	[type in "lg" | "md"]: {
		title: string;
	};
} = {
	lg: {
		title: "text-3xl",
	},
	md: {
		title: "text-xl",
	},
};

export default function ArticleCategoryBox({
	article,
	size,
}: ArticleCategoryBoxProps) {
	return size === "lg" || size === "md" ? (
		<article className="cursor-pointer group">
			<div className="mb-4 overflow-hidden bg-gray-100 aspect-video">
				<img
					src={article.image}
					alt={article.title}
					className="object-cover w-full h-full transition-transform duration-300 group-hover:opacity-90"
				/>
			</div>
			<h3
				className={cn(
					"mb-2 font-semibold leading-tight text-black transition-colors",
					classNamesMapping[size].title
				)}
			>
				<span className="group-hover:shadow-underline">{article.title}</span>
			</h3>
			<div className="mb-3 text-xs text-gray-600">
				<span className="font-medium tracking-wide text-c-yellow">
					{article.date}
				</span>
			</div>
			<div className="mb-3 text-sm text-gray-600">
				by <span className="font-semibold text-black">{article.author}</span>
			</div>
			<p className="text-gray-700">{article.excerpt}</p>
		</article>
	) : (
		<article className="cursor-pointer group">
			<div className="flex space-x-4">
				<div className="flex-shrink-0 w-20 h-20 overflow-hidden bg-gray-100">
					<img
						src={article.image}
						alt={article.title}
						className="object-cover w-full h-full transition-transform duration-300 group-hover:opacity-90"
					/>
				</div>
				<div className="flex-1 min-w-0">
					<h4 className="mb-1 text-base font-semibold leading-tight text-black transition-colors">
						<span className="group-hover:shadow-underline">
							{article.title}
						</span>
					</h4>
					<div className="mb-1 text-xs font-medium tracking-wide text-c-yellow">
						{article.date}
					</div>
					<div className="text-xs text-gray-600">
						by{" "}
						<span className="font-semibold text-black">{article.author}</span>
					</div>
				</div>
			</div>
		</article>
	);
}
