
const TheShoeCard = ({imgURL,changeBigShoeImage,bigShoeImg}) => {
    const handleClick = () => {
        if (bigShoeImg != imgURL.bigShoe)
        {
            // trying to figure out if the selected shoe is what is being showed
            // if it isn't then change it to what we click
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
  return (
    // writing the classname like this allows us to give logic (code) 
    // inside the component along with styling
    <div className= {`border-2 rounded-xl
            ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'}
            cursor-pointer max-sm:flex-1
        `}
    onClick={handleClick}
    >
        <div className="flex justify-center items-center bg-card bg-center bg-cover rounded-xl sm:w-40 sm:h-40 max-sm:p-4">
            
            <img 
                className="object-contain"
                src={imgURL.thumbnail}
                alt="shoes collection"
                width={127}
                height={103}
            />
        
        </div>
    </div>
  )
}

export default TheShoeCard