import axios from 'axios'
import { FC, Suspense } from 'react'
import { API_ENDPOINT } from '../../utils/api-connect'
import { Await, defer, useLoaderData } from 'react-router-dom'
import BlogMain from "../../images/blog/blog_main.webp"
import { useMediaQuery } from 'react-responsive'
import { NavHashLink } from 'react-router-hash-link';


export interface IBlog {
    _id: string
    title: string
    content: string
    smallImg: string
}

const BlogPage: FC = () => {
    const { blog } = useLoaderData() as { blog: Array<IBlog> }
    const desktop = useMediaQuery({ query: '(min-width: 990px)' })

    return (
        <main className='elementWidth blog'>
            <div className='blog__header'>
                <h1>
                    הבלוג
                    <br />
                    שלנו
                </h1>
                <p>
                    משתפים אתכם בתובנות והמידע שאספנו לאורך הזמן, בבלוג שלנו נחקור את הכלים השונים ונעזור לכם להבין כיצד ליישם את הידע בפרויקטים שלכם.
                </p>
                {desktop && (
                    <div className='blog__header--img'>
                        <img src={BlogMain} alt="איור עמוד בלוג" width={813} height={616} />
                    </div>
                )}
            </div>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Await resolve={blog}>
                    <section className='blog-section'>
                        {blog.map((bl) => (
                            <article key={bl._id} className='blog-section__article'>
                                <div>
                                    <img src={bl.smallImg} alt={`איור של פוסט ${bl.title}`}
                                        width={445} height={250}
                                    />
                                </div>
                                <h2>{bl.title}</h2>
                                <p>{bl.content}...</p>
                                <NavHashLink
                                    className='blog-section__article--link'
                                    to={`/blog/post/${bl._id}#`}>המשך קריאה {">"}</NavHashLink>
                            </article>
                        ))}
                    </section>
                </Await>
            </Suspense>
        </main>
    )
}

export default BlogPage

const hendleGetBlog = async () => {
    try {
        const { data: { continueWork, blog } } = await axios.get(`${API_ENDPOINT}/blog/get-blog`)
        if (continueWork) return blog
    } catch (error) {
        alert(error)
    }
}

export const blogLoader = async () => {
    return defer({
        blog: await hendleGetBlog()
    })
}