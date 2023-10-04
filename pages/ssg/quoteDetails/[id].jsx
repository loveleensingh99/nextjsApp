import React from 'react'

export default function QuoteDetails({ data }) {
    console.log("🚀 ~ file: [id].jsx:4 ~ QuoteDetails ~ data:", data)
    return (
        <>
            <h2>{data?.id}</h2>
            <h1>{data?.quote}</h1>
            <h1>{data?.author}</h1>
        </>
    )
}
export const getStaticPaths = async () => {
    const fetchedData = await fetch("https://dummyjson.com/quotes")
    const data = await fetchedData.json()
    const allQuotesId = data.quotes.map(item => item.id)
    console.log("🚀 ~ file: index.js:26 ~ getStaticProps ~ allQuotesId:", allQuotesId)
    return {
        paths: allQuotesId.map((item) => ({ params: { id: "" + item } })),
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    console.log("🚀 ~ file: [id].jsx:20 ~ getStaticProps ~ id:", id)
    const fetchedData = await fetch(`https://dummyjson.com/quotes/${id}`)
    const data = await fetchedData.json();
    return {
        props: {
            data
        }
    }
}