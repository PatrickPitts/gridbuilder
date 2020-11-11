import React, {useState, useEffect} from 'react';

const GridSeparator = (props) => {

    const separatorWidth = `${props.separatorWidth}px`;
    const squareSideLength = `${props.squareSideLength}px`;
    
    const defaultStyle = {
        background:'black',
        height: props.align === 'v' ? squareSideLength : separatorWidth,
        width: props.align === 'v' ? separatorWidth : squareSideLength,
    };

    const [style, setStyle] = useState(defaultStyle)

    return(<div style={style}> </div>);

}

export default GridSeparator;