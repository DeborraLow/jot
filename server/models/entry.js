'use strict';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const entrySchema = new Schema(
    {
        title: { type: String, default: "New Entry" },
        summary: String,
        entry_text: String,
        publish_date: Date,
        isPublic: { type: Boolean, default: false },
        permitted_followers: {
            type: Array,
            default: []
        },
        emojis: {
            type: Array,
            default: [],
            maxlength: 5,
        },
        comments: {
            type: Array,
            default: []
        },
        image: {
            type: String, default: ''
        },
        // user: {
        //     type: Schema.Types.ObjectId,
        //     ref: "User",
        //     required: true
        // },
        likes: Array

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