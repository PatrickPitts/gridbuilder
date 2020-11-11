import React, {useState} from 'react'

const GridVertex = (props) => {

    const dim = `${props.separatorWidth}px`

    const style = {
        width:dim,
        height:dim,
        background:"red"
    }

    return(<div style={style}> </div>);
}

export default GridVertex;