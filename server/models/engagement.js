const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const engagementSchema = new Schema(
    {
        entryId: {
            type: Schema.Types.ObjectId,
            ref: "Entry",
        },
        like: {
            total: Number,
            user: [{
                type: Schema.Types.ObjectId,
                ref: "User",
                when: Date
            }]
        },
        share: {
            total: Number,
            user: [{
                type: Schema.Types.ObjectId,
                ref: "User",
                when: Date
            }]
        }

    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    }

)

const Engagement = mongoose.model("Engagement", engagementSchema);

module.exports = Engagement;