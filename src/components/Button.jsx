const Button = ({label, iconURL, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <button 
        className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
        ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "bg-slate-600 text-white border-coral-red"} rounded-full ${fullWidth && 'w-full'}"}`} >
        
        {label}

        { iconURL && <img
            className="ml-2 rounded-full w-5 h-5"
            src = {iconURL}
            alt = "arrow right icon"
        />}
    </button>
)
}

export default Button