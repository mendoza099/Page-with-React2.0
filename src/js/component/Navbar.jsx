import React from "react";

const Navbar = () => {
	return (
		<>
			<nav
				className="navbar navbar-expand-lg "
				style={{ backgroundColor: "#2a2a2a" }}>
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarText"
						aria-controls="navbarText"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarText"
						style={{ marginRight: "3cm" }}>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<span
								className="navbar-text"
								style={{ marginLeft: "5cm", color: "white" }}>
								Start Bootstrap
							</span>
						</ul>
						<li className="nav-item">
							<a className="active" aria-current="page" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="" href="#">
								Service
							</a>
						</li>
						<li className="nav-item">
							<a className="" href="#">
								Contact
							</a>
						</li>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
