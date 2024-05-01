import React from 'react'
import Image from 'next/image';
import { FaThumbsDown, FaThumbsUp } from 'react-icons/fa';

interface moviepageprop{
    params: any;
    movie:any
    poster_path:any;
    backdrop_path:any;
}

export default async function Moviepage({params}: moviepageprop) {
    const movieId = params.id;
    const API_KEY = '8ea46bf6fa7bfae6602c588883e8ca8c'; 
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
    const movie = await res.json();
    

    
  return (
    <div className='w-full'>
        <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-aut0 md:space-x-6'>
            <Image
                src={`https://image.tmdb.org/t/p/original/${
                    movie.backdrop_path || movie.poster_path
                }`}
                alt = {'Loading...'}
                width = {500}
                height = {300}
                className = 'rounded-lg'
            >
            </Image>
            <div className='p-2'>
                <h2 className='text-lg mb-3 font-bold'>{movie.title || movie.name}</h2>
                <p className='text-lg mb-3'>{movie.overview}</p>
                <p className='mb-3 flex'>
                    <span className='font-semibold mr-1'>Date Released:</span>
                    
                    {movie.release_date || movie.first_air_date}</p>
                <p className='mb-3 flex'>
                <span className='font-semibold mr-1 '>Rating:<FaThumbsUp></FaThumbsUp>
                </span>
                {movie.vote_count}</p>
            </div>

        </div>
    </div>
  )
}
