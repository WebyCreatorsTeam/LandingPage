import { FC } from "react";
import WorksHead from "./WorksHead";
import { HowWorkList } from "./HowWorkList";

const HowWorks: FC = () => {
  return (
    <div>
      <WorksHead />
      <ol > {/* להשתמש פה בגריד */} {/* display: grid */}
        {HowWorkList.map(wrk => (
          <li className='howWork-grid-container'>
            <img className='howWork-grid-container__img' src={wrk.img} alt={wrk.title} />
            <h4 className='howWork-grid-container__img--h4'>{wrk.title}</h4>
            <p className='howWork-grid-container__img--h4--p'>{wrk.text}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default HowWorks;
