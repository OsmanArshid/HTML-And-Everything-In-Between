
const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="px-10 py-16 rounded-[20px] w-full shadow-3xl flex-1 sm:w-[350px] sm:min-w-[350px]">
        <div className="bg-coral-red rounded-full w-11 h-11 justify-center items-center flex">
            <img 
                src={imgURL}
                alt={label}
                width={24} height={24}
            />
        </div>

        <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
            {label}
        </h3>

        <p className="mt-3 font-montserrat break-words text-lg leading-normal text-slate-gray"> {subtext} </p>                 
    </div>
  )
}

export default ServiceCard