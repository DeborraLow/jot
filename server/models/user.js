const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: { type: String, unique: true },
        password: String,
        email: { type: String, unique: true },
        entries: Array,
        friends: Array,
        avatar: { type: String, default: "/images/default-avatar.jpg" }
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;