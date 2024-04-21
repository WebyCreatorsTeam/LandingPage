import axios from 'axios';
import { FC, Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom';
import { Element } from 'react-scroll';
import { API_ENDPOINT } from '../../../utils/api-connect';

interface IProject {
    name: string
    description: string
    urlImage: string
    urlSite: string
    _id: string
}
const Projects: FC = () => {
    const { projects } = useLoaderData() as { projects: Array<IProject> }

    return (
        <Element name="pojects">
            <section className='projects'>
                <div className='projects__main'>
                    <h2>פרויקטים</h2>
                    <Suspense>
                        <Await resolve={projects}>
                            <div className='projects__main--projects'>
                                {projects.map(pro => (
                                    <div key={pro._id} className='projects__main--project'>
                                        <img src={pro.urlImage} alt={pro.name} />
                                        <div className='projects__main--project__text'>
                                            <h3>{pro.name}</h3>
                                            <p>{pro.description}</p>
                                            <a href={pro.urlSite} target="_blank" rel="noreferrer">בקרו באתר</a>
                                        </div>
                                    </div>
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
    const { data: { continueWork, projects } } = await axios.get(`${API_ENDPOINT}/projects/get-projects`)
    if (continueWork) return projects
}

