import React, { Component } from 'react'
import './imagelink.css'

class ImageLinkForm extends Component {
    constructor() {
        super()
        this.state = {
            url: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleFetchFaceRecoginition(this.state.url)
    }
    render() {
        return (
            <div className="tc">
           <p className="f3">
               This Magic Brain will detect faces in your images. Give it a try.
            </p> 
            <div className="center form-container">
                <form className="pa4 br3 shadow-5 form center" onSubmit={this.handleSubmit}>
                    <input className="f4 pa2 w-80 center" type="text" name='url' onChange={this.handleInputChange}/>
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-black" type="submit">Detect</button>
                </form>
            </div>
        </div>
        )
    }
}

export default ImageLinkForm
