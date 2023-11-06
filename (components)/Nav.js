import Link from "next/link";
import { HiOutlineTicket } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";

const Nav = () => {
	return (
		<nav className="flex justify-between p-4">
			<div className="flex items-center space-x-4">
				<Link href={"/"}>
					<AiFillHome className="icon" />
				</Link>
				<Link href={"/ticketPage/new"}>
					<HiOutlineTicket className="icon" />
				</Link>
			</div>
			<div>
				<p className="">placeholder</p>
			</div>
		</nav>
	);
};

export default Nav;
