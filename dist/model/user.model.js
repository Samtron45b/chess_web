"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const User = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    password: {
        type: String,
        minlength: 8,
    },
    phone: {
        type: String,
        required: false,
        length: 11
    },
    address: {
        type: String,
        required: false,
        minlength: 5,
        maxlength: 50
    },
    avatar: {
        type: String,
        required: false,
        minlength: 0
    },
    email: {
        type: String,
        require: true,
        unique: true,
        required: true,
        minlength: 0
    },
    isOnline: {
        //1 for online 2 for ofline
        type: Boolean
    },
}, { timestamps: true });
const model = mongoose_1.default.model('User', User);
exports.default = model;
