export const InputController = (props) => {
    const {label, register, name, mandatory = false, placeholder, width} = props;

    return (
        <div>
            <span className="text-neutral-800 text-sm font-medium font-['Poppins'] leading-tight">{label}</span>
            {mandatory && <span className="text-red-400 text-sm font-medium font-['Poppins'] leading-tight">*</span> }
            <input type='text' name={name} {...register(name)} placeholder={placeholder} style={{width: width}} className="block rounded-md border-0 py-1.5 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm" {...props}/>
        </div>
    )
};