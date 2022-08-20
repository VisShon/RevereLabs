import {getGig, } from "../../../../functions/gig.js";

export default async function handler(req, res) {
    let {
        gigId
    } = req.body;
    const result = await getGig(gigId);
    const {title, description, bounty, time, issuedBy, completed, category} = result;
    res.status(201).json({title, description, bounty, time, issuedBy, completed, category});
}
