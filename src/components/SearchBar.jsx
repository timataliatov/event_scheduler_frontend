import {useEffect, useState} from 'react'

const SearchBar = ({events, setEvents}) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([])

    useEffect(() => {
        if (query) {
            const filtered = events.filter((event) => {
                event.title.toLowerCase().includes(query.toLowerCase()) ||
                event.description.toLowerCase().includes(query.toLowerCase())
            })
            setResults(filtered)
        } else {
            setResults([])
        }
    }, [query])

    const handleClick = () => {
        
    }

  return (
    <div className='flex justify-center'>
        <input onChange={() => setQuery(e.target.value)} type="text" placeholder='Look for events...'/>
        <button className='btn' onClick={() => handleClick()}>Search</button>
    </div>
  )
}

export default SearchBar