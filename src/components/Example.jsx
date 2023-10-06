import { useState } from "react";
import Profile from "./Profile";

const Example = () => {
  const [filterVal, setFilterVal] = useState("");

  const users = [
    { name: "Gulchehra", age: 41, hobbies: ["cooking", "music"] },
    { name: "Kumie", age: 81, hobbies: ["swimminng", "music"] },
    { name: "Ravshan", age: 44, hobbies: ["teaching", "music"] }
  ];

  return (
    <>
      <h2>SEARCH USERS</h2>
      <input
        type="text"
        value={filterVal}
        placeholder="Enter user's name here ..."
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {users
          .filter((user) => {
            const isMatch = user.name.indexOf(filterVal) !== -1;
            return isMatch;
          })
          .map((user) => {
            return (
              <li>
                <Profile {...user} />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Example;
