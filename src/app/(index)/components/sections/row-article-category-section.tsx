import ArticleCategoryBox from "@/app/(index)/components/box/article-category-box";
import VerticalDivider from "@/components/common/vertical-divider";
import UnstyledLink from "@/components/links/UnstyledLink";
import React from "react";
import TagRightIcon from "~/svg/icons/tag-right.svg";
interface RowArticleCategorySectionProps {
	title: string;
	subtitle: string;
	articles: Article[];
}

const RowArticleCategorySection: React.FC<RowArticleCategorySectionProps> = ({
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
				{articles.slice(0, 3).map((article) => (
					<ArticleCategoryBox key={article.id} article={article} size="md" />
				))}
			</div>
		</section>
	);
};

export default RowArticleCategorySection;
