import React, {useState, useRef,} from 'react';

const ColorOptionSelector = (props) => {

    const selectorElement = useRef(null)

    const handleChange = (e) => {

        props.setClickColorOption(e.target.value);

        // if (e.target.value === "0") {
        //     console.log(0);
        //     props.setGridColorOptions({
        //         ...props.gridColorOptions,
        //         clickedSquareDefaultColor: 'blue',
        //         clickedSquareHoverColor: 'lightblue'
        //     });
        //     // updateColorOptions.clickedSquareDefaultColor = 'blue';
        //     // updateColorOptions.clickedSquareHoverColor = 'lightblue';
        // } else if (e.target.value === "1") {
        //     console.log(1);
        //     props.setGridColorOptions({
        //         ...props.gridColorOptions,
        //         clickedSquareDefaultColor: 'red',
        //         clickedSquareHoverColor: 'salmon'
        //     });
        //     // updateColorOptions.clickedSquareDefaultColor = 'red';
        //     // updateColorOptions.clickedSquareHoverColor = 'salmon';}
        // } else if (e.target.value === "2") {
        //
        //     console.log(2);
        //     props.setGridColorOptions({
        //         ...props.gridColorOptions,
        //         clickedSquareDefaultColor: 'seagreen',
        //         clickedSquareHoverColor: 'palegreen'
        //     });
        //     // updateColorOptions.clickedSquareDefaultColor = 'seagreen';
        //     // updateColorOptions.clickedSquareHoverColor = 'palegreen';
        // }


        //props.setGridColorOptions({...props.gridColorOptions, ...updateColorOptions});
    }

    return (<div>
        <select
            //value={this.state.value}
            ref={selectorElement}
            onChange={handleChange}>
            <option value={3}>Blue</option>
            <option value={1}>Red</option>
            <option value={2}>Green</option>
        </select>
    </div>);
};

export default ColorOptionSelector;