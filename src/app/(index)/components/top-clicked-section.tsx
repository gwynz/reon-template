import VerticalDivider from "@/components/common/vertical-divider";
import UnderlineLink from "@/components/links/UnderlineLink";
import { Button } from "@/components/ui/button";
import TagPriceDottedIcon from "~/svg/icons/tag-price-dotted.svg";
export default function TopClickedSection() {
	return (
		<div className="my-8">
			<div className="flex items-center justify-between border-black md:text-4xl border-b-3">
				<div className="flex items-center gap-3 pb-2 mb-4 text-3xl font-extrabold text-black ">
					<TagPriceDottedIcon className="w-12 h-auto text-black" />
					Top Clicked Today
				</div>
				<UnderlineLink href="#" className="text-base">
					See all articles →
				</UnderlineLink>
			</div>

			<div className="flex items-start gap-8 pt-6">
				<div className="flex flex-col items-center justify-center flex-1 cursor-pointer group">
					<div className="p-2 overflow-hidden">
						<img
							src={
								"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
							}
							alt={"Product image"}
							className="object-cover w-full h-full aspect-square group-hover:opacity-90"
						/>
					</div>
					<h3 className="mt-3 text-2xl font-semibold text-center text-black transition-colors">
						<span className="group-hover:shadow-underline">
							Epicka Universal Travel Adapter
						</span>
					</h3>
				</div>
				<VerticalDivider className="h-[400px] shrink-0" />
				<div className="flex flex-col items-center justify-center w-[400px] cursor-pointer group">
					<img
						src={
							"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
						}
						alt={"Product image"}
						className="object-cover w-full h-full aspect-square group-hover:opacity-90"
					/>
					<h3 className="mt-3 text-2xl font-semibold text-center text-black transition-colors">
						<span className="group-hover:shadow-underline">
							Epicka Universal Travel Adapter
						</span>
					</h3>
				</div>
				<VerticalDivider className="h-[400px] shrink-0" />

				<div className="flex flex-col items-center justify-center flex-1 cursor-pointer group">
					<img
						src={
							"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
						}
						alt={"Product image"}
						className="object-cover w-full h-full aspect-square group-hover:opacity-90"
					/>
					<h3 className="mt-3 text-2xl font-semibold text-center text-black transition-colors">
						<span className="group-hover:shadow-underline">
							Epicka Universal Travel Adapter
						</span>
					</h3>
				</div>
			</div>
		</div>
	);
}
