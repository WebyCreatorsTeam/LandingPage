import React, { FC } from 'react'

interface IFilter {
    userChoose: "" | "landing" | "corporate" | "commerce" | "complex"
    setUserChoose: Function
}
const Filter: FC<IFilter> = ({ setUserChoose, userChoose }) => {
    return (
        <div className='filter'>
            <div className='filter__options'>
                <p
                    onClick={() => setUserChoose("")}
                    className={userChoose === "" ? "active" : ""}
                >הכל</p>
                <div>|</div>
                <p
                    onClick={() => setUserChoose("landing")}
                    className={userChoose === "landing" ? "active" : ""}
                >דפי נחיתה</p>
                <div>|</div>
                <p
                    onClick={() => setUserChoose("corporate")}
                    className={userChoose === "corporate" ? "active" : ""}
                >אתרי תדמית</p>
                <div>|</div>
                <p
                    onClick={() => setUserChoose("commerce")}
                    className={userChoose === "commerce" ? "active" : ""}
                >חנויות וירטואליות</p>
            </div>
        </div>
    )
}

export default Filter