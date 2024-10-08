import StarEffect from "@/components/Effects/StarEffect";
import Footer from "@/components/Footer/FooterPage";
import Header from "@/components/Header/page";
import Image from "next/image";
import ContactUs from "./contact/page";
import Certification from "@/components/certification/Certification";
import HeroSection from "@/components/HeroSection/HeroSection";
import MySkills from "@/components/MySkills/MySkills";
import WorkExperience from "@/components/WorkExpericence/WorkExperienece";


export default function Home() {
  return (
    <div>

      <HeroSection />
      <MySkills />
      <WorkExperience />
      <Certification />
      <ContactUs />  
    
    </div>
  );
}
