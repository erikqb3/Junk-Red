import imgArray from '../assets/imgs/img_index';

function LogoNav(){
  console.log(imgArray[0]);
  return (
    <a href="https://youtube.com">
      <figure>
        <img src={imgArray[0]} alt=""></img>
      </figure>
    </a>
  )
}

export default LogoNav;