'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import Card from '../components/Card'

const Page = () => {
    const searchParams = useSearchParams()
    const search = searchParams.get('id')
    const data = require("../data/test.json");
    return (
    <div className="flex flex-col min-h-screen items-center justify-center">
        <a href='/' className='mt-3 mb-6 text-black bg-white px-8 py-2 rounded-md transition-colors hover:bg-slate-300 '>กลับหน้าหลัก</a>
        <Card data={data[search]} id={search}/>
    </div>
  )
}

export default Page