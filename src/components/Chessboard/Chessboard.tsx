import Tile from "../Tile/Tile"; // imports the function Tile from the Tile.tsx file
import './Chessboard.css';

const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const verticalAxis = ['1','2','3','4','5','6','7','8'];

interface Piece {
    // create an instance of this interface with {prop1: value, prop2: value} like an object

    image: string;
    x: number;
    y: number 
}

const pieces: Piece[] = []; // similar to java, declaring the type of the elements in pieces\

// looping to render pieces
for (let p = 0; p<2; p++){
    const type = (p === 0) ? "b" : "w"; //if p = 0 then type = "b". otherwise, type = "w"
    const y_pos = (p === 0) ? 7 : 0; // at p = 0, we want to render the black pieces at the 7th row (highest row)
    const y = y_pos;
    pieces.push({image: `assets/images/rook_${type}.png`, x:0,y:y_pos}) // using back ticks
    pieces.push({image: `assets/images/rook_${type}.png`, x:7, y}) // you can simply put y if the value and the field/parameter have the same variable name
    pieces.push({image: `assets/images/knight_${type}.png`, x:1,y:y_pos})
    pieces.push({image: `assets/images/knight_${type}.png`, x:6,y:y_pos})
    pieces.push({image: `assets/images/bishop_${type}.png`, x:2,y:y_pos})
    pieces.push({image: `assets/images/bishop_${type}.png`, x:5,y:y_pos})
    pieces.push({image: `assets/images/king_${type}.png`, x:4,y:y_pos})
    pieces.push({image: `assets/images/queen_${type}.png`, x:3,y:y_pos})
}

for (let i = 0; i<8; i++) {
    pieces.push({image: 'assets/images/pawn_b.png', x:i,y:6})
    pieces.push({image: 'assets/images/pawn_w.png', x:i,y:1})
}



export default function Chessboard(){
    let board = [];
    for (let j=verticalAxis.length-1; j>=0; j--){ // render from h to a (j=7 to 0)
        for ( let i = 0; i<horizontalAxis.length; i++){ // render from 1 to 8 in standard chessboard axis (i=0 to 7)
            const number = j+i;
            let img_path = undefined; // undefined for declared but unassigned variable

            pieces.forEach(p => {
                if (p.x === i && p.y === j){
                    img_path = p.image
                }
            })

            board.push(<Tile image={img_path} number={number}/>) //the props image and number are create in Tile.tsx file and the way they are used are also there

          
        }
    }
    return <div id="chessboard">{board}</div>
}