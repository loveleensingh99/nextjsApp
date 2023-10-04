import Link from 'next/link'
import React from 'react'

export default function Index({ data }) {

    return (
        <div className="bg-white">
            <div className=' text-blue-800 font-bold'>Quote of the day</div>
            {data.quotes.map((item) => (
                <>
                    <Link href={`ssg/quoteDetails/${item.id}`} key={item.id} className='text-green-700 '>
                        <h1>{item.quote}</h1>
                    </Link>
                </>
            ))
            }
        </div >
    )
}


export const getStaticProps = async () => {
    const fetchedData = await fetch("https://dummyjson.com/quotes")
    const data = await fetchedData.json()
    return {
        props: {
            data
        }
    }
}
