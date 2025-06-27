import ArticleCategoryBox from "@/app/(index)/components/box/article-category-box";
import HorizontalDivider from "@/components/common/horizontal-divider";
import TitleSection from "@/components/common/title-section";
import VerticalDivider from "@/components/common/vertical-divider";
import UnstyledLink from "@/components/links/UnstyledLink";
import { Title } from "@radix-ui/react-dialog";
import React from "react";
import TagRightIcon from "~/svg/icons/tag-right.svg";
interface GridArticleCategorySectionProps {
	title: string;
	subtitle: string;
	articles: Article[];
}

const GridArticleCategorySection: React.FC<GridArticleCategorySectionProps> = ({
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
			<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
				{/* Large featured article */}
				{articles[0] && (
					<div className="lg:col-span-2">
						<ArticleCategoryBox article={articles[0]} size="lg" />
					</div>
				)}

				{/* Smaller articles */}
				<div className="flex">
					<VerticalDivider className="pl-6" />
					<div className="space-y-6">
						{articles.map((article, index) => (
							<div key={index}>
								<ArticleCategoryBox article={article} size="sm" />
								{index !== articles.length - 1 && (
									<HorizontalDivider className="my-4" />
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default GridArticleCategorySection;
