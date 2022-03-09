import * as React from 'react'
import {imageArr} from './image-array'

export default class Gallery extends React.Component {

    render() {
        return (
            <div className='gallery-container'>
                {imageArr.map((source, index) => {
                    return (
                        <div key={index} className='gallery-images-div'>
                            <img src={require('../images/'+source)} alt='Gallery' className='gallery-images'/>
                        </div>
                    )
                })}
            </div>
        )
    }
}