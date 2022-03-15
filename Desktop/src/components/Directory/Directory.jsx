import React, { Component } from 'react';

import { sectionsData } from '../../Data/DirectoryData'
import MenuItem from '../MenuItem/MenuItem'
import './Directory.css'
export default class Directory extends Component {
    constructor() {
        super();
        this.state = { sectionsData }
    }

    render() {
        return (

            <div className="directory-menu">
                {this.state.sectionsData.map(({ id, title, imageUrl, size }) => (
                    <MenuItem key={id}
                        title={title}
                        imageUrl={imageUrl}
                        size={size}

                    />
                ))}

            </div>

        );
    }
}

