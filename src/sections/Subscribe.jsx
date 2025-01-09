import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section id="contact-us" 
            className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      
      <h3 className="text-4xl leading-[68px] font-palanquin font-bold lg:max-w-md">
        Sign up for <span className="text-coral-red"> Updates </span> & Newsletters
      </h3>

      <div className="lg:max-w-[40%] w-full flex max-sm:flex-col gap-5 p-2.5 items-center sm:border sm:border-slate-gray rounded-full">
        <input 
          type="text"
          className="input"
          placeholder="subscribe@nike.com"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label = "Sign up"
          fullWidth />
        </div>
      </div>
    </section>
  )
}

export default Subscribe