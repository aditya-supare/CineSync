import React from 'react';
import Card from './Card';

interface ResultProps {
  results: {
    id: string;
    original_title: string;
  }[];
}

const Results: React.FC<ResultProps> = ({ results }: ResultProps) => {
  return (
    <div className='sm:grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 max-w-screen-xl mx-auto py-8'>
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
