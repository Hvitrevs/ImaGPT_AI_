import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch('http://localhost:8080/api/v1/dalle', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: form.prompt,
          }),
        });

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (err) {
        alert(err);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Cannot generate without prompt');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8080/api/v1/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...form }),
        });

        await response.json();
        alert('Success');
        navigate('/');
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Cannot share nonexistant image. Please enter your prompt');
    }
  };

  return (

    
    <section className= 'sm:w-3/4 md:w-5/6 max-w-7x1 mx-auto mt-20 bg-gradient-to-r from-[#151e35] rounded-2xl '>
      <div className='mt-5 py-12 mr-5'>
        <h1 className='font-inter max-w-7xl mt-5 ml-11 font-bold text-[#bacae7] text-[2rem] tracking-[.12rem]'>Generate pictures </h1>
        <p className='max-w-7xl mx-auto ml-11 mt-3 text-[#bacae7] text-[1rem] tracking-[.07rem] max-w-[900px]'>Compose high quality references for your project with AI </p>
      </div>


      <form className='mt-4 ml-11 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField 
            labelName='Your nickname'
            type='text'
            name='name'
            placeholder='Ex: EeryCastle428'
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName='Prompt'
            type='text'
            name='prompt'
            placeholder='Ex: A fortune-telling shiba inu reading your fate in a giant hamburger, digital art'
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <section className='max-w-7xl mr-80 flex items-center'>
            <div className='mt-1 inline-block'>
              <button
                type='button'
                onClick={generateImage}
                className='font-inter font-bold bg-[#202333] hover:bg-[#73fff6] border border-[#572f4b] text-[#d066c5] hover:text-[#025853] text-sm tracking-[.07rem] px-2 py-2 rounded-2xl shadow hover:shadow-[#73fff6] border hover:border-[#73fff6]' 
              >
                {generatingImg ? 'Generating' : 'Generate' }
              </button>
            </div>

            
            <div className='mt-1 flex justify-right items-right ml-3'>
              <button
                type='submit'
                className='font-inter font-bold bg-[#202333] hover:bg-[#73fff6] border border-[#572f4b] text-[#c961bf] hover:text-[#025853] text-sm tracking-[.07rem] px-2 py-2 rounded-2xl shadow hover:shadow-[#73fff6] border hover:border-[#73fff6]' 
              >
                {loading ? 'Saving' : 'Save'}
              </button>
            </div>


            <div className='mt-1 flex justify-right items-right ml-3'>
              <button
                onClick={() => {
                  window.location.href = '/';
                }}
                type='button'
                className='font-inter font-bold bg-[#202333] hover:bg-[#73fff6] border border-[#572f4b] text-[#ff8ef4] hover:text-[#025853] text-sm tracking-[.07rem] px-2 py-2 rounded-2xl shadow hover:shadow-[#73fff6] border hover:border-[#73fff6] md:hidden lg:hidden' 
              >
              {loading ? '<<' : ' < '}
              </button>
            </div>
          </section>


          <div className='relative mr-3 bg-gradient-to-b from-[#211730] border-[#ff7dda] text-gray-700 text-sm rounded-2xl sm:w-3/4 h-3/4 md:w-3/4/2 p-4 h-3/4 flex justify-center items-center'>
            
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className='w-full h-full object-contain'/>
            ): (
              <img
                src={preview}
                alt='preview'
                className='w-9/12 h-9/12 object-contain opacity-40'/>
            )}

            {generatingImg && (
              <div className='absolute inset-0 z-0 flex justify-center items-center bg-[#1e102d] my-0 mx-0 rounded-lg'>
                <Loader />
              </div>

            )}
          </div>
        </div>

        <p className=' text-[#151e35]'> V12pm</p>
      </form>
      
    </section>
  )
}

export default CreatePost
