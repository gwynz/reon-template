import { categoryData } from "@/_mock/articles";
import HorizontalDivider from "@/components/common/horizontal-divider";
import GoodSaleSection from "@/app/(index)/components/sections/good-sale-section";
import TopClickedSection from "@/app/(index)/components/sections/top-clicked-section";
import { Button } from "@/components/ui/button";
import HeadSection from "@/app/(index)/components/sections/head-section";
import RowArticleCategorySection from "@/app/(index)/components/sections/row-article-category-section";
import GridArticleCategorySection from "@/app/(index)/components/sections/grid-article-category-section";

export default async function HomePage() {
	return (
		<div className="pb-8">
			<HeadSection />

			<HorizontalDivider className="mt-8" />

			{/* <GoodSaleSection /> */}
			<TopClickedSection />
			<HorizontalDivider className="mt-8" />

			{/* <GoodSaleSection /> */}
			<GoodSaleSection />
			<HorizontalDivider className="my-8" />

			{/* Category sections */}
			<GridArticleCategorySection
				title={categoryData.gamesAndHobbies.title}
				subtitle={categoryData.gamesAndHobbies.subtitle}
				articles={categoryData.gamesAndHobbies.articles}
			/>
			<HorizontalDivider className="my-8" />

			<RowArticleCategorySection
				title={categoryData.softwareAndApps.title}
				subtitle={categoryData.softwareAndApps.subtitle}
				articles={categoryData.softwareAndApps.articles}
			/>
			<HorizontalDivider className="my-8" />

			<GridArticleCategorySection
				title={categoryData.office.title}
				subtitle={categoryData.office.subtitle}
				articles={categoryData.office.articles}
			/>
			<HorizontalDivider className="my-8" />

			<RowArticleCategorySection
				title={categoryData.cars.title}
				subtitle={categoryData.cars.subtitle}
				articles={categoryData.cars.articles}
			/>
			<HorizontalDivider className="my-8" />

			<GridArticleCategorySection
				title={categoryData.money.title}
				subtitle={categoryData.money.subtitle}
				articles={categoryData.money.articles}
			/>
			<div className="flex justify-center">
				<Button variant="line" className="mx-auto mt-8">
					See all articles →
				</Button>
			</div>
		</div>
	);
}
