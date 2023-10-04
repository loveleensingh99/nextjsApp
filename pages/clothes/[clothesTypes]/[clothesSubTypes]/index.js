import { useRouter } from 'next/router'
import React from 'react'

export default function index() {
    const { query } = useRouter()

    return (
        <div>Men/Women :{query.clothesTypes} selected Clothes SubType : {query.clothesSubTypes} selected</div>

    )
}
