import UnstyledLink from "@/components/links/UnstyledLink";
import { cn } from "@/lib/utils";

type HeadArticleBoxProps = {
	article: Article;
	size: "lg" | "md" | "sm";
	imageClassName?: string;
};

const classNamesMapping: {
	[type in HeadArticleBoxProps["size"]]: {
		title: string;
		description: boolean;
		groupImage?: string;
		margin: number;
	};
} = {
	lg: {
		title: "text-3xl font-bold text-black md:text-4xl",
		description: true,
		margin: 24,
	},
	md: {
		groupImage: "aspect-square",
		title: "text-2xl font-bold text-black md:text-3xl",
		description: true,
		margin: 16,
	},
	sm: {
		groupImage: "aspect-square",
		title: "font-semibold text-black text-lg",
		description: false,
		margin: 8,
	},
};

export default function HeadArticleBox({
	article,
	size,
	imageClassName,
}: HeadArticleBoxProps) {
	const classNames = classNamesMapping[size];
	return (
		<UnstyledLink href={`/article/${article.id}`} className="group">
			<div
				className={cn("relative")}
				style={{ marginBottom: `${classNames.margin}px` }}
			>
				<div className="flex items-center justify-center bg-transparent">
					<div
						className={cn(
							"w-full h-full transition-transform duration-300 transform rotate-0 bg-white shadow-lg group-hover:rotate-2 group-hover:scale-102",
							classNames.groupImage,
							imageClassName
						)}
					>
						<img
							src={article.image}
							alt="Modern bathroom with shower"
							className="object-cover w-full h-full"
						/>
					</div>
				</div>
			</div>

			{/* Article content */}
			<div>
				<div
					className="flex items-center space-x-2 text-base text-gray-600"
					style={{ marginBottom: `${classNames.margin / 2}px` }}
				>
					<span className="text-gray-600">{article.category}</span>
				</div>
				<h1
					className={cn("text-black", classNames.title)}
					style={{
						marginBottom: classNames.description
							? `${classNames.margin / 2}px`
							: 0,
					}}
				>
					<span className="group-hover:shadow-underline">{article.title}</span>
				</h1>

				{classNames.description && (
					<p className="max-w-2xl mb-0 text-base text-gray-700">
						{article.description}
					</p>
				)}
			</div>
		</UnstyledLink>
	);
}
