import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe}) => {
    return (
        <div>
            <div className='flex items-center gap-2 mb-2'>
        <label
            htmlFor={name}
            className='block font-inter font-md text-[#7b8898] my-1.5 tracking-[.06rem]'
        >
            {labelName}
        </label>
        {/* randomizer button bellow */}
        {isSurpriseMe && (
            <button
                type='button'
                onClick={handleSurpriseMe}
                className='ml-5 mb-3 font-inter font-bold bg-[#462446] hover:bg-[#73fff6] border-[#ff7dda] text-[#ff8ef4] hover:text-[#025853] text-sm tracking-[.07rem] px-2 py-2 rounded-2xl shadow-md shadow-[#5e3b46]  hover:shadow-[#73fff6]'         
            >
            Suggest idea
            </button> 
        )}
        </div> 
        <input  
            type={type}
            name={name}
            placeholder={placeholder }
            value={value}
            onChange={handleChange}
            required
            className= 'placeholder:text-[#41627e] bg-gradient-to-r from-[#211730] shadow-lg  shadow-[#20233c] to-[#1e1b36] hover:bg-[#20133e] text-[#7fe1fc] text-sm tracking-[.03rem] rounded-2xl focus:ring-[#1e1038] outline-none block w-full p-3 mr-5 '

        />

        </div>
    )
}
    

export default FormField