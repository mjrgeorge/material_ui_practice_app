import React from 'react'
import { useState } from 'react'

const MyComponent = () => {
    const [scale, setScale] = useState(1);

    const zoomIn = () => {
        setScale(scale * 2);
    }
    
    const zoomOut = () => {
        setScale(scale / 2);
    }
    return (
        <div >
            <div style={{ 'transform': `scale(${scale})` }}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quidem qui voluptatibus exercitationem, temporibus deleniti iusto, cupiditate quisquam eligendi officiis illo reiciendis soluta sit tenetur quia possimus ad blanditiis assumenda.
                </p>
            </div>
            <div >
                <button onClick={zoomIn}>Zoom in</button>
                <button onClick={zoomOut}>Zoom out</button>
            </div>
        </div>
    )
}

export default MyComponent
