import { useState } from "react";
import Friend from "./Friend.js";
import FormAddFriend from "./FormAddFriend.js";

export default function Sidebar({
  splitFormOpen,
  setSplitFormOpen,
  setCurData,
  curData,
  data,
  setData,
}) {
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
    <div className="sidebar">
      <ul>
        {data.map((friend) => (
          <Friend
            data={friend}
            key={friend.id}
            splitFormOpen={splitFormOpen}
            setSplitFormOpen={setSplitFormOpen}
            setCurData={setCurData}
            curData={curData}
            list={data}
            setList={setData}
          />
        ))}
      </ul>
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
