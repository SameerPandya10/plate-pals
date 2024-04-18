import Sidebar from "./Sidebar.js";
import FormBillSplit from "./FormBillSplit.js";
import { useState } from "react";
import Logo from "./Logo.js";
import EmptyListMessage from "./EmptyListMessage.js";

const initialFriends = [];
// {
//   id: 118836,
//   name: "Sameer",
//   image: "https://i.pravatar.cc/48?u=118836",
//   balance: -7,
// },
// {
//   id: 933372,
//   name: "Vijay",
//   image: "https://i.pravatar.cc/48?u=933372",
//   balance: 20,
// },
// {
//   id: 499476,
//   name: "Ankush",
//   image: "https://i.pravatar.cc/48?u=499476",
//   balance: 0,
// },

export default function App() {
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [splitFormOpen, setSplitFormOpen] = useState(false);
  const [curData, setCurData] = useState({});

  return (
    <div className="container">
      <Logo />
      <div className="app">
        {friendsList.length > 0 ? (
          <>
            <Sidebar
              splitFormOpen={splitFormOpen}
              setSplitFormOpen={setSplitFormOpen}
              setCurData={setCurData}
              curData={curData}
              data={friendsList}
              setData={setFriendsList}
            />
            <FormBillSplit
              data={friendsList}
              setData={setFriendsList}
              curData={curData}
              splitFormOpen={splitFormOpen}
              setCurData={setCurData}
              setSplitFormOpen={setSplitFormOpen}
            />
          </>
        ) : (
          <EmptyListMessage setData={setFriendsList} />
        )}
      </div>
    </div>
  );
}
