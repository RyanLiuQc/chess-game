import './Tile.css'

interface Props { // Props for property, you can use this when creating an element.
    number: number;
    // let image to be of type string OR (union) undefined since we don't want pieces on every single tile
    image: string | undefined;
}

export default function Tile( { number, image } : Props) { // the parameters are props
    if (number % 2 === 0){
        // the current folder of the relative path that the src looks at is the public folder
        // each image is inside a div with class tile and the image has the class img
        return (
            <div className='tile black-tile'>
                <img src={image} />
            </div> 
        )
    } else {
        return (
            <div className='tile white-tile'>
                <img src={image} />
            </div>
        )
    }

    
}