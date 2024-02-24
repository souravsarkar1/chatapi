import { Model, Schema } from "mongoose";

const chatSchema = new Schema({
    chatName : {type : String},
    isGroupChat : {type :Boolean},
    user : [{
        type : Schema.Types.ObjectId,
        ref : "user"
    }],
    lastMessage : {
        type : Schema.Types.ObjectId,
        ref : "message"
    },
    groupAdmin : [{
        type : Schema.Types.ObjectId,
        ref : "user"
    }]
},{
    timestamps: true
});

const ChatModel = new Model("chat", chatSchema);

export default ChatModel;