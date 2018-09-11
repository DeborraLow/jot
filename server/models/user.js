const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: { type: String, unique: true },
        password: String,
        first_name: String,
        last_name: String,
        email: { type: String, unique: true },
        avatar: { type: String, default: "/images/default-avatar.jpg" },
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