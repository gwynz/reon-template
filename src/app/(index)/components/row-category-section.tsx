import { Article } from "@/_mock/articles";
import HorizontalDivider from "@/components/common/horizontal-divider";
import VerticalDivider from "@/components/common/vertical-divider";
import UnstyledLink from "@/components/links/UnstyledLink";
import React from "react";
import TagRightIcon from "~/svg/icons/tag-right.svg";
interface RowCategorySectionProps {
	title: string;
	subtitle: string;
	articles: Article[];
}

const RowCategorySection: React.FC<RowCategorySectionProps> = ({
	title,
	subtitle,
	articles,
}) => {
	return (
		<section>
			{/* Section header */}
			<div className="mb-4">
				<div className="flex items-center justify-between gap-2 pb-2 mb-4 border-black border-b-3">
					<h2 className="flex items-center gap-3 text-3xl font-extrabold text-black md:text-4xl">
						{title}
						<TagRightIcon className="h-auto w-14" />
					</h2>
					<div className="flex items-center gap-8 text-xs font-medium text-black uppercase">
						<UnstyledLink href="#" className="hover:underline">
							style
						</UnstyledLink>
						<VerticalDivider className="h-6" />
						<UnstyledLink href="#" className="hover:underline">
							self
						</UnstyledLink>
						<VerticalDivider className="h-6" />
						<UnstyledLink href="#" className="hover:underline">
							culture
						</UnstyledLink>
						<VerticalDivider className="h-6" />
						<UnstyledLink href="#" className="hover:underline">
							power
						</UnstyledLink>
					</div>
				</div>
				<p className="text-gray-600">{subtitle}</p>
			</div>

			{/* Articles grid */}
			<div className="grid grid-cols-3 gap-6">
				{/* Large featured article */}
				{articles.slice(0, 3).map((article, index) => (
					<article key={article.title} className="cursor-pointer group">
						<div className="mb-4 overflow-hidden bg-gray-100 aspect-video">
							<img
								src={article.image}
								alt={article.title}
								className="object-cover w-full h-full transition-transform duration-300 group-hover:opacity-90"
							/>
						</div>
						<h3 className="mb-2 text-xl font-semibold leading-tight text-black transition-colors">
							<span className="group-hover:shadow-underline">
								{article.title}
							</span>
						</h3>
						<div className="mb-3 text-sm text-gray-600">
							<span className="font-medium tracking-wide uppercase text-c-yellow">
								PUBLISHED {article.date}
							</span>
						</div>
						<div className="mb-3 text-sm text-gray-600">
							by{" "}
							<span className="font-semibold text-black">{article.author}</span>
						</div>
						<p className="text-gray-700">{article.excerpt}</p>
					</article>
				))}
			</div>
		</section>
	);
};

export default RowCategorySection;
