import React from 'react'
import './containerPageProjetCssJs.css'
import { Fragment } from 'react'
import ReactPlayer from 'react-player'
import video from '../../../../video/test.mp4'
import { useState } from 'react'
import { useRef } from 'react'


export default function ContainerPageProjetCssJs() {
const [titreProjet, settitreProjet] = useState("projet 1")

  return (
    <Fragment>
      <div  className='titreParaPageProjet'>
        <span >Mes projets css-javascript</span>
     </div>

    <div className='englobeAllContainerSpeachProjet'>
      <div className='containerSpeachProjet'>
          <div className='divVideoProjet'>
              BONJOUR
          </div>
          <div className='speachProjet'>
            <h1>Animation css boutton</h1>
            <p>voici mes lalalal voici mes lalalal voici mes lalalal voici mes lalalal voici mes lalalal voici mes lalalal voici mes lalalal voici mes lalalal</p>
            <button>vidéo</button>
          </div>
         
      </div>
      <div className='containerSpeachProjet'>
          
          <div className='speachProjet'>
            <h1>Animation css boutton</h1>
            <p>voici mes lalalal voici mes lalalal voici mes lalalal voici mes lalalal voici mes lalalal voici mes lalalal voici mes lalalal voici mes lalalal</p>
            <button>vidéo</button>
          </div>
         
      </div>
      <div className='containerSpeachProjet'>
          
          <div className='speachProjet'>
            <h1>Animation css boutton</h1>
            <p>voici mes lalalal voici mes lalalal voici mes lalalal voici mes lalalal voici mes lalalal voici mes lalalal voici mes lalalal voici mes lalalal</p>
            <button>vidéo</button>
          </div>
         
      </div>
    </div>
    </Fragment>
)
}
