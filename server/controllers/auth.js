import user from "../models/user.js"

export const checkAuth = async (req, res) => {
    
    try{
    if (req.oidc.isAuthenticated()){
        const currentUser = req.oidc.user
        user.CountDocuments({_id: user.sub}, async function (err, count){
            if(count>0){
                console.log('yes')
            } else {
                const newUser = new user(currentUser)
                await newUser.save()
            }
        })
    }    
    } catch (error) {

    }
}