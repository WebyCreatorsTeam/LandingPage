import axios from 'axios'
import { FC, Suspense } from 'react'
import {
    Await, defer, useLoaderData
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

    return defer({
        post: await hendleGetPost(title)
    })
}

// /*
//  {/* <svg className="clippy">
//                             <defs>
//                                 <clipPath id="clip-squiggle"
//                                     clipPathUnits="userSpaceOnUse"
//                                 >
// {/* <path
//                                         fill-rule="evenodd"
//                                         clip-rule="evenodd"
//                                         d="M849.933 136.156C910.745 196.725 893.109 272.908 869.136 342.206C846.331 408.125 798.56 466.431 720.472 510.377C628.984 561.864 517.206 634.272 401.853 605.179C286.042 575.971 324.667 459.672 254.415 392.836C183.775 325.63 12.39 304.753 1.74012 224.518C-9.67705 138.502 87.7339 56.037 204.534 17.0345C313.942 -19.4998 442.416 14.9189 562.853 37.1481C670.776 57.0674 788.366 74.8349 849.933 136.156Z"
//                                         stroke="white" />
// {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M780.189 212.253C844.051 259.462 846.981 337.033 843.124 409.126C839.455 477.704 813.516 543.696 759.361 601.568C695.915 669.369 620.572 761.459 519.065 755.432C417.155 749.38 422.305 628.702 349.247 577.215C275.786 525.445 130.086 538.244 102.971 462.196C73.9019 380.668 135.131 281.565 222.247 221.024C303.85 164.314 417.364 172.99 521.481 171.354C614.78 169.887 715.535 164.457 780.189 212.253Z" fill="url(#paint0_linear_280_186)" /> */ }
// {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M849.933 136.156C910.745 196.725 893.109 272.908 869.136 342.206C846.331 408.125 798.56 466.431 720.472 510.377C628.984 561.864 517.206 634.272 401.853 605.179C286.042 575.971 324.667 459.672 254.415 392.836C183.775 325.63 12.39 304.753 1.74012 224.518C-9.67705 138.502 87.7339 56.037 204.534 17.0345C313.942 -19.4998 442.416 14.9189 562.853 37.1481C670.776 57.0674 788.366 74.8349 849.933 136.156Z" stroke="white" /> */ }

// {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M780.189 212.253C844.051 259.462 846.981 337.033 843.124 409.126C839.455 477.704 813.516 543.696 759.361 601.568C695.915 669.369 620.572 761.459 519.065 755.432C417.155 749.38 422.305 628.702 349.247 577.215C275.786 525.445 130.086 538.244 102.971 462.196C73.9019 380.668 135.131 281.565 222.247 221.024C303.85 164.314 417.364 172.99 521.481 171.354C614.78 169.887 715.535 164.457 780.189 212.253Z" stroke="white" /> */ }


//  </clipPath>
//                             </defs>
//                         </svg>
// {/* <div className='post-image'>
// {/* <div className="squiggle">
// {/* <figcaption>Modern Dating: Navigating the World of Online Matchmaking</figcaption>
// {/* </div>

// {/* <img src={post.coverImg} alt={`איור פוסט בנושא ${post.title}`} width={960} height={540} srcSet={Vector} />
// {/* </div>



// * /