import './Tile.css'

interface Props { // Props for property, you can use this
    number: number
}

export default function Tile( { number } : Props) {
    if (number % 2 === 0){
        // the current folder of the relative path that the src looks at is the public folder
        // each image is inside a div with class tile and the image has the class img
        return <div className='tile black-tile'><img src="assets/images/pawn_b.png" /></div> 
    } else {
        return <div className='tile white-tile'></div>
    }

    
}