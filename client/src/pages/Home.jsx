import React, { useEffect, useState } from 'react';

import { Card, FormField, Loader } from '../components';

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return (
      data.map((post) => <Card key={post._id} {...post} />)
    );
  }

  return (
    <h2 className=' font-bold text-[#4b4b4b] tracking-[.03rem] text-md'>{title}</h2>
  )
}

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8080/api/v1/post', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);
    setSearchTimeout(
    setTimeout(() => {
      const searchResults = allPosts.filter((item) => item.name.toLowerCase().includes(searchText.toLocaleLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase())); 
      setSearchedResults(searchResults);
    }, 500)
    );
  }
  return (
    
    <section className='sm:w-3/4 md:w-5/6 max-w-7x1 mx-auto mt-20  bg-gradient-to-r from-[#151e35] rounded-2xl'>
      <div className='mt-5 py-12 mr-5'>
        <h2 className='font-inter max-w-7xl mt-5 ml-11 font-bold text-[#bacae7] text-[2rem] tracking-[.1rem]'>Generate amazing pictures with AI tools</h2>
        <p className='font-inter max-w-7xl mx-auto ml-11 mt-3 text-[#bac1d3] text-[1rem] tracking-[.07rem]'>Browse through your visual library or start generating<a className='font-bold text-[#f74ee6] ' href='/create-post'> new images</a></p>

      </div>

      <div className='ml-11 max-w-7xl mx-auto mr-11 '>
      
        <FormField className='max-w-7xl mx-auto ml-1 mb-1 mt-5 text-[#8d9bad] text-[1rem] tracking-[.06rem]'
          labelName='Enter your search prompt'
          type='text'
          name='text'
          placeholder='Enter keywords'
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>

      <div className='mt-10 ml-11 max-w-7xl mx-auto mr-11'>
        {loading ? (
          <div className='flex justify-center items-center'>
            <Loader />
          </div>
        ) : (
          <>
          {searchText && (
            <h2 className='font-medium text-[#868686] tracking-[.03rem] text-md mb-3'>
              Showing results for: <span className='text-[#d9d8d8] tracking-[.03rem]'>{searchText}</span>
            </h2>
          )}
          <div className='grid lg:grid-cols-5 sm:grid-cols-4 xs:grid-cols-3 grid-cols-1 gap-4'>
            {searchText ? (
              <RenderCards
              data={ searchedResults }
              title="Nothing found :("
              />
            ) : (
              <RenderCards
              data={ allPosts }
              title="No posts found"
              />
            )}
          </div>

          </>
        )}
      </div>

    </section>
  )
}

export default Home