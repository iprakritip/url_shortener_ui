import React from 'react';

interface ButtonProps{
    label:string
}

const Button = ({label}:ButtonProps) => {
  return (
    <button className='group relative h-12 w-[7rem] overflow-hidden rounded-xl bg-blue-800 text-lg font-semibold text-white'>
      {label}
      <div className='absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30'></div>
    </button>
  );
};

export default Button;
