import imgArray from '../assets/imgs/img_index';
import { helperFunctions } from './helperFunctions';

const pageList = ["characterDesign","video","about"]
let pathAdjuster = helperFunctions.getPathAdjuster(pageList);
console.log(pathAdjuster);

export function LogoNav(){
  console.log(imgArray[0]);
  return (
    <a href={pathAdjuster[0]} id="logoNav">
      <figure>
        <img src={imgArray[0]} alt=""></img>
      </figure>
    </a>
  )
}

export function Nav(){
  const pageList = ["characterDesign","video","about"]
  const options = pageList.map((opt, index) => <li key={index} class="button_A"><a href={pathAdjuster[1]+opt+".html"}>{opt}</a></li>);
  const ul = <ul>{options}</ul>
  return (ul);
}
