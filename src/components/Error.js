import React from 'react'
import { Link } from 'react-router-dom'
import "./Error.css"

function Error() {
var path = window.location.href;

    return (
        <div className='error'>
            <div className="con11"><svg width="64" height="50" viewBox="0 0 58 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 0C0.447715 0 0 0.447715 0 1V10.5C0 11.0523 0.447715 11.5 1 11.5H4.5H6H15L3 44H18L30 11.5H42.5H46.5C52.8513 11.5 58 6.35127 58 0H47.5H24H6H4.5H1ZM48 14H32L27.7 25.5H36.5C42.8513 25.5 48 20.3513 48 14ZM37 28C37 34.3513 31.8513 39.5 25.5 39.5H22.7L27 28H37Z" fill="url(#paint0_linear_59_148)"/>
<defs>
<linearGradient id="paint0_linear_59_148" x1="58" y1="-6.86537e-06" x2="4" y2="44" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF0000"/>
<stop offset="1" stop-color="#CE0000"/>
</linearGradient>
</defs>
</svg></div>
            <div className="con2">
                <div className="text">404</div>
                <div className="txt">|</div>
                <div className="text2">Sorry, the page of path <span>{path}</span> was no where to be found :( <br />Go back <Link to="/">home</Link>?</div>
            </div>
        </div>
    )
}

export default Error
