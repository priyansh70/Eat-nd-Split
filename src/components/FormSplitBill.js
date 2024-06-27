import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, onSplit }) {
  const friendName = selectedFriend.name;
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplit(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form
      className="form-split-bill"
      onSubmit={handleSubmit}
    >
      <h2>Split a bill with {friendName}</h2>

      <label htmlFor="bill">💰 Bill value</label>
      <input
        type="text"
        id="bill"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor="expense">🧍‍♀️ Your expense</label>
      <input
        type="text"
        id="expense"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>👫 {friendName}'s expense</label>
      <input
        type="text"
        value={paidByFriend}
        disabled
      />

      <label htmlFor="whoPay">🤑 Who is paying the bill</label>
      <select
        id="whoPay"
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{friendName}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
