import axios from 'axios'
import React, { Suspense } from 'react'
import { API_ENDPOINT } from '../../utils/api-connect'
import { Await, Link, defer, useLoaderData } from 'react-router-dom'

export interface IBlog {
    _id: string
    title: string
    content: string
    smallImg: string
}

const BlogPage = () => {
    const { blog } = useLoaderData() as { blog: Array<IBlog> }

    return (
        <main className='elementWidth blog'>
            <h1>בלוג</h1>
            <p>
                משתפים אתכם בתובנות והמידע שאספנו לאורך השנים, בבלוג שלנו נחקור את הכלים החדשים ונעזור לכם להבין כיצד ליישם את הידע בפרויקטים שלכם.
            </p>
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
                                <Link
                                    className='blog-section__article--link'
                                    to={`/blog/post/${bl._id}`}>המשך קריאה {">"}</Link>
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