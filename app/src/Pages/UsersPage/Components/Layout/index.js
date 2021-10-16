import UserCard from "../UserCard";

const UsersPageLayout = ({userList}) => {
  const {user1, user2, user3} = userList;

  const {age:age1, name:name1, city:city1} = user1;
  const {age:age2, name:name2, city:city2} = user2;
  const {age:age3, name:name3, city:city3} = user3;

  return (
    <div>
      <UserCard name={name1} city={city1} age={age1}/>
      <UserCard name={name2} city={city2} age={age2}/>
      <UserCard name={name3} city={city3} age={age3}/>
    </div>
  );
};

export default UsersPageLayout;
