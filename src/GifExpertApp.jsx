import React from 'react'
import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Digimon' ])
    
    const onAdd = ( newValue ) => {
        if (categories.includes(newValue)) return
        setCategories( [newValue, ...categories] )
    }

    return (
        <>
        <h1>GifExpertApp</h1>
        <AddCategory 
        onNewValue={onAdd}
        />
        
            { categories.map(category =>
                <GifGrid key={category} category={category} />
            )}
        
        </>
    )
}
