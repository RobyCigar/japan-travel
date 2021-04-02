import Image from "next/image";
import styles from '../styles/banner.module.scss'

const Banner = (props) => {
  return (
  	<>
      <div className={styles.cloud}>
        <Image
          src="/cloud.svg"
          alt="Picture of the author"
          height={900}
          width={1300}
          layout="intrinsic"
        />
      </div>
      <main className={styles.main}>
        <div className={styles.text}>
          <h1>Visit Japan</h1>
          <h2>Explore and Enjoy Japan</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit libero fuga quia earum tenetur nulla dolorem ea nesciunt accusamus? 
            eveniet quidem asperiores assumenda quod aut doloremque. Saepe aperiam eos ex sapiente, sequi! Distinctio.
          </p>
          <button>Book Your Seat Now!</button>
        </div>
        <div className={styles.images}>
          <Image
            src="/kuil.svg"
            alt="Picture of the author"
            height={800}
            width={900}
            layout="intrinsic"
          />
        </div>
      </main>
  	</>
  )
}

export default Banner;