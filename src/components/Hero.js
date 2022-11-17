export default function Hero(props) {
  return (
    <>
      <div className="hero--image-holder" id={props.alt}>
        <img className="hero-image" src={props.source} alt={props.id} />
        <div className="overlay">
          <h3>{props.titleQuote}</h3>
          <div>
            {props.source2 && (
              <img className="inner-pic" src={props.source2} alt={props.id} />
            )}
            <p>{props.subtitle}</p>
          </div>
        </div>
      </div>
    </>
  );
}
