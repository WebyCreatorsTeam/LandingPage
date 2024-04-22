import axios from 'axios'
import React from 'react'
import { defer, useLoaderData } from 'react-router-dom'
import { API_ENDPOINT } from '../../utils/api-connect'
import { IBlog } from './BlogPage'

const PostPage = () => {
    const { post } = useLoaderData() as { post: IBlog }
    console.log(post)
    return (
        <div>PostPage</div>
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