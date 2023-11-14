import Image from 'next/image'
import data from '../test.json'
import Card from './components/Card'
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center m-5">
      <h3 className='mt-3 mb-5 text-black bg-white px-8 py-2 rounded-md'>รายชื่อ</h3>
      <div className='grid gap-x-5 gap-y-6 grid-cols-3'>
        {Object.keys(data).map((x,index) => {
          return <>
            <li key={x} className='list-none'><Card data={data[x]} id={x}/></li>
          </> 
        })}
      </div>
    </main>
  )
}