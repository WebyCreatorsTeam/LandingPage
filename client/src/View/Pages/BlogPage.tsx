import axios from 'axios'
import React, { Suspense } from 'react'
import { API_ENDPOINT } from '../../utils/api-connect'
import { Await, Link, defer, useLoaderData } from 'react-router-dom'

export interface IBlog {
    _id: string
    title: string
    content: string
}

const BlogPage = () => {
    const { blog } = useLoaderData() as { blog: Array<IBlog> }

    return (
        <main className='blogPage'>
            <h1>בלוג</h1>
            <Suspense>
                <Await resolve={blog}>
                    <section>
                        {blog.map((bl, idx) => (
                            <article>
                                <h3>{bl.title}</h3>
                                <p>{bl.content}...</p>
                                <Link to={`/blog/post/${bl._id}`}>המשך קריאה...</Link>
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