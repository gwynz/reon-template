import VerticalDivider from "@/components/common/vertical-divider";
import { Button } from "@/components/ui/button";
import TagPriceDottedIcon from "~/svg/icons/tag-price-dotted.svg";
export default function GoodSaleSection() {
	return (
		<div className="my-8">
			<div className="flex items-center gap-3 pb-2 mb-4 text-3xl font-extrabold text-black border-black md:text-4xl border-b-3">
				<TagPriceDottedIcon className="w-12 h-auto text-black" />
				Very Good Sale
			</div>

			<div className="flex items-center gap-8 pt-6">
				<div className="flex flex-col items-center justify-center cursor-pointer group">
					<div className="p-2 overflow-hidden transition-colors border border-black border-dotted rounded-full">
						<img
							src={
								"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
							}
							alt={"Product image"}
							className="object-cover w-full h-full rounded-full aspect-square group-hover:opacity-90"
						/>
					</div>
					{/* <h3 className="font-semibold text-center text-black transition-colors">
						<span className="group-hover:shadow-underline">
							Epicka Universal Travel Adapter
						</span>
					</h3> */}
					<Button variant="line" className="z-10 -mt-2 !bg-white">
						{/* {<span className="-mr-1 text-gray-700 line-through">$128</span>}  */}
						Buy At Amazon
					</Button>
					<span className="mt-1 text-xs font-medium tracking-widest text-gray-700">
						with code: SLAICM
					</span>
				</div>
				<VerticalDivider className="h-[280px] shrink-0" />
				<div className="flex flex-col items-center justify-center cursor-pointer group">
					<div className="p-3 overflow-hidden transition-colors border border-black border-dotted rounded-full">
						<img
							src={
								"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
							}
							alt={"Product image"}
							className="object-cover w-full h-full rounded-full aspect-square group-hover:opacity-90"
						/>
					</div>
					{/* <h3 className="font-semibold text-center text-black transition-colors">
						<span className="group-hover:shadow-underline">
							Epicka Universal Travel Adapter
						</span>
					</h3> */}
					<Button variant="line" className="z-10 -mt-2 !bg-white">
						Buy At Amazon
					</Button>
					<span className="mt-1 text-xs font-medium tracking-widest text-gray-700">
						with code: SLAICM
					</span>
				</div>
				<VerticalDivider className="h-[280px] shrink-0" />

				<div className="flex flex-col items-center justify-center cursor-pointer group">
					<div className="p-3 overflow-hidden transition-colors border border-black border-dotted rounded-full">
						<img
							src={
								"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
							}
							alt={"Product image"}
							className="object-cover w-full h-full rounded-full aspect-square group-hover:opacity-90"
						/>
					</div>
					{/* <h3 className="font-semibold text-center text-black transition-colors">
						<span className="group-hover:shadow-underline">
							Epicka Universal Travel Adapter
						</span>
					</h3> */}
					<Button variant="line" className="z-10 -mt-2 !bg-white">
						Buy At Amazon
					</Button>
					<span className="mt-1 text-xs font-medium tracking-widest text-gray-700">
						with code: SLAICM
					</span>
				</div>
				<VerticalDivider className="h-[280px] shrink-0" />

				<div className="flex flex-col items-center justify-center cursor-pointer group">
					<div className="p-3 overflow-hidden transition-colors border border-black border-dotted rounded-full">
						<img
							src={
								"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
							}
							alt={"Product image"}
							className="object-cover w-full h-full rounded-full aspect-square group-hover:opacity-90"
						/>
					</div>
					{/* <h3 className="font-semibold text-center text-black transition-colors">
						<span className="group-hover:shadow-underline">
							Epicka Universal Travel Adapter
						</span>
					</h3> */}
					<Button variant="line" className="z-10 -mt-2 !bg-white">
						Buy At Amazon
					</Button>
					<span className="mt-1 text-xs font-medium tracking-widest text-gray-700">
						with code: SLAICM
					</span>
				</div>
			</div>
		</div>
	);
}
