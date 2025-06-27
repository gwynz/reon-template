import DailyDeals from "@/app/(index)/components/daily-deals";
import FeaturedArticle from "@/app/(index)/components/featured-article";
import CategorySection from "@/app/(index)/components/category-section";
import { categoryData } from "@/_mock/articles";
import UnderlineLink from "@/components/links/UnderlineLink";
import HorizontalDivider from "@/components/common/horizontal-divider";
import VerticalDivider from "@/components/common/vertical-divider";
import TopClickedSection from "@/app/(index)/components/top-clicked-section";

export default async function HomePage() {
	return (
		<div className="pb-8">
			{/* Disclaimer banner */}
			<div className="bg-white">
				<div className="py-3 ">
					<p className="text-sm text-center text-gray-600">
						Shopping the Internet Smartly | Every product is independently
						selected by (obsessive) editors, whom you can read about{" "}
						{<UnderlineLink href="#">here</UnderlineLink>}. Things you buy
						through our links may earn us a commission.{" "}
						<UnderlineLink href="#">Learn more →</UnderlineLink>
					</p>
				</div>
			</div>
			<HorizontalDivider />

			{/* Main content */}
			<main className="pt-8">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
					{/* Latest articles sidebar */}

					{/* Featured article */}
					<section className="order-1 lg:col-span-8 lg:order-2">
						<div>
							<FeaturedArticle />
						</div>
					</section>

					{/* Daily deals sidebar */}
					<aside className="flex order-3 lg:col-span-4">
						<VerticalDivider />
						<DailyDeals />
					</aside>
				</div>
			</main>

			<HorizontalDivider className="mt-8" />

			{/* <TopClickedSection /> */}
			<TopClickedSection />
			<HorizontalDivider className="mt-8" />

			{/* Category sections */}
			<CategorySection
				title={categoryData.gamesAndHobbies.title}
				subtitle={categoryData.gamesAndHobbies.subtitle}
				articles={categoryData.gamesAndHobbies.articles}
			/>
			<HorizontalDivider />

			<CategorySection
				title={categoryData.softwareAndApps.title}
				subtitle={categoryData.softwareAndApps.subtitle}
				articles={categoryData.softwareAndApps.articles}
			/>
			<HorizontalDivider />

			<CategorySection
				title={categoryData.office.title}
				subtitle={categoryData.office.subtitle}
				articles={categoryData.office.articles}
			/>
			<HorizontalDivider />

			<CategorySection
				title={categoryData.cars.title}
				subtitle={categoryData.cars.subtitle}
				articles={categoryData.cars.articles}
			/>
			<HorizontalDivider />

			<CategorySection
				title={categoryData.money.title}
				subtitle={categoryData.money.subtitle}
				articles={categoryData.money.articles}
			/>
		</div>
	);
}
