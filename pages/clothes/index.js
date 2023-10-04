import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function index() {

    const router = useRouter()
    const handlemenButtonClick = () => {
        router.push(`/clothes/men`);
    };

    const handlewomenButtonClick = () => {
        router.push(`/clothes/women`);
    };
    return (
        <>
            <div className="my-8">
                <h2 className='text-3xl font-bold px-3 py-2'> Using Links</h2>
                <Link href="/clothes/men" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>men</Link>
                <br></br>
                <br></br>
                <Link href="/clothes/women" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>women</Link>

                <h2 className='text-3xl font-bold px-3 py-2'>Using Button Click</h2>

                <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={handlemenButtonClick}>men Button</button>
                <br></br>
                <br></br>
                <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={handlewomenButtonClick}>women Button</button>
            </div>
        </>
    );

}
