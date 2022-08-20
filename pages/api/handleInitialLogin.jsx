import {createOrUpdateUser, } from "../../../functions/utils.js";

export default async function handler(req, res) {

    // get POST parameters
    let {
        email, name, skills, links, associations, additional, address, addType
    } = req.body;
    const [user, created] = await createOrUpdateUser(email, name, skills, links, associations, additional, address, addType);
    if (created) {
        // Send welcome email
    }
    else {
        // Send prexisting user email
    }

    // name,
    // email,
    // skills,
    // links,
    // associations,

    name = user.get("name");
    email = user.get("email");
    skills = user.get("skills");
    links = user.get("links");
    associations = user.get("associations");
    address = user.get("address");
    addType = user.get("addType");

    console.log(user, user.get());


    res.status(200).json({ name, skills, links, associations, email, created, address, addType });
}
