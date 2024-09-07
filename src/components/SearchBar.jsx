import {useState} from 'react'

const SearchBar = () => {
    const [query, setQuery] = useState('');

  return (
    <div className='center'>
        <input onChange={() => setQuery(e.target.value)} type="text" placeholder='Enter your search terms...'/>
        <button className='btn' onClick={() => handleClick()}>Search</button>
    </div>
  )
}

export default SearchBar