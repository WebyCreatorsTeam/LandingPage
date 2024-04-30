import axios from 'axios';
import { FC, Suspense, useState } from 'react'
import { Await, useLoaderData } from 'react-router-dom';
import { Element } from 'react-scroll';
import { API_ENDPOINT } from '../../../../utils/api-connect';
import Filter from './Filter';

interface IProject {
    name: string
    projectType: string
    description: string
    urlImage: string
    urlSite: string
    _id: string
}

const Projects: FC = () => {
    const { projects } = useLoaderData() as { projects: Array<IProject> }
    const [userChoose, setUserChoose] = useState<"" | "landing" | "corporate" | "commerce" | "complex">("")
    const filteredProjects = projects.length > 0 ? projects.filter(pr => userChoose === "" ? pr : pr.projectType === userChoose) : []

    return (
        <Element name="pojects" id="pojects">
            <section className='projects'>
                <div className='elementWidth projects__main'>
                    <h2>פרויקטים</h2>
                    <p>
                        תיק עבודות שלנו נבנה עם הזמן, כול הפרויקטים הם אתרים פעילים ואפשר לבקר בהם.
                        <br />
                        WEBY
                        מתמחים בבניית אתרים בשפות שונות תוכלו לראות את מגוון העבודות שלנו שנעשו מיום פתיחת הסטודיו.
                    </p>
                    <Suspense fallback={<h2>Loading...</h2>}>
                        <Await resolve={projects}>
                            <Filter setUserChoose={setUserChoose} userChoose={userChoose} />
                            <div className='projects__main--projects'>
                                {
                                    filteredProjects.length > 0 ?
                                        filteredProjects.map(pro => (
                                            <article key={pro._id} className='projects__main--project'>
                                                <img src={pro.urlImage} alt={pro.name} loading="lazy" />
                                                <div className='projects__main--project__text'>
                                                    <h3>{pro.name}</h3>
                                                    <p>{pro.description}</p>
                                                    <a href={pro.urlSite} target="_blank" rel="noreferrer">בקרו באתר</a>
                                                </div>
                                            </article>
                                        ))
                                        : <p className='no-projects'>יבוא בקרוב...</p>}
                            </div>
                        </Await>
                    </Suspense>
                </div>
            </section>
        </Element>
    )
}

export default Projects

export const hendleGetProjects = async () => {
    try {
        const { data: { continueWork, projects } } = await axios.get(`${API_ENDPOINT}/projects/get-projects`)
        if (continueWork) return projects
    } catch (error) {
        alert(error)
    }
}

