import React from "react";
import HorizontalDivider from "@/components/common/horizontal-divider";
import XIcon from "~/svg/icons/x.svg";
import InstagramIcon from "~/svg/icons/instagram.svg";
import YoutubeIcon from "~/svg/icons/youtube.svg";
import TiktokIcon from "~/svg/icons/tiktok.svg";
import TelegramIcon from "~/svg/icons/telegram.svg";
import FacebookIcon from "~/svg/icons/facebook.svg";

const Footer = () => {
	return (
		<footer>
			<div className="pb-8 mx-auto max-w-[1100px]">
				<HorizontalDivider className="mb-8" />
				{/* Logo */}
				<div className="mb-8 text-center">
					<h3 className="text-2xl font-bold text-black">REON</h3>
				</div>

				{/* Main navigation links */}
				<div className="flex flex-wrap items-center justify-center mb-12 text-xs gap-x-8 gap-y-4">
					{[
						"Beauty",
						"Home",
						"Kitchen & Dining",
						"Fashion",
						"Electronics",
						"Kids & Babies",
						"Gift Guides",
						"Fitness",
					].map((item) => (
						<a
							key={item}
							href="#"
							className="text-xs font-medium tracking-wide text-gray-700 uppercase hover:text-c-yellow"
						>
							{item}
						</a>
					))}
				</div>

				{/* Social media icons */}
				<div className="flex justify-center mb-12 space-x-4">
					<div className="flex items-center justify-center w-10 h-10 bg-black rounded-full cursor-pointer hover:bg-gray-800">
						<FacebookIcon className="w-5 h-5 text-white" />
					</div>
					<div className="flex items-center justify-center w-10 h-10 bg-black rounded-full cursor-pointer hover:bg-gray-800">
						<InstagramIcon className="w-5 h-5 text-white" />
					</div>
					<div className="flex items-center justify-center w-10 h-10 bg-black rounded-full cursor-pointer hover:bg-gray-800">
						<TelegramIcon className="w-5 h-5 text-white" />
					</div>
					<div className="flex items-center justify-center w-10 h-10 bg-black rounded-full cursor-pointer hover:bg-gray-800">
						<TiktokIcon className="w-5 h-5 text-white" />
					</div>
					<div className="flex items-center justify-center w-10 h-10 bg-black rounded-full cursor-pointer hover:bg-gray-800">
						<XIcon className="w-5 h-5 text-white" />
					</div>
					<div className="flex items-center justify-center w-10 h-10 bg-black rounded-full cursor-pointer hover:bg-gray-800">
						<YoutubeIcon className="w-5 h-5 text-white" />
					</div>
				</div>

				{/* Footer links */}
				<div className="flex flex-wrap items-center justify-center mb-8 text-xs gap-x-6 gap-y-2">
					{[
						"ABOUT THE NEWSHUB",
						"ABOUT NEW YORK MAGAZINE",
						"NEWSLETTERS",
						"HELP",
						"CONTACT",
						"PRESS",
						"MEDIA KIT",
						"WE'RE HIRING",
						"PRIVACY",
						"TERMS",
						"AD CHOICES",
					].map((item) => (
						<a
							key={item}
							href="#"
							className="tracking-wider text-gray-600 uppercase hover:text-c-yellow text-[10px]"
						>
							{item}
						</a>
					))}
				</div>

				{/* Copyright */}
				<div className="text-center">
					<p className="text-xs tracking-wider text-gray-500 uppercase">
						THE REON IS A VOX MEDIA NETWORK. © 2025 REON. ALL RIGHTS RESERVED.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
