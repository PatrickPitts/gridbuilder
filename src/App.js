import logo from './logo.svg';
import React, {useState,} from 'react';
import './App.css';
import Grid from "./Grid";
import ColorOptionSelector from "./ColorOptionSelector"
import GameToken from "./GameToken";

function App() {

    // const[clickedColor, setClickedColor] = useState('blue');
    // const[clickedHoverColor, setClickedHoverColor] = useState('lightblue');
    const numRows = 40;
    const numColumns = 40;


    const [squareColorSettingArray, setSquareColorSettingArray] = useState(
        () => {
            const arr = [];
            for (let i = 0; i < numRows; i++) {
                let newRow = []
                for (let j = 0; j < numColumns; j++) {
                    newRow.push({isClicked: false, clickedColorSetting: "1"});
                }
                arr.push(newRow);
            }
            return arr;
        });
    const [clickColorOption, setClickColorOption] = useState("1");
    const [hoverOverIndices, setHoverOverIndices] = useState("0, 0");

    const gridColorOptions = {
        "0": {
            default: 'gray',
            hover: 'white',
        },
        "3": {
            default: 'blue',
            hover: 'lightblue',
        },
        "1": {
            default: 'red',
            hover: 'salmon',
        },
        "2": {
            default: 'seagreen',
            hover: 'palegreen',
        }
    }

    // const tokenMap = {
    //     "0,0":<GameToken id={"1"}/>,
    //     "5,5":<GameToken id={"2"}/>,
    //     "7,3":<GameToken id={"3"}/>,
    // }

    const tokenMap = {}

    return (
        <div style={{padding: '10px'}}>
            <Grid gridColorOptions={gridColorOptions}
                  rows={numRows}
                  columns={numColumns}
                  clickColorOption={clickColorOption}
                  squareColorSettingArray={squareColorSettingArray}
                  setSquareColorSettingArray={setSquareColorSettingArray}
                  setHoverOverIndices={setHoverOverIndices}
                  tokenMap={tokenMap}
            />
            <ColorOptionSelector gridColorOptions={gridColorOptions}
                                 setClickColorOption={setClickColorOption}/>
            {/*<GameToken/>*/}
            <div>{hoverOverIndices}</div>
        </div>
    );
}

export default App;
