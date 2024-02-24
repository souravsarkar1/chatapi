import { Model, Schema } from "mongoose";

const messageSchema = new Schema({
    sender : {
        type : Schema.Types.ObjectId,
        ref : "user"
    },
    reciver : {
        type : Schema.Types.ObjectId,
        ref : "user"
    },
    message : {
        type : Schema.Types.String,
        ref : "chat"
    }
},{
    timestamps: true
});

const MessageModel = new Model("message", messageSchema);