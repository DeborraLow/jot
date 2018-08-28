const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: { type: String, unique: true },
        password: String,
        firstName: String,
        lastName: String,
        penName: String,
        email: { type: String, unique: true },

        // avatarName: { type: String, default: "/images/default-avatar.jpg" },
        avatarPath: String,
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