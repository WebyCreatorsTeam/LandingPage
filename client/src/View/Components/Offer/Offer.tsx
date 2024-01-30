import { FC } from "react";
import OfferImg from "../../../images/offer/offer-image.png";
import { OfferList } from "./OfferList";

const Offer: FC = () => {
    return (
        <div>
            <h1 className="offer-bold-text">מה אנחנו מציעים?</h1>
            <p className="offer-text">
                אנחנו מכירים את הדרך שתוביל לתוצאות מדויקות
            </p>
            <div className="offer-grid-container">
                <ol className="offer-grid-container__ol">
                    {OfferList.map((ofr, ind) => (
                        <li key={ind} className="offer-grid-container__ol--li">
                            <img
                                className="offer-grid-container__ol--li--img"
                                src={ofr.img}
                                alt="עיצוב"
                            />

                            <h4 className="offer-grid-container__ol--li--img--h4" >{ofr.head}</h4>
                            <p className="offer-grid-container__ol--li--img--h4--p">{ofr.text}</p>

                        </li>
                    ))}
                </ol>
                <img
                    className="offer-grid-container__img"
                    src={OfferImg}
                    alt="בן אדם יושב"
                />
            </div>
        </div>
    );
};

export default Offer;
