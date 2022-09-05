import Image from "next/image";
import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useState, useEffect } from "react";
const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header className={`${isScrolled && "bg-[#141414]"}`}>
			<div className="flex item-center space-x-2 md:space-x-10">
				<Image
					src="https://rb.gy/ulxxee"
					width={100}
					height={40}
					className="cursor-pointer object-contain"
				/>
				<ul className="hidden space-x-4 md:flex">
					<li className="headerLink">Home</li>
					<li className="headerLink">TV series</li>
					<li className="headerLink">Movies</li>
					<li className="headerLink">New & Popular</li>
					<li className="headerLink">My List</li>
				</ul>
			</div>

			<div className="flex items-center text-sm font-light space-x-4">
				<SearchIcon className="hidden h-6 w-6 md:inline" />
				<p className="hidden lg:inline">Kids</p>
				<BellIcon className="w-6 h-6 " />
				<Link href="/account">
					<Image
						src="https://rb.gy/g1pwyx"
						alt=""
						className="cursor-pointer rounded space-x-2"
						height={30}
						width={30}
					/>
				</Link>
			</div>
		</header>
	);
};

export default Header;
