//消息，用户消息列表,
import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
    messageId: { type: String, required: true },
    messageType: { type: String, required: true },
    content: { type: String, required: true }, // 消息信息对应的JSON
    time: { type: Number, required: true },
    groupId: { type: String, required: true },
    userId: { type: Number, required: true },
    renderTime: { type: Boolean, required: true }
});

export const UserMsgList = new mongoose.Schema({
    userId: { 
        type: Number, 
        required: true,
        unique: true,
        index: true
    },
    list: [MessageSchema]
});