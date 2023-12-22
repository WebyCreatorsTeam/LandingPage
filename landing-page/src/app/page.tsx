// import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <>
            <h1>Hello</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                quas consequuntur ab, ipsa voluptate aliquam ipsum omnis maxime,
                vel quae sequi voluptatum eum, nihil expedita eveniet.
                Consequuntur omnis quidem reiciendis.
                <p>{process.env.MONGO_DB}</p>

                <p>{process.env.MONGO_DB11}</p>
            </p>
        </>
    );

    // <main className={styles.main}>hi</main>;
}
