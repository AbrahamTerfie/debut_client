import React from 'react'
import './Loader.css'
export default function Loader() {
    return (
        <div>
            <div className="lds-roller  "
                style={{
                    // show at the center og the page 
                    position: 'absolute',
                    top: '50%',
                    left: '50%',

                }}
            >
                <div>
                </div><div></div><div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>

        </div>
    )
}
