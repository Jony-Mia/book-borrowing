import BookCarousel from "@/component/BookCarousel";
import Books from "@/component/Books";
import Feature from "@/component/Feature";
import Hero from "@/component/Hero";
import Marque from "@/component/Marquee";
import PromoBanner from "@/component/PromoBanner";

export default function Home() {

  return (
    <>
    <br/>
    <Hero/>
    <Marque/>
    <Feature/>
    <BookCarousel />
    <PromoBanner/>
    <Books/>
    </>
  );
}
