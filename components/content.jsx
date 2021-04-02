import Image from "next/image";
import styles from "../styles/content.module.scss";
import AOS from 'aos';
import "aos/dist/aos.css"
import {useEffect} from 'react'

const Content = ({children, src, title, direction}) => {
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

	return (
		<div className={styles.container} style={{flexDirection: direction}}>
			<div className={styles.img} data-aos="zoom-out-up">
				<Image
					height={800}
					width={1200}
					layout="intrinsic"
					src={src}
				/>
			</div>
			<div className={styles.text}>
				<h2>{title}</h2>
				<p>
					{children}
				</p>
				<button>Book Now!</button>
			</div>
		</div>
	);
};

export default Content;
