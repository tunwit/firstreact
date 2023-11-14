import Image from 'next/image';
import React from 'react'
const Card = ({data,id}) => {
    console.log(data);
  return (
    <>  <a href={"/profile?id=" + id}>
            <div className='flex flex-col rounded-3xl overflow-hidden transition-transform hover:-translate-y-3'>
                <Image alt="avartar" className="object-cover h-56 w-60" src={data.profile}></Image>
                <div className='flex flex-col text-black bg-white h-32 items-center justify-center'>
                    <h3 className='m-2 font-bold text-3xl'>{data.name}</h3>
                    <p className='text-slate-700 mb-3'>อายุ {data.age}</p>
                </div>
            </div>
        </a>
    </>
  )
}

export default Card