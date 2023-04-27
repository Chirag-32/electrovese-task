const UserList = ({ user }) => {
    return (
      <div className="user">
        <h4>{user.name.first} {user.name.last} </h4>
        <img src={user.picture.large} alt="user-pic"/>
        <p>{user.email}</p>
      </div>
    );
  };
  export default UserList;
  