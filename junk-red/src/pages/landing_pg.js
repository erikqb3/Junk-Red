import {img_landing, videoInRibbon} from '../assets/imgs/img_landing';
import { Provider } from 'react-redux';
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';

// import { configureStore } from 'redux';

export function Landing(){
  // console.log(img_landing[0]);
  return (
      <FigureSection></FigureSection>
  )
}

// export function Figure(){
//   componentDidMount(){
//     stuff
//   }
//   render(){
    
//   };
// }

class FigureSection extends React.Component{
  constructor(props){
    super(props);
    this.state = {figure: [img_landing[0],img_landing[1]]}
  }
 componentDidMount(){
  let counterA = 1;
  let counterB = 2;
  setInterval(()=>{
    this.setState({figure: [img_landing[counterA],img_landing[counterB]]});
    counterA++;
    counterB++;
    if (counterA == 6){
      counterA = 0;
    }
    if (counterB == 6){
      counterB = 0;
    }



    // this.toggleClass(document.getElementById('imgA'))
    // this.toggleClass(document.getElementById('imgB'))


    // let  newImg = <img src={this.state.figure[counterA]} id="imgB" className="fadeIn" alt=""></img>


  },5000)
 }
 componentDidUpdate(){


  // document.getElementById("landingFigure")
  // this.toggleClass(document.getElementById('imgA'));
  // this.toggleClass(document.getElementById('imgB'));
 }
 toggleClass(img){
  img.classList.toggle('fadeIn');
  img.classList.toggle('fadeOut');
  return img;
 }
 render(){
  return (
    <section>
      <figure id="landingFigure" ref="myLandingFigure">
          <img src={this.state.figure[1]} id="imgB" className="fadeIn" alt=""></img>
          <img src={this.state.figure[0]} id="imgA" className="fadeOut" alt=""></img>
        </figure>
      {/* <button>
        Change Character
      </button> */}
    </section>
  );
 } 
}



// function myAction (){
//   // const store = configureStore(reducer);
  

  
//   const initialState = {
//     img: img_landing[0]
//   };
  
//   function reducer(state = initialState, action) {
//     switch(action.type) {
//       case 'INCREMENT':
//         return { img: state.img + action.img };
//       default:
//         return state;
//     }
//   }
//   function changeCharacter(char){
//     return {
//       type: "CHANGE_CHARACTER",
//       payload: char
//     }
//   }

  
// }