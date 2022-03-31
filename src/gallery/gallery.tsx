import * as React from "react";
import {imageArr} from "./image-array";
import {GalleryState} from "../webpage-types"

export default class Gallery extends React.Component {

    state: GalleryState = {
        source: "none"
    };

    imageZoom(source: string) {
        if (source === "none") {
            return null;
        } else {
            return (
                <div className='gallery-image-zoomed-div'>
                    <div className="gallery-images-close" onClick={() => this.zoomHandler("none")}>X</div>
                    <img src={require("../images/full-size/" + source)} alt="Gallery"
                         className="gallery-images-zoomed"/>
                </div>
            );
        }
    };

    zoomHandler(source: string) {
        this.setState({source: source});
    };

    render() {
        return (
            <div className="gallery-container" data-testid="gallery-container">
                {imageArr.map((source, index) => {
                    return (
                        <div key={index} className="gallery-images-div" data-testid="gallery-images-div">
                            <img src={require("../images/thumbnails/" + source)} alt="Gallery"
                                 className="gallery-images"
                                 loading="lazy" onClick={() => this.zoomHandler(source)}/>
                        </div>
                    );
                })}
                {this.imageZoom(this.state.source)}
            </div>
        );
    };
};