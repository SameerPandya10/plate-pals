export default function FormBillSplit({
  curData,
  setCurData,
  splitFormOpen,
  setSplitFormOpen,
  data,
  setData,
}) {
  function handleInputChange(e) {
    const { name, value } = e.target;
    setCurData({
      ...curData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const freindExp = +curData.totalBill - +curData.yourExp;
    const newBalance =
      curData.payee === "you"
        ? curData.balance + freindExp
        : curData.balance - +curData.yourExp;
    setData((friends) =>
      friends.map((friend) => {
        if (friend.id === curData.id) friend.balance = newBalance;
        return friend;
      })
    );
    setCurData({});
    setSplitFormOpen(false);
  }

  if (!splitFormOpen)
    return (
      <div className="splitting-message">
        <span>Select a friend</span>
        <span>to start</span>
        <span>splitting bill</span>
      </div>
    );

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>SPLIT BILL WITH {curData.name.toUpperCase()}</h2>
      <label>💰Bill Value</label>
      <input
        type="number"
        name="totalBill"
        value={curData.totalBill}
        onChange={handleInputChange}
      />
      <label>🧍‍♂️ Your Expense</label>
      <input
        type="number"
        name="yourExp"
        value={curData.yourExp}
        onChange={handleInputChange}
      />
      <label>👬 Friend's Expense</label>
      <input
        type="number"
        name="friendExp"
        value={!curData.totalBill ? "" : +curData.totalBill - +curData.yourExp}
        disabled
      />
      <label>🤑Who is paying the bill ?</label>
      <select value={curData.payee} name="payee" onChange={handleInputChange}>
        <option value="you">You</option>
        <option value="friend">{curData.name}</option>
      </select>
      <button className="button">Split Bill</button>
    </form>
  );
}
