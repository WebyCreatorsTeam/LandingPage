import axios from 'axios'
import { FC, Suspense } from 'react'
import {
    Await, defer, redirect, useLoaderData
} from 'react-router-dom'
import { API_ENDPOINT } from '../../utils/api-connect'
import { IBlog } from './BlogPage'
import SEO from '../../SEO/SEO'

interface IPost extends IBlog {
    createdAt: string
    updatedAt: string
    coverImg: string
    tldr: string
}

const PostPage: FC = () => {
    const { post } = useLoaderData() as { post: IPost }
    return (
        <main className='elementWidth'>
            <SEO
                title={post.title}
                description={post.tldr}
                image={post.coverImg}
                imageAlt={`איור פוסט בנושא ${post.title}`}
                url={`https://weby.team/blog/post/${post._id}`}
                article={true}
                articlePublish={post.createdAt.slice(0, 10)}
                articleAuthor={"קטיה רוקוסוייב"}
            />
            <Suspense fallback={<h2>Loading...</h2>}>
                <Await resolve={post}>
                    <article className='post'>
                        <div>
                            <img src={post.coverImg} alt={`איור פוסט בנושא ${post.title}`} width={960} height={540} />
                        </div>
                        <div className='post__details'>
                            <p>
                                פורסם/עודכן: {" "}
                                {post.createdAt !== post.updatedAt ? post.updatedAt.slice(0, 10) : post.createdAt.slice(0, 10)}
                            </p>
                            {/* <p>
                                מאת: {" "}
                                קטיה רוקוסוייב
                            </p>
                            {/* <a href="">LinkedIn</a>
                            <a href="">העתק קישור</a> */}
                            {/* <a href="">Face</a> */}
                        </div>

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

const hendleGetPost = async (title: string) => {
    try {
        const { data: { continueWork, post } } = await axios.post(`${API_ENDPOINT}/blog/get-one-post`, { title })
        if (continueWork) return post
    } catch (error) {
        alert(error)
    }
}

export const postLoader = async ({ params }: any) => {
    const { title } = params

    const regex = /^[a-z0-9]+$/i
    const notIdPost = regex.test(title)
    console.log(notIdPost)

    if (notIdPost) {
        return redirect("/blog")
    }

    return defer({
        post: await hendleGetPost(title)
    })
}