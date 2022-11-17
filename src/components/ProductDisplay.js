import { useState } from "react";
export default function ProductDisplay(props) {
  let badgeText = "";
  let classText = "";

  let [imgSrc, setImgSrc] = useState(props.source);

  if (props.new) {
    badgeText = "NEW";
    classText = "badge new";
  } else if (props.order === "PRE-ORDER") {
    badgeText = props.order;
    classText = "badge order";
  } else {
    badgeText = props.status;
    classText = "badge status";
  }

  function changeSrc() {
    if (props.hasOwnProperty("source2")) {
      setImgSrc((prevSrc) =>
        prevSrc === props.source ? props.source2 : props.source
      );
    }
  }

  function oldSrc() {
    if (props.hasOwnProperty("source2")) {
      setImgSrc((prevSrc) =>
        prevSrc === props.source2 ? props.source : props.source2
      );
    }
  }

  return (
    <>
      <div className="display--preview">
        <div className="display--image-holder">
          <img
            src={imgSrc}
            alt={props.alt}
            onMouseOver={changeSrc}
            onMouseOut={oldSrc}
          />
          {badgeText && <div className={classText}>{badgeText}</div>}
        </div>
        <div className="display--product-descriptions">
          <section className="name-section">
            <h3 className="product-name">{props.name}</h3>
            <p className="product-description">{props.description}</p>
          </section>

          <section className="price-section">
            <p className="price">${props.price}</p>
          </section>
        </div>
      </div>
    </>
  );
}
