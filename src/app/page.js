import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import KyberBitsTools from "@/components/KyberBitsTools";
import Navbar from "@/components/Navbar";
import Network from "@/components/Network";
import NewEra from "@/components/NewEra";
import Partners from "@/components/Partners";
import Platform from "@/components/Platform";
import PowerHouse from "@/components/PowerHouse";
import QNA from "@/components/QNA";
import RoadMap from "@/components/RoadMap";
import SendEmail from "@/components/SendEmail";
import Streamline from "@/components/Streamline";
import Tokenomics from "@/components/Tokenomics";
import Transforamtive from "@/components/Transforamtive";
import VPN from "@/components/VPN";
import Image from "next/image";

export default function Home() {
  return (
   <main>
        <HeroSection/>
        <PowerHouse />
        <Platform/>
        <Network/>
        <VPN/>
        <Transforamtive/>
        <KyberBitsTools/>
        <Streamline/>
        <NewEra/>
        <Tokenomics/>
        <RoadMap/>
        <Partners/>
        <QNA/>
        <SendEmail/>
   </main>
  );
}
