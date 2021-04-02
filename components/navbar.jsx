import styles from "../styles/navbar.module.scss";
import { useState } from "react";

const tabs = ["Home", "About Us", "Contact", "Log In"];

const Navbar = (props) => {
	const [isActive, setIsActive] = useState(-1);
	const [showNav, setShowNav] = useState(false);

	const active = (val) => {
		setIsActive(val);
	};

	const handleNav = () => {
		setShowNav(!showNav);
	};

	return (
		<div className={`${styles.container} ${showNav ? styles.showNav : null}`}>
			<div className={`${styles.logo} ${showNav ? styles.showNav : null}`}>
				Logo
			</div>
			<div onClick={handleNav} className={styles.burger}>
				<div className={`${styles.navIcon} ${showNav ? styles.open : null}`}>
				  <span></span>
				  <span></span>
				  <span></span>
				  <span></span>
				</div>
			</div>
			<ul className={`${styles.lists} ${showNav ? styles.showNav : null}`}>
				{tabs.map((val, i) => {
					return (
						<li
							key={i}
							onClick={() => active(i)}
							className={i == isActive ? styles.active : null}
						>
							<p>{val}</p>
						</li>
					);
				})}
				<li className={styles.btn}>Sign Up</li>
			</ul>
		</div>
	);
};

export default Navbar;
