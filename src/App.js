import React, { Component } from 'react'
import Particles from 'react-particles-js'
import Navigation from './components/navigation/Navigation'
import Logo from './components/logo/Logo'
import SignIn from './components/signin/SignIn'
import Register from './components/register/Register'
import ImageLinkForm from './components/imagelinkform/ImageLinkForm'
import Rank from './components/rank/Rank'
import FaceRecoginition from './components/facerecoginition/FaceRecoginition'
import Clarifai from 'clarifai'

const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_API_KEY
 });


const particleParams = {
  "particles": {
      "number": {
          "value": 50,
          "density": {
            "enable": true,
            "value_area": 800
          }
      },
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }
      }
  }
}



class App extends Component {
  state = {
    imageUrl: '',
    box: {},
    route: 'sign-in'

  }

  handleFetchFaceRecoginition = (imageUrl) => {

    this.setState({
      imageUrl
    })

  app.models.predict(Clarifai.FACE_DETECT_MODEL, imageUrl)
  .then(data => {
    this.setFaceBoxLocation(this.calculateFaceLocation(data))
  })
  .catch(error => console.log(error));
  }


  calculateFaceLocation = (data) => {
    const box = data.outputs[0].data.regions[0].region_info.bounding_box
    const img = document.getElementById('inputimage')
    const width = Number(img.width)
    const height = Number(img.height)
    
    
    return {
      left: box.left_col * width,
      top: box.top_row * height,
      right: width - (box.right_col * width),
      bottom: height - (box.bottom_row * height)

    }
  }

  setFaceBoxLocation = (box) => {
    this.setState({box})
  }

  onRouteChange = (route) => {
    this.setState({
      route: route
    })
  }


  render() {
    return (
      <div className="App">
      <Particles params={particleParams} className="particles"/>
      
      
      
      {
        this.state.route === 'home' ?
        <>
        <Navigation onRouteChange={this.onRouteChange}/>
        <Logo />
        <Rank />
        <ImageLinkForm handleFetchFaceRecoginition={this.handleFetchFaceRecoginition}/>
        <FaceRecoginition imageUrl={this.state.imageUrl} box={this.state.box}/>
        </>
        
        :
        (
          this.state.route === 'sign-in' ?
          <SignIn onRouteChange={this.onRouteChange}/>
          :
          <Register onRouteChange={this.onRouteChange}/>
        )
        

      }
      
      
    </div>
    )
  }
}

export default App