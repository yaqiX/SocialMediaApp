import User from "../models/User";

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
};


/* UPDATE */
export default addRemoveFriend = async (req, res) => {
    try {
        const { id, friendId } = req.params;
        const user = await User.findById(id);
        const friend = await User.findById(friendId);

        if (user.friends.includes(friendId)) {
            user.friends = user.friends.filer((idOfFriends) => idOfFriends !== friendId);
            friend.friends = friend.friends.filer((idOfUser) => idOfUser !== id)
        } else {
            user.friends.push(friendId);
            friend.friends.push(id);
        }

        await user.save();
        await friend.save();

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

