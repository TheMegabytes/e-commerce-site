import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TopProducts from "./components/TopProducts";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TopProducts />
      <Features
        title="Why Choose Us?"
        description="We make online shopping simple, 
        safe and rewarding with premium products, fast delivery and customer-first service."
        imgSrc={"/image1.jpeg"}
        ctaTitle="Learn More"
      />

      <Features
        classNames="flex-row-reverse"
        title="Shop By Category"
        description="Find everything you need in just a few clicks - from fashion and
        electronics to home assets."
        imgSrc={"/image2.jpeg"}
        ctaTitle="Browse Categories"
      />

      <Features
        title="Trending Right Now"
        description="Discover what's hot! Shop the
        products everyone is loving today."
        imgSrc={"/image3.jpeg"}
        ctaTitle="View Best Sellers"
      />

      <Features
        classNames="flex-row-reverse"
        title="Limited Time Deals 🔥"
        description="Grab exclusive discounts and special offers before they're gone."
        imgSrc={"/image4.jpeg"}
        ctaTitle="Shop Deals"
      />

      <Features
        title="Loved By Thousands"
        description="Amazing experience! The delivery was quick, and product quality
        exceeded expectations"
        imgSrc={"/image8.jpeg"}
        ctaTitle="Shop Now"
      />

      <Footer />
    </div>
  );
}

export default App;
