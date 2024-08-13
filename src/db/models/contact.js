
import { Schema, model } from "mongoose";

const contactsSchema = new Schema(
    {
    userId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    },
    isFavorite: {
        type: Boolean,
        default: false,
    },
    contactType: {
        type: String,
        enum: ['work', 'home', 'personal'],
        required: true,
        default: 'personal',
        },
    userId: {
        type: Schema.Types.ObjectId, ref: 'users',
        required: true,
        },
    photo: {
        type: String
    },
    },
    {
        timestamps: true,
    },
);


export const ContactsCollection = model('contacts', contactsSchema);
