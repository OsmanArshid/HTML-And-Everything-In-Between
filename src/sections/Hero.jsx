import { useState } from "react";
import Button from "../components/Button";
import {arrowRight} from "../assets/icons";
import {shoes, statistics} from "../constants";
import {bigShoe1} from "../assets/images";
import TheShoeCard from "../components/TheShoeCard";

const Hero = () => {
  // gonna use bigShoe1 as the default 
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)

  return (
    <section
      id = "home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container" 
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28" >
        
        <p className="text-xl font-montserrat text-coral-red">
          Our summer Collections
        </p>
        
        <h1 className="mt-10 font-palanquin font-bold text-8xl max-sm:text-[72px] max-sm:leading-[82]">
          
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10"> 
            The New Arrival
          </span>
          
          <br />
          
          <span className="text-coral-red inline-block mt-3">
            Nike 
          </span> Shoes
        </h1>
        
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm "> 
          Discover The Magic
        </p>
        
        <Button label="Shop Now"
          iconURL = {arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 max">
          {statistics.map((stat) => (
            <div key={stat.label}>
              
              <p className="text-4xl font-palanquin font-bold">
                {stat.value}
              </p>
              
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          className = "relative object-contain z-10"
          src={bigShoeImg}
          alt = "shoe collec"
          width={610}
          height={500}
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <TheShoeCard
                imgURL = {shoe}
                // Setter func as a callback func to modify the images
                changeBigShoeImage= {(shoe) => setbigShoeImg(shoe)}
                bigShoeImg= {bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero