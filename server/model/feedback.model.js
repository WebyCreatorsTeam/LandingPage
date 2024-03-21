const { Schema, model } = require('mongoose')

const FeedbackSchema = new Schema({
    customerName: {
        type: String,
        require
    },
    webSiteName: {
        type: String,
        require
    },
    customerFeedback: {
        type: String,
        require
    },
    projectId: {
        type: Schema.Types.ObjectId,
        ref: "Projects"
    },
})

exports.Feedback = model("Feedback", FeedbackSchema)