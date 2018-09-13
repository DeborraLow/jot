const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const followerSchema = new Schema(
    {
        user1: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        user2: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        status: {enum :["pending","following","blocked"], type:String, default:"pending" },
        actionUser: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    }
)
const Follower = mongoose.model("Follower", followerSchema);

module.exports = Follower;