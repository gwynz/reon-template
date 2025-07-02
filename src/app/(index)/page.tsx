import { categoryData } from "@/_mock/articles";
import HorizontalDivider from "@/components/common/horizontal-divider";
import GoodSaleSection from "@/app/(index)/components/good-sale-section";
import TopClickedSection from "@/app/(index)/components/top-clicked-section";
import { Button } from "@/components/ui/button";
import GridCategorySection from "@/app/(index)/components/grid-category-section";
import RowCategorySection from "@/app/(index)/components/row-category-section";
import HeadSection from "@/app/(index)/components/head-section";

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
			<GridCategorySection
				title={categoryData.gamesAndHobbies.title}
				subtitle={categoryData.gamesAndHobbies.subtitle}
				articles={categoryData.gamesAndHobbies.articles}
			/>
			<HorizontalDivider className="my-8" />

			<RowCategorySection
				title={categoryData.softwareAndApps.title}
				subtitle={categoryData.softwareAndApps.subtitle}
				articles={categoryData.softwareAndApps.articles}
			/>
			<HorizontalDivider className="my-8" />

			<GridCategorySection
				title={categoryData.office.title}
				subtitle={categoryData.office.subtitle}
				articles={categoryData.office.articles}
			/>
			<HorizontalDivider className="my-8" />

			<RowCategorySection
				title={categoryData.cars.title}
				subtitle={categoryData.cars.subtitle}
				articles={categoryData.cars.articles}
			/>
			<HorizontalDivider className="my-8" />

			<GridCategorySection
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
