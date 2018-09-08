'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema(
    {
        title: { type: String, default: `New Entry` },
        summary: String,
        entry_text: String,
        publish_date: Date,
        isPublic: { type: Boolean, default: false },
        permitted_followers: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
        emojis: [{
            type: Schema.Types.ObjectId,
            ref: 'Emoji'
        }], //Check if max number of array items can be done in mongoose schema
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        engagement: { type: Schema.Types.ObjectId, ref: 'Engagement' },
        status: {
            type: String,
            enum: ["draft","published"],
            default: "draft"
        }
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    }
);

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;