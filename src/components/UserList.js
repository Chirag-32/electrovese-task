const UserList = ({ user }) => {
    return (
      <div className="user">
        <img src={user.picture.large} alt="user-pic"/>
        <h4>{user.name.first} {user.name.last} </h4>
        <p>{user.email}</p>
      </div>
    );
  };
  export default UserList;
  