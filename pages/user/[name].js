import { useRouter } from 'next/router';
import React from 'react'

export default function UserName() {
    const { query } = useRouter();
    return (
        <div className="">Welcome to {query.name}</div>
    )
}
