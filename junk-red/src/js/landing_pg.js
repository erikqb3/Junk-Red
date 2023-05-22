import {img_landing, videoInRibbon} from '../assets/imgs/img_landing';
import { Provider } from 'react-redux';
// import { configureStore } from 'redux';

export function Landing(){
  console.log(img_landing[0]);
  return (
      <Figure></Figure>
  )
}

export function Figure(){
  return (
    <section>
      <figure id="landingFigure">
          <img src={img_landing[0]} alt=""></img>
        </figure>
      {/* <button>
        Change Character
      </button> */}
    </section>
  )
}

function myAction (){
  // const store = configureStore(reducer);
  

  
  const initialState = {
    img: img_landing[0]
  };
  
  function reducer(state = initialState, action) {
    switch(action.type) {
      case 'INCREMENT':
        return { img: state.img + action.img };
      default:
        return state;
    }
  }
  function changeCharacter(char){
    return {
      type: "CHANGE_CHARACTER",
      payload: char
    }
  }

  
}