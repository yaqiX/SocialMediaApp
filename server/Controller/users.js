import User from "../models/User";


const friend = {
    firstName,
    lastName,
    email,
    password,
    picturePath,
    friends,
    location,
    occupation
}
/* READ */
export const getUser = async (req, res) =>{
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};


export const getUserFriends = async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        )

        const friendsList = friends.map(({_id, firstname, lastname, occupation, location, picturePath}) => {
            return {_id, firstname, lastname, occupation, location, picturePath}})
            
        res.status(200).json(friendsList);

        } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
