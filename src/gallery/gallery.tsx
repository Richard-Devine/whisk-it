import * as React from 'react'
import {imageArr} from './image-array'

export default function Gallery() {

    return (
        <div className='gallery-container' data-testid='gallery-container'>
            {imageArr.map((source, index) => {
                return (
                    <div key={index} className='gallery-images-div' data-testid='gallery-images-div'>
                        <img src={require('../images/thumbnails/' + source)} alt='Gallery' className='gallery-images' loading='lazy'/>
                    </div>
                )
            })}
        </div>
    )
}