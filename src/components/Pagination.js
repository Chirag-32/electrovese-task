import { useState, useEffect } from "react";
import UserList from "./UserList";

const Pagination = ({
  data,
  title,
  dataLimit,
  numUsers,
  selectedUser,
  setSelecteduser,
  currentPage,
  setCurrentPage,
}) => {
  const pages = Math.ceil(data.length / dataLimit);
  const [userData, setUserData] = useState([]);
  console.log(numUsers);
  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
    setSelecteduser(null);
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
    setSelecteduser(null);
  };

  const handleShowUser = (user) => {
    setSelecteduser(user);
  };
  useEffect(() => {
    console.log("wor");
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    setUserData(data.slice(startIndex, endIndex));
  }, [data, currentPage]);

  return (
    <div>
      <h1>{title}</h1>
      <div className='dataContainer'>
        <ol>
          {userData.map((user, idx) => (
            <>
            <div
              className='user-list'
              key={idx}
              onClick={() => handleShowUser(user)}
            >
              <li>
                {user.name.first} {user.name.last}
              </li>
            </div>
            </>
          ))}
        </ol>
      </div>
      {data.length > 10 && (
        <div className='pagination'>
          <button
            onClick={goToPreviousPage}
            className={`prev ${currentPage === 1 ? "disabled" : ""}`}
          >
            prev
          </button>

          <button
            onClick={goToNextPage}
            className={`next ${currentPage === pages ? "disabled" : ""}`}
          >
            next
          </button>
        </div>
      )}
      {selectedUser && <UserList user={selectedUser} />}
    </div>
  );
};

export default Pagination;
