import React from "react";
import { Link } from "@reach/router";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<div className="ml-auto">
					<Link to="/">
						<button className="btn btn-primary"><i class="fa-solid fa-house"></i> Home</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
