import React, {useState, } from 'react';

const GameToken=(props)=> {

    const handleDragEnter=(e)=>{
        e.preventDefault();
        e.stopPropagation();
    }
    const handleDragLeave=(e)=>{
        e.preventDefault();
        e.stopPropagation();
    }
    const handleDragOver=(e)=>{
        e.preventDefault();
        e.stopPropagation();
    }
    const handleDrop=(e)=>{
        e.preventDefault();
        e.stopPropagation();
    }

    return(
        <div
        onDrop={event=>handleDrop(event)}
        onDragOver={event => handleDragOver(event)}
        id={props.id}
        >

            <img alt={'draugr token'}
                 src={process.env.PUBLIC_URL+"/draugr_token.png"}
                 width={25}
                draggable/>
        </div>
    )

}

export default GameToken;