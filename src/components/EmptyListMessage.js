import { useState } from "react";
import FormAddFriend from "./FormAddFriend";

function EmptyListMessage({ setData }) {
  const [friendName, setFriendName] = useState("");
  const [friendImage, setFriendImage] = useState("https://i.pravatar.cc/48");
  const [formIsOpen, setFormIsOpen] = useState(false);

  function handleToggleAddFriend() {
    setFormIsOpen((fio) => !fio);
    setFriendName("");
    setFriendImage("https://i.pravatar.cc/48");
  }
  function addFriend(friend) {
    setData((friends) => [...friends, friend]);
  }

  return (
    <div className="empty">
      <span>You have no friends yet. 😟</span>
      <span>Start adding friends to continue.</span>
      <span>Happy Splitting!</span>
      <span>
        <br />
      </span>
      {!formIsOpen ? (
        <button className="button" onClick={handleToggleAddFriend}>
          Add Friend
        </button>
      ) : (
        <>
          <FormAddFriend
            friendName={friendName}
            setFriendName={setFriendName}
            friendImage={friendImage}
            setFriendImage={setFriendImage}
            onAddFriend={addFriend}
          />
          <button className="button" onClick={handleToggleAddFriend}>
            Close
          </button>
        </>
      )}
    </div>
  );
}

export default EmptyListMessage;
