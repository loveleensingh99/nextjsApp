import React from 'react'

export default function index({ data }) {
    return (
        <>
            <div className="bg-white">

                <div className=' text-blue-800 font-bold'>Quote of the day</div>
                {data.quotes.map((item) => (
                    <h3 className='text-green-700 '>{item.quote}</h3>
                ))}
            </div>
        </>
    )
}


export const getServerSideProps = async () => {
    const fetchedData = await fetch(`https://dummyjson.com/quotes`);
    const data = await fetchedData.json();

    return {
        props: {
            data
        }
    }
}