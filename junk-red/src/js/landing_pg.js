import img_landing from '../assets/imgs/img_landing';

function Landing(){
  console.log(img_landing[0]);
  return (
      <figure id="landingFigure">
        <img src={img_landing[0]} alt=""></img>
      </figure>
  )
}

export default Landing;