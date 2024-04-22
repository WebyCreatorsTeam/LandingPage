import { defer } from "react-router-dom"
import { hendleGetProjects } from "./Projects"
import { hendleGetPFeedbacks } from "./Feedbacks"

export const webyLoader = async () => {
    return defer({
        projects: await hendleGetProjects(),
        feedbacks: await hendleGetPFeedbacks()
    })
}