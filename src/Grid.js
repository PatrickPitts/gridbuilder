import React, {useState} from 'react';
import GridSquare from "./GridSquare"
import GridSeparator from "./GridSeparator";
import GridVertex from "./GridVertex";
import GameToken from "./GameToken";

const Grid = (props) => {

    const squareSideLength = 75;
    const separatorWidth = 2;

    const gridUnitWidth = props.columns;
    const gridUnitHeight = props.rows;

    const gridPixelWidth = squareSideLength * (gridUnitWidth) + separatorWidth * (gridUnitWidth + 1);

    const gridSquareArray = [];

    for(let r = 0; r < gridUnitHeight; r++){
        let thisRow = [];
        for(let c = 0; c < gridPixelWidth;c++){
            thisRow.push(
                <GridSquare
                    key={`gridSquare_${r}_${c}`}
                    row={r}
                    column={c}
                    squareSideLength={squareSideLength}
                    squareColorSettingArray={props.squareColorSettingArray}
                    setSquareColorSettingArray={props.setSquareColorSettingArray}
                    colorOptions = {props.gridColorOptions}
                    clickColorOption={props.clickColorOption}
                    setHoverOverIndices={props.setHoverOverIndices}
                    // children={props.tokenMap[`${r},${c}`]}
                />
            )
        }
        gridSquareArray.push(thisRow);
    }

    const horizontalSeparatorRow = (row) => {
        const elements = [];
        let column = 0;
        for(column = 0; column < gridUnitWidth; column++){
            elements.push(<GridVertex key={`vertex_${row}_${column}`}
                                      row={row}
                                      column={column}
                                      separatorWidth={separatorWidth}/>);
            elements.push(<GridSeparator
                key={`hSeparator_${row}_${column}`}
                align={'h'}
                squareSideLength={squareSideLength}
                separatorWidth={separatorWidth}
            />)
        }
        elements.push(<GridVertex key={`vertex_${row}_${column+1}`}
                                  row={row}
                                  column={column}
                                  separatorWidth={separatorWidth}/>);
        return elements;
    }

    const squareRow = (row) => {
        let column = 0
        const elements = [];
        for(column = 0; column < gridUnitWidth; column++){
            elements.push(<GridSeparator
                key={`vSeparator_${row}_${column}`}
                align={'v'}
                squareSideLength={squareSideLength}
                separatorWidth={separatorWidth}
            />)
            // elements.push(<GridSquare
            //     key={`gridSquare_${row}_${column}`}
            //     row={row}
            //     column={column}
            //     squareSideLength={squareSideLength}
            //     squareColorSettingArray={props.squareColorSettingArray}
            //     setSquareColorSettingArray={props.setSquareColorSettingArray}
            //     colorOptions = {props.gridColorOptions}
            //     clickColorOption={props.clickColorOption}
            //     setHoverOverIndices={props.setHoverOverIndices}
            //     children={props.tokenMap[`${row},${column}`]}
            //         />)
            elements.push(gridSquareArray[row][column]);
        }
        elements.push(<GridSeparator
            key={`vSeparator_${row}_${column+1}`}
            align={'v'}
            squareSideLength={squareSideLength}
            separatorWidth={separatorWidth}
        />)

        return elements;
    }

    const gridBuild = () => {
        let elements = [];
        let row = 0;
        let column = 0;

        for(row = 0; row < gridUnitHeight; row++){
            elements.push(horizontalSeparatorRow(row));
            elements.push(squareRow(row));
        }
        elements.push(horizontalSeparatorRow(row + 1));
        return elements;

    };


    return (<div

        style={{
            display: "flex", flexWrap: "wrap", width: `${gridPixelWidth}px`}}>

        {gridBuild()}


    </div>);
};

export default Grid;
