import { FC } from "react";
import WorksHead from "./WorksHead";
import { HowWorkList } from "./HowWorkList";

const HowWorks: FC = () => {
  return (
    <>
      <WorksHead />
      <div className="howWork-grid-container-mobile">
        <ol className='howWork-grid-container'>

          {HowWorkList.map((wrk, ind) => (
            <li key={ind}>
              <img className='howWork-grid-container__img' src={wrk.img} alt={wrk.title} />
              <h4 className='howWork-grid-container__img--h4'>{wrk.title}</h4>
              <p className='howWork-grid-container__img--h4--p'>{wrk.text}</p>
            </li>
          ))}

        </ol>
      </div>
    </>
  )
}

export default HowWorks;
