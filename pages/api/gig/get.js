import {getGig, } from "../../../../functions/gig.js";

export default async function handler(req, res) {

    let gigId = req.query.gigId;
    const result = (await getGig(gigId))[0];
    console.log(result);
    const title = result.get("title");
    const description = result.get("description");
    const bounty = result.get("bounty");
    const time = result.get("time");
    const issuedBy = result.get("issuedBy");
    const completed = result.get("completed");
    const category = result.get("category");
    res.status(201).json({title, description, bounty, time, issuedBy, completed, category});
}
