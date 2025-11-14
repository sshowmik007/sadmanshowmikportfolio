import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Film, Grid, User } from "lucide-react";
import { cn } from "@/lib/utils"; // Ensure the `cn` utility is imported or implement it if needed.

export default function Navbar() {
	const location = useLocation(); // React Router hook to get current path
	const pathname = location.pathname;

	return (
		<nav className="bg-black p-4 lg:hidden block pb-0">
			<div className="flex items-center justify-center gap-2">
				{/* About Link */}
				<Link
					to="/about"
					className={cn(
						"flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",
						pathname === "/about" || pathname === "/"
							? "bg-[#9D7EE0] text-white"
							: "bg-[#1C1C1C] text-gray-300 hover:bg-[#2C2C2C]"
					)}
				>
					<User className="h-4 w-4" />
					<span className="text-sm font-medium">About</span>
				</Link>

				{/* Works Link */}
				<Link
					to="/works"
					className={cn(
						"flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",
						pathname === "/works"
							? "bg-[#9D7EE0] text-white"
							: "bg-[#1C1C1C] text-gray-300 hover:bg-[#2C2C2C]"
					)}
				>
					<Film className="h-4 w-4" />
					<span className="text-sm font-medium">Works</span>
				</Link>

				{/* Services Link */}
				<Link
					to="/services"
					className={cn(
						"flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",
						pathname === "/services"
							? "bg-[#9D7EE0] text-white"
							: "bg-[#1C1C1C] text-gray-300 hover:bg-[#2C2C2C]"
					)}
				>
					<Grid className="h-4 w-4" />
					<span className="text-sm font-medium">Services</span>
				</Link>
			</div>
		</nav>
	);
}
