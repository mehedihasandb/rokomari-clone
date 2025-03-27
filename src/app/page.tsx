import Banner from "@/components/Banner";
import Cardone from "@/components/Cardone";
import Bestseller from "@/components/Bestseller";
import Superstore from "@/components/Superstore";
import Card from "@/components/Card";
import Cardtwo from "@/components/Cardtwo";
import Bestseller1 from "@/components/BestSeller1";
import Author from "@/components/Author";
import Category from "@/components/Category";
import TopCategoryList from "@/components/CategoryList";
import KidsProduct from "@/components/KidsProduct";
import ServiceBanner from "@/components/Servicebanner";
import Subscribe from "@/components/Subscribe";
import CashFooter from "@/components/CashFooter";
import TopCategory from "@/components/TopCategory";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <main>
      <Banner />
      <Cardone />
      <Bestseller />
      <Superstore />
      <KidsProduct />
      <TopCategoryList />  
      <ServiceBanner />    
      <Bestseller1 />
      <TopCategory />
      <Category />
      <Card />
      <Cardtwo />
      <Author />    
      <Subscribe />
      <CashFooter />  
    </main>
  );
}
