import React from 'react'
import Results from '@/components/Results';

interface SearchPageprops{
    params:any;
}

export default async function SearchPage({params}:SearchPageprops) {
    const searchTerm = params.searchTerm;
    const API_KEY = '8ea46bf6fa7bfae6602c588883e8ca8c'
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`)
    const data = await res.json();
    const results = data.results;
    return (
    <div>
        {
            results && results.length === (
                <h1 className='text-center pt-6'>No Results Found.</h1>
            )
        }
        {results && <Results results={results}/>}
      
    </div>
  )
}
