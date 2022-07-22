import { setCookies } from "cookies-next";
import  passport  from "passport";
import connect from "../../../config/database";
import '../../../config/passport';

export default async function(req, res, next) {
    await connect();
    passport.authenticate('google',(err,user,info)=>{
        if(err || !user) res.redirect('http://localhost:3000/login/?a=auth_fail')

        setCookies('token',info.token,{req,res});
        res.redirect('http://localhost:3000/login')
    })(req, res, next);
}