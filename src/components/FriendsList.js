import Friend from "./Friend";

export default function FriendList({
  friends,
  selectedFriend,
  onSelectFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelectFriend={onSelectFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
