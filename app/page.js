import StarEffect from "@/components/Effects/StarEffect";
import Footer from "@/components/Footer/FooterPage";
import Header from "@/components/Header/page";
import Image from "next/image";
import ContactUs from "./contact/page";
import Certification from "@/components/certification/Certification";


export default function Home() {
  return (
    <div>
      <Certification />
      <ContactUs />  
    
    </div>
  );
}
