import styles from "../styles/card.module.scss";
import Image from "next/image";

const Card = (props) => {
	return (
		<div className={styles.container}>
			{images.map((val, i) => {
				return (
					<div key={i} className={styles.card}>
				          <Image
				            src={`/${val.url}.svg`}
				            alt="Picture of the author"
				            height={150}
				            width={300}
				            layout="fixed"
				            className={styles.pic}
				          />
									<p>{val.name}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Card;

const images = [
	{ name: "24 Hours Service", url: "cs" },
	{ name: "Less Money", url: "coin" },
	{ name: "Many Place You Can Visit", url: "map" },
];