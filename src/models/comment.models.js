import mongoose, { Schema, plugin } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const commentScheam = new Schema(
    {
      content: {
        type: String,
        required: true
      },
      video: {
        type: Schema.Types.ObjectId,
        ref: "Video"
      }, 
      owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
      }  
    },
    {
        timestamps: true
    }
)

commentScheam.plugin(mongooseAggregatePaginate)

export const Comment = mongoose.model("Comment", commentScheam)