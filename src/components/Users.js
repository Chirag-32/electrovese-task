import { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./UserList";
import Pagination from "./Pagination";

export default function Users() {
    const [numUsers, setNumUsers] = useState(50);
    const [gender, setGender] = useState("");
    const [users, setUsers] = useState([]);
    const [selectedUser,setSelecteduser] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get(
          `https://randomuser.me/api/?results=${numUsers}&gender=${gender}`
        );
        setUsers(res.data.results);
      };
      fetchData();
      setSelecteduser(null);
      setCurrentPage(1);
    }, [numUsers, gender]);
    return (
      <div>
      <div className="dataContainer">
        <label>Number of Results</label>
        <input
          type="text"
          value={numUsers}
          onChange={(e) => setNumUsers(e.target.value)}
        />
        <label>
          
          <input
            type="checkbox"
            value="male"
            checked={gender === "male"}
            onChange={(e) =>
              e.target.checked ? setGender("male") : setGender("")
            }
          />
          Male
        </label>
        <label>
          
          <input
            type="checkbox"
            value="female"
            checked={gender === "female"}
            onChange={(e) =>
              e.target.checked ? setGender("female") : setGender("")
            }
          />
          Female
        </label>
      </div>

        <div>
          <Pagination
          data={users}
          title="List of Names"
          dataLimit={10}
          numUsers={numUsers}
          selectedUser={selectedUser}
          setSelecteduser={setSelecteduser}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        </div>
        
      </div>
    );
  }