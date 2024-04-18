

export default function FormAddFriend({friendName, setFriendName, friendImage, setFriendImage, onAddFriend}){
    
    function handleAddFriend(e){
        
        e.preventDefault();

        if(!friendName || !friendImage) return

        const id = crypto.randomUUID();
        const newFriend = {
            id,
            name: friendName,
            image: `${friendImage}?u=${id}`,
            balance: 0,
        }

        onAddFriend(newFriend);

        
        
        setFriendName('');
        setFriendImage('https://i.pravatar.cc/48');
    }
    return (
        <form className="form-add-friend" onSubmit={handleAddFriend}>
            <label>👨🏼‍🤝‍👨🏼Friend Name</label>
            <input type="text" value={friendName} onChange={(e)=>setFriendName(e.target.value)}/>
            <label>📷 Image URL</label>
            <input type="text" value={friendImage} onChange={(e)=>setFriendImage(e.target.value)}/>
            <button className="button">Add</button>
        </form>
    )
}