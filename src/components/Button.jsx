
const Button = ({label,iconURL,backgroundColor,borderColor,textColor,fullWidth}) => {
  return (
    <button className={`flex items-center justify-center gap-2 py-4 text-lg leading-none border font-montserrat px-7 rounded-full
    ${
      backgroundColor
     ?  `${backgroundColor} ${textColor} ${borderColor}`
     :
    'bg-coral-red border-coral-red text-white'} rounded-full ${fullWidth && "w-full"}`}>
      
    {label}
    
   {iconURL &&  <img 
    src={iconURL}
    alt="arrow right icon"
    className="w-5 h-5 ml-2 rounded-full"
    />
   }
    </button>
  )
}

export default Button