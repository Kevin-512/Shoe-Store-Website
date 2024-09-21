const Button = ({label, icon}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-forest-green rounded-full text-white border-forest-green">
        {label}
        {icon}
    </button>
  )
}

export default Button