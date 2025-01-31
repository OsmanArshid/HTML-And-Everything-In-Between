import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section 
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gpa-10 w-full max-container"> 
    <div className="flex flex-1 flex-col">        
        
        <h2 className="font-palanquin font-bold text-4xl capitalize lg:max-w-lg">
          We Provide you  
          <span className="text-coral-red"> Super 
          </span>

          <span className="text-coral-red"> Quality 
          </span> Shoes
        </h2> 
        
        <p className="mt-4 lg:max-w-lg info-text"> 
          Discover The Magic
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication is superb
        </p>
        
        <div className="mt-11">
          <Button label="View Details"/>
        </div>
    </div>

    <div className="flex flex-1 justify-center items-center">
      <img 
        src={shoe8}
        alt="shoe8"
        width={570}
        height={522}
      />
    </div>
    </section>
  )
}

export default SuperQuality