import Head from "next/head";
import Navbar from "../components/navbar";
import Banner from "../components/banner";
import Card from "../components/card";
import Content from "../components/content";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Nihon Travel</title>
      </Head>
      <Navbar />
      <Banner />
      <Card />
      <h1 style={titleStyle}>Our Destination</h1>
      {data.map((val, i) => {
        return (
          <Content key={i} title={val.title} src={val.src} direction={val.direction ? val.direction : null} >
            <>{val.text}</>
          </Content>
        )
      })}
      <h5 style={textStyle}>Design by Ajm, coded by Roby</h5>
    </div>
  );
}

const textStyle = {
  textAlign: 'center',
  fontWeight: 600,
  color: 'purple'
}

const titleStyle = {
  color: "#295B8B",
  textAlign: "center",
  marginTop: 90,
  marginBottom: 70,
  fontSize: 40,
};

const data = [{
  title: "Tori Gate Fujiyama",
  text: "A torii is a traditional Japanese gate most commonly found at the enterance of or within a Shinto Shrine, where it symbolically marks the transition from the mundane to the sacred",
  src: "/fujiyama.png",
},
{
  title: "Kiyomizu-dera",
  text: "Kiyomizu-dera, formally Otowa-san, Kiyomizu-dera is a Buddhist temple in eastern Kyoto. The temple is part of the historic monumentns of Ancient Kyoto UNESCO World Heritage site.",
  src: "/kiyomizu.png",
  direction: "row-reverse"
},{
  title: "Horyu-Ji",
  text: "Houryu-ji is a Buddhist temple that was once one of the powerful Seven Greate Temple in Ikaruga, Nara Prefecture Japan. Its full name is Houtyu Gakumonji, or Learning Temple of the Flourishing Law",
  src: "/horyu.png"
}]
