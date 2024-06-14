import React from 'react'
import videoFile from '../Assets/red-panda.webm'

const Introduction = () => {
  return (
    <div>
      <video width="100%" controls autoPlay muted loop>
        <source src={videoFile} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <p className='description'>
      Panda ruda, znana także jako panda czerwona, to uroczy 
      mieszkaniec południowo-zachodnich Chin. Charakteryzuje się 
      jasnoczerwonym futrem z białymi plamami na twarzy, uszach i ciele. 
      Jest gatunkiem zagrożonym wyginięciem głównie z powodu utraty 
      naturalnego środowiska oraz kłusownictwa. Pandki rude są 
      roślinożercami, żywiącymi się głównie bambusem, który stanowi 
      około 99% ich diety. Są symbolem ochrony przyrody i przypominają nam,
      jak ważne jest zachowanie różnorodności biologicznej naszej planety.
      </p>
    </div>
  )
}

export default Introduction