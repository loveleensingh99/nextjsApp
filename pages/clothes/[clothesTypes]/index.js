import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function index() {
    const { query } = useRouter()
    console.log("🚀 ~ file: index.js:6 ~ index ~ query:", query)
    return (
        <>
            {query.clothesTypes === "men" && (
                <>
                    <p className='text-3xl font-bold px-3 py-2'>men</p>
                    <Link href={`${query.clothesTypes}/shirt`} className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'>Men Shirt </Link>
                    <br></br>
                    <br></br>
                    <Link href={`${query.clothesTypes}/pant`} className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'>Men Pant</Link>
                </>
            )}

            {query.clothesTypes === "women" && (
                <>
                    <p className='text-3xl font-bold px-3 py-2'>women</p>
                    <Link href={`${query.clothesTypes}/top`} className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded'>Women top</Link>
                    <br></br>
                    <br></br>
                    <Link href={`${query.clothesTypes}/jeans`} className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded'>Women Jeans</Link>
                </>
            )}

        </>
    )
}
