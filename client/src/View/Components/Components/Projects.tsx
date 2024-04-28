import axios from 'axios';
import { FC, Suspense, useEffect } from 'react'
import { Await, useLoaderData, useLocation } from 'react-router-dom';
import { Element } from 'react-scroll';
import { API_ENDPOINT } from '../../../utils/api-connect';

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
    // const { state } = useLocation();
    // const { targetId } = state || {};

    // useEffect(() => {
    //     const el = document.getElementById(targetId);
    //     if (el) {
    //         el.scrollIntoView({ block: "start" });
    //     }
    // }, [targetId]);

    return (
        <Element name="pojects" id="pojects">
            <section className='projects'>
                <div className='elementWidth projects__main'>
                    <h2>פרויקטים</h2>
                    <Suspense>
                        <Await resolve={projects}>
                            <div className='projects__main--projects'>
                                {projects.map(pro => (
                                    <article key={pro._id} className='projects__main--project'>
                                        <img src={pro.urlImage} alt={pro.name} />
                                        <div className='projects__main--project__text'>
                                            <h3>{pro.name}</h3>
                                            <p>{pro.description}</p>
                                            <a href={pro.urlSite} target="_blank" rel="noreferrer">בקרו באתר</a>
                                        </div>
                                    </article>
                                ))}
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

