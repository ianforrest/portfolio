import React from 'react'
import { BsStarFill } from "@react-icons/all-files/bs/BsStarFill"


export const BookRating = (props) => {
    const n = []; // Or something else

    return (
        [...Array(n)].map((e, i) => <span><BsStarFill key={i} /></span>)
    )
    

}





