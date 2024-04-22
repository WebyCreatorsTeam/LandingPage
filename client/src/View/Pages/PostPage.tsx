import axios from 'axios'
import { Suspense } from 'react'
import { Await, defer, useLoaderData, Link } from 'react-router-dom'
import { API_ENDPOINT } from '../../utils/api-connect'
import { IBlog } from './BlogPage'

interface IPost extends IBlog {
    createdAt: string
    updatedAt: string
}

const PostPage = () => {
    const { post } = useLoaderData() as { post: IPost }

    return (
        <main className='pagePage'>
            <Link to="/blog">חזרה לבלוג</Link>
            <Suspense>
                <Await resolve={post}>
                    <article>
                        <h1>{post.title}</h1>
                        <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
                        <p>פורסם ב:{post.createdAt.slice(0, 10)}</p>
                        {post.createdAt !== post.updatedAt &&
                            <p>עודכן ב:{post.updatedAt.slice(0, 10)}</p>}
                    </article>
                </Await>
            </Suspense>
        </main>
    )
}

export default PostPage

const hendleGetPost = async (id: string) => {
    try {
        const { data: { continueWork, post } } = await axios.post(`${API_ENDPOINT}/blog/get-one-post`, { id })
        if (continueWork) return post
    } catch (error) {
        alert(error)
    }
}

export const postLoader = async ({ params }: any) => {
    const { id } = params

    return defer({
        post: await hendleGetPost(id)
    })
}