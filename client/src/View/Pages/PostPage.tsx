import axios from 'axios'
import { Suspense } from 'react'
import {
    Await, defer, useLoaderData
    // , Link
} from 'react-router-dom'
import { API_ENDPOINT } from '../../utils/api-connect'
import { IBlog } from './BlogPage'

interface IPost extends IBlog {
    createdAt: string
    updatedAt: string
    coverImg: string
    tldr: string

}

const PostPage = () => {
    const { post } = useLoaderData() as { post: IPost }
    // console.log(post)
    return (
        <main className='elementWidth'>
            {/* <Link to="/blog">חזרה לבלוג</Link> */}
            <Suspense fallback={<h2>Loading...</h2>}>
                <Await resolve={post}>
                    <article className='post'>
                        <img src={post.coverImg} alt={`איור פוסט בנושא ${post.title}`} width={960} height={540} />
                        <p>
                            פורסם/עודכן: {" "}
                            {post.createdAt !== post.updatedAt ? post.updatedAt.slice(0, 10) : post.createdAt.slice(0, 10)}
                        </p>
                  
                        <h1>{post.title}</h1>
                        <div className='post__tldr'>
                            <h2>TL;DR</h2>
                            <p>{post.tldr}</p>
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
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