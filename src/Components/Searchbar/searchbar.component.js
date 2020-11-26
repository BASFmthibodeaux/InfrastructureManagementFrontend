import React from 'react'
import './searchbar.styles.css'
export const Searchbar = ({ placeholder, handleChange}) => {
    return (
        <>
            <input
                className='search'
                type='search'
                placeholder='Search...'
                onChange={ handleChange }a   
            />
        
        </>
    )   
}
