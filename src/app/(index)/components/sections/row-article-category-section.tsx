import ArticleCategoryBox from "@/app/(index)/components/box/article-category-box";
import TitleSection from "@/components/common/title-section";
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
				<TitleSection
					title={title}
					icon={TagRightIcon}
					rightComponent={
						<div className="flex items-center gap-16 text-xs font-medium text-black uppercase">
							{["style", "self", "culture", "power"].map((item, index) => (
								<div key={item} className="relative">
									<UnstyledLink href="#" className="hover:underline">
										{item}
									</UnstyledLink>
									{index !== 3 && (
										<VerticalDivider className="absolute inset-y-0 h-5 -right-8 shrink-0" />
									)}
								</div>
							))}
						</div>
					}
				/>
				<p className="mt-4 text-gray-600">{subtitle}</p>
			</div>

			{/* Articles grid */}
			<div className="grid grid-cols-3 gap-12">
				{/* Large featured article */}
				{articles.slice(0, 3).map((article, index) => (
					<div key={article.title} className="relative">
						<ArticleCategoryBox article={article} size="md" />
						{index !== articles.length - 1 && (
							<VerticalDivider className="absolute top-0 bottom-0 -right-6 shrink-0" />
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default RowArticleCategorySection;
