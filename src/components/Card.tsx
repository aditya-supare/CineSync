import React from 'react';
import Link from 'next/link'; 
import Image from 'next/image'; 
import { FiThumbsUp } from 'react-icons/fi';

interface Cardprop{
    result:any;
}

export default function Card({ result }:Cardprop) {
  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-400'>
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
          alt="Loading"
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-57 duration:300 ease-in-out"
        ></Image>
        <div className='p-2'>
          <p className='line-clamp-2 text-md'>{result.overview}</p>
          <h2 className='text-lg font-bold truncate'>{result.title || result.name }</h2>
          <p className='flex items-center'>
            {result.release_date || result.first_air_date}
            <FiThumbsUp ></FiThumbsUp>
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
