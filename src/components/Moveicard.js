import React from 'react'

export const Moveicard = ({year,director,poster,title,duration,genre,des}) => {
    
    const inlineStyles = {
        backgroundImage: `url(${poster})`,
      };
  return (
    <div className='text-white w-1/2 h-80 m-auto rounded-lg bg-cover no-repeat mt-4' style={inlineStyles} >
        <div className= ' border-2 border-black h-full w-full flex  bg-black/70 '>
       <div className='w-full border-2 border-white'>
        <div className='w-full h-1/2 '>
            <img className='shadow-2xl m-auto 1/2 h-full border-2 border-white mt-3' src={poster}/>
            <h1 className='text-center font-bold text-red-200'>{title}</h1>
            <h2 className='text-center'>{year},{director}</h2>
            <h3 className='text-center text-red-600'>{duration} Min,Gener-{genre}</h3>
            <p className='text-center text-yellow-200 font-serif'>{des}</p>
        </div>
        
       </div>
       
    </div>
    </div>
    
  )
}
