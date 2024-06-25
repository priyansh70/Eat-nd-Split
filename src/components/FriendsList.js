import Friend from "./Friend";

export default function FriendList({ initialFriends }) {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
