import {connectDB} from '@/utils/database.js';
import {ObjectId} from "mongodb";
import { Content } from 'next/font/google';

export default async function handler(요청, 응답) {
    if(요청.method == "POST") {
        console.log(요청.body);

        let 바꿀거 = {title : 요청.body.title, content : 요청.body.content};
        let db = (await connectDB).db('forum');
        let result = await db.collection('post').updateOne(
            {_id : new ObjectId(요청.body._id)},
            {$set : 바꿀거}
        );
        console.log(result)
        응답.redirect(302,'/list');
    }
}