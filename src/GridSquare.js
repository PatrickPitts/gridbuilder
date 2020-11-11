import React, {useState, useEffect} from 'react';

const GridSquare = (props) => {

    const squareSideLength = `${props.squareSideLength}px`;

    const [clickedColorSetting, setClickedColorSetting] = useState(props.squareColorSettingArray[props.row][props.column].clickedColorSetting)
    const [isClicked, setIsClicked] = useState(props.squareColorSettingArray[props.row][props.column].isClicked);

    const [defaultSquareColor, setDefaultSquareColor] =
        useState(isClicked
            ? props.colorOptions[clickedColorSetting].default
            : props.colorOptions["0"].default);
    const [hoverColor, setHoverColor] =
        useState(isClicked
            ? props.colorOptions[clickedColorSetting].hover
            : props.colorOptions["0"].hover);
    const [squareColor, setSquareColor] = useState(defaultSquareColor);

    useEffect(() => {
        if (isClicked) {
            setDefaultSquareColor(props.colorOptions[clickedColorSetting].default);
            setHoverColor(props.colorOptions[clickedColorSetting].hover);
        } else {
            setDefaultSquareColor(props.colorOptions["0"].default);
            setHoverColor(props.colorOptions["0"].hover);

        }

    }, [isClicked,])

    useEffect(() =>{
        setClickedColorSetting(props.clickColorOption);
    }, [props.clickColorOption])

    const handleDragOver=(e)=>{
        e.preventDefault();
        e.stopPropagation();
    }

    return (
        <div style={
            {
                width: squareSideLength,
                height: squareSideLength,
                background: `${squareColor}`,
            }
        }
             onMouseEnter={() => {
                 setSquareColor(hoverColor);
                 props.setHoverOverIndices(`${props.row}, ${props.column}`);
             }}
             onMouseLeave={() => {
                 setSquareColor(defaultSquareColor);
             }}
             onMouseDownCapture={() => {
                 setIsClicked(!isClicked);
             }}
             onDragOver={e=>handleDragOver(e)}

        >{props.children}</div>
    )

};

export default GridSquare;

