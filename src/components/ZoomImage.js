import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ZoomImage = (props) => {
    const { picture, handleZoom } = props;
    return (
        <div>
            <p onClick={ () => handleZoom() }>Cancel</p>
            <Zoom>
                <img
                alt="that wanaka tree"
                src={picture}
                width="500"
                />
            </Zoom>
        </div>
    )
}

export default ZoomImage;
