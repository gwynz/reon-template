import { Article } from "@/_mock/articles";
import HorizontalDivider from "@/components/common/horizontal-divider";
import VerticalDivider from "@/components/common/vertical-divider";
import UnstyledLink from "@/components/links/UnstyledLink";
import React from "react";
import TagRightIcon from "~/svg/icons/tag-right.svg";
interface CategorySectionProps {
	title: string;
	subtitle: string;
	articles: Article[];
}

const CategorySection: React.FC<CategorySectionProps> = ({
	title,
	subtitle,
	articles,
}) => {
	return (
		<section className="py-4">
			<div className="">
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
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
					{/* Large featured article */}
					{articles[0] && (
						<div className="lg:col-span-2">
							<article className="cursor-pointer group">
								<div className="mb-4 overflow-hidden bg-gray-100 aspect-video">
									<img
										src={articles[0].image}
										alt={articles[0].title}
										className="object-cover w-full h-full transition-transform duration-300 group-hover:opacity-90"
									/>
								</div>
								<h3 className="mb-2 text-3xl font-semibold leading-tight text-black transition-colors">
									<span className="group-hover:shadow-underline">
										{articles[0].title}
									</span>
								</h3>
								<div className="mb-3 text-sm text-gray-600">
									<span className="font-medium tracking-wide uppercase text-c-yellow">
										PUBLISHED {articles[0].date}
									</span>
								</div>
								<div className="mb-3 text-sm text-gray-600">
									by{" "}
									<span className="font-semibold text-black">
										{articles[0].author}
									</span>
								</div>
								<p className="text-gray-700">{articles[0].excerpt}</p>
							</article>
						</div>
					)}

					{/* Smaller articles */}
					<div className="flex">
						<VerticalDivider className="pl-6" />
						<div className="space-y-6">
							{articles.map((article, index) => (
								<div key={index}>
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
												<h4 className="mb-1 text-xl font-semibold leading-tight text-black transition-colors">
													<span className="group-hover:shadow-underline">
														{article.title}
													</span>
												</h4>
												<div className="mb-1 text-xs font-medium tracking-wide uppercase text-c-yellow">
													UPDATED {article.date}
												</div>
												<div className="text-xs text-gray-600">
													by{" "}
													<span className="font-semibold text-black">
														{article.author}
													</span>
												</div>
											</div>
										</div>
									</article>
									{index !== articles.length - 1 && (
										<HorizontalDivider className="my-4" />
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CategorySection;
