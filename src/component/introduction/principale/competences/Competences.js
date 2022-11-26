import React from 'react'
import "./competences.css"
import { useEffect } from 'react'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Competences() {

    const { ref:refDivInvisible15,inView:visible15 } = useInView({threshold:1,triggerOnce:true});
    const titreCompetence =useRef();
    const titreCompetencePersonnelles = useRef();
    const travailEquipe =useRef();const communication =useRef();const creativite =useRef();const organisation =useRef();const rigueur =useRef();const fiabilite =useRef();const curiosite =useRef();const polyvalence =useRef();
    const refPetitTitreCompetence = useRef();
    const refContParaCss =useRef();const refContParaHtml =useRef();const refContParaJs =useRef();const refContParaMongo =useRef();const refContParaJava =useRef();
    const refParaCss =useRef();const refParaHtml =useRef();const refParaJs =useRef();const refParaMongo =useRef();const refParaJava =useRef();
    const refBordureCompetenceDev =useRef();

    useEffect(() => {
      if(visible15){
        titreCompetence.current.classList.add("ApparitionTitreCompentence");
        setTimeout(() => {
            titreCompetencePersonnelles.current.classList.add("ApparitionTitreCompentencePerso");
            refPetitTitreCompetence.current.classList.add("PetitTitreCompetenceVisible");
        }, 500);
        setTimeout(() => {
            travailEquipe.current.classList.add("CompentencePersoVisible");
            refContParaCss.current.classList.add("affichageContainerParaCompetence");
        }, 1000);
        setTimeout(() => {
            communication.current.classList.add("CompentencePersoVisible");
            refContParaHtml.current.classList.add("affichageContainerParaCompetence");
        }, 1150);
        setTimeout(() => {
            organisation.current.classList.add("CompentencePersoVisible");
            refContParaJs.current.classList.add("affichageContainerParaCompetence");
        }, 1300);
        setTimeout(() => {
            fiabilite.current.classList.add("CompentencePersoVisible");
            refContParaMongo.current.classList.add("affichageContainerParaCompetence");
        }, 1450);
        setTimeout(() => {
            polyvalence.current.classList.add("CompentencePersoVisible");
            refContParaJava.current.classList.add("affichageContainerParaCompetence");
        }, 1600);
        setTimeout(() => {
            curiosite.current.classList.add("CompentencePersoVisible");
            
        }, 1750);
        setTimeout(() => {
            rigueur.current.classList.add("CompentencePersoVisible");
            refParaCss.current.classList.add("AffichageCompetenceCss");
        }, 1900);
        setTimeout(() => {
            creativite.current.classList.add("CompentencePersoVisible");
            refParaHtml.current.classList.add("AffichageCompetenceHtml");
        }, 2050);
        
        setTimeout(() => {
            refParaJs.current.classList.add("AffichageCompetenceJs");
            
        }, 2200);
        setTimeout(() => {
            refParaMongo.current.classList.add("AffichageCompetenceMongo");
        }, 2350);
        setTimeout(() => {
            refParaJava.current.classList.add("AffichageCompetenceJava");
        }, 2500);
        setTimeout(() => {
            refBordureCompetenceDev.current.classList.add("bordureContainerAllCompetenceDev");
        }, 3000);
        
       
       
      }
    }, [visible15])
    

  return (
    <div className='blocCompetence'>
        <h1 ref={titreCompetence} className='titreCompetence invisible'>Mes compétences</h1>
        <div className='competence'>
            <div ref={refDivInvisible15} className='competencePersonnelles'>
                <p ref={titreCompetencePersonnelles} className='titreCompetencePerso invisible'> Compétences personnelles</p>
                <div className='DivCompetence1'>
                    <p ref={travailEquipe} className='invisible lol'>Travail d'équipe</p>
                    <p ref={communication} className='invisible'>Communication</p>
                </div>
                <div className='DivCompetence2'>
                    <p ref={creativite} className='invisible'>Créativité</p>
                    <p ref={organisation} className='invisible'>Organisation</p>
                </div>
                <div className='DivCompetence3'>
                    <p ref={rigueur} className='invisible'>Rigueur</p>
                    <p ref={fiabilite} className='invisible'>Fiabilité</p>
                </div>
                <div className='DivCompetence4'>
                    <p ref={curiosite} className='invisible'>Curiosité</p>
                    <p ref={polyvalence} className='invisible'>Polyvalence</p>
                </div>
            </div>

            <div  className='competenceDeveloppement'>
                <p ref={refPetitTitreCompetence} className='petitTitreCompetence invisible'> Compétences en développement</p>
                <div ref={refContParaCss} className='contParaCss invisible'>
                    <p ref={refParaCss} className='paraCss'><span>CSS/SCSS/Bootstrap</span></p>
                </div>
                <div ref={refContParaHtml} className='contParaHtml invisible'>
                    <p ref={refParaHtml} className='paraHtml'><span>html</span></p>
                </div>
                <div ref={refContParaJs}  className='contParaJs invisible'>
                    <p ref={refParaJs}  className='paraJs'><span>javaScript/React</span></p>
                </div>
                <div ref={refContParaMongo}  className='contParaMongo invisible'>
                     <p ref={refParaMongo}  className='paraMongo'><span>MongoDB</span></p>
                </div>
                <div ref={refContParaJava}  className='contParaJava invisible'>
                    <p ref={refParaJava}  className='paraJava'><span>java</span></p>
                </div>
                <p  className='cacherBordure'></p>
                <p ref={refBordureCompetenceDev} className='cacherBordure2'></p>
            </div>
        </div>
        <div className='divFond'></div>
    </div>
  )
}
