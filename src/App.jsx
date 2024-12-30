import Hero from "./sections/Hero.jsx";
import CustomerReviews from "./sections/CustomerReviews.jsx";
import Footer from "./sections/Footer.jsx";
import PopularProducts from "./constants/PopularProducts.jsx";
import Services from "./constants/Services.jsx";  
import SpecialOffer from "./constants/SpecialOffer.jsx";
import Subscribe from "./constants/Subscribe.jsx";
import SuperQuality from "./constants/SuperQuality.jsx";

// curly braces not used because 
// I am not going to write any 
// functions or JavaScript code, just jsx
const App = () => (
  // being in react, gotta use className instead of just class
  <main className="relative">
    Nav
    <section className = "xl-padding-1 wide:padding-r padding-b ">
      Hero
    </section>
    
    <section className="padding">
      PopularProducts
    </section>

    <section className="padding">
      SuperQuality
    </section>    
    
    <section className="padding-x py-10">
      Services
    </section>

    <section className="padding">
      SpecialOffers
    </section>

    <section className="bg-pale-blue padding">
      CustomerReviews
    </section>

    <section className="padding-x sm:py-32 py-16 w-full">
      Subscribe
    </section>

    <section className="text-white bg-black padding-x padding-t pb-8">
      Footer
    </section>
  </main>
); 

export default App;