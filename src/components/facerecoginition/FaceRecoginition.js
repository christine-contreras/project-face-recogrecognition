import React from 'react'
import './facerecoginition.css'
const FaceRecoginition = ({ imageUrl, box }) => {
  return (
    <div className='center ma'>
      <div className='mt3 relative'>
        {imageUrl && (
          <>
            <img
              src={imageUrl}
              alt=''
              width='500px'
              height='auto'
              id='inputimage'
            />
            <div
              className='bounding-box'
              style={{
                top: box.top,
                left: box.left,
                right: box.right,
                bottom: box.bottom,
              }}></div>
          </>
        )}
      </div>
    </div>
  )
}

export default FaceRecoginition
