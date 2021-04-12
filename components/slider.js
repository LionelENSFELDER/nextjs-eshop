export default function Slider(props){
  const slides = props.slides;
  const slidesItems = slides.map((slide)=>
    <li key={slide}>
      <img src={slide} alt="" uk-cover="true" className="uk-height-1-1"/>
      <div class="uk-position-center uk-text-center">
        <h1 uk-slider-parallax="x: 100,-100">Heading</h1>
        <p uk-slider-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
      </div>
    </li>
  );
  return(
    <div>
      <div className="uk-position-relative uk-visible-toggle uk-light uk-margin-xlarge-bottom" tabIndex="-1" uk-slideshow="animation: push; ratio: false; autoplay: true; autoplay-interval: 3000; sets: true">
        <ul className="uk-slideshow-items" uk-height-viewport="offset-bottom:0">
          {slidesItems}
        </ul>

        <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slideshow-item="previous"><i className="las la-chevron-left uk-text-large"></i></a>
        <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slideshow-item="next"><i className="las la-chevron-right uk-text-large"></i></a>
      </div>
    </div>
  )
}