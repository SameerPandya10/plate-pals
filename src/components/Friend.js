export default function Friend({
  data,
  splitFormOpen,
  setSplitFormOpen,
  setCurData,
  curData,
  list,
  setList,
}) {
  let p_text = `You and ${data.name} are even.`;
  let clr = "";

  if (data.balance < 0) {
    clr = "red";
    p_text = `You owe ${data.name} ${Math.abs(data.balance)}€`;
  } else if (data.balance > 0) {
    clr = "green";
    p_text = `${data.name} owes you ${data.balance}€`;
  }

  function handleDeleteFriend() {
    setList(list.filter((friend) => friend.id !== data.id));
    handleToggleSplitForm();
  }

  function handleToggleSplitForm(otherPerson = false) {
    if (!splitFormOpen) {
      setSplitFormOpen(true);
      const currentData = {
        ...data,
        totalBill: "",
        yourExp: "",
        payee: "you",
      };
      setCurData(currentData);
    } else if (otherPerson) {
      const currentData = {
        ...data,
        totalBill: "",
        yourExp: "",
        payee: "you",
      };
      setCurData(currentData);
    } else {
      setSplitFormOpen(false);
      setCurData({});
    }
  }
  return (
    <li className={splitFormOpen && curData.id === data.id ? "selected" : ""}>
      <img src={data.image} alt={data.name} />
      <h3>{data.name}</h3>
      <p className={clr}>{p_text}</p>
      <div className="btns">
        <button
          className="button"
          disabled={data.balance !== 0}
          onClick={handleDeleteFriend}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
        {splitFormOpen && curData.id === data.id ? (
          <button className="button" onClick={() => handleToggleSplitForm()}>
            Close
          </button>
        ) : (
          <button
            className="button"
            onClick={() => {
              if (splitFormOpen) handleToggleSplitForm(true);
              else handleToggleSplitForm();
            }}
          >
            Select
          </button>
        )}
      </div>
    </li>
  );
}
