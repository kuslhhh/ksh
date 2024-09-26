import { useForm } from 'react-hook-form'
import { Form } from 'react-router-dom'
import * as yup from "yup"

export const CreateForm = () => {

    const schema = yup.object().shape({
        title: yup.string().required("You must add a title!")
    })

    return (
        <form className='flex flex-col'>
            <div className='flex flex-col'>
                <input 
                    className='rounded-md bg-[#1F1F1F] p-2 m-1 text-center' 
                    placeholder='Enter Title...' 
                />
                <textarea 
                    className='rounded-md bg-[#1F1F1F] p-2 m-1 text-center' 
                    placeholder='Enter Description...' 
                />
            </div>
            <div className=' flex justify-center m-2'>
                <input 
                    className='rounded-md bg-[#a9a9a9] text-black font-semibold hover:bg-[#1F1F1F] cursor-pointer hover:text-white  p-2 w-20 ' 
                    type="submit" 
                />
            </div>
        </form>
    )
}