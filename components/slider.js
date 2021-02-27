export default function Slider(props){
  const slides = props.slides;
  const slidesItems = slides.map((slide)=>
    <li key={slide}>
      <img src={slide} alt="" uk-cover="true" />
    </li>
  );
  return(
    <div>

      <div className="uk-position-relative uk-visible-toggle uk-light uk-margin-large-bottom" tabIndex="-1" uk-slideshow="ratio: false; autoplay: true; autoplay-interval: 4000">

        <ul className="uk-slideshow-items" uk-height-viewport="offset-top: true; offset-bottom: 30">
          {slidesItems}
        </ul>

        <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slideshow-item="previous"><i class="las la-chevron-left uk-text-large"></i></a>
        <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slideshow-item="next"><i class="las la-chevron-right uk-text-large"></i></a>

      </div>

    </div>
  )
}