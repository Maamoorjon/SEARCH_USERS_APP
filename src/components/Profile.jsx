const Profile = ({ name, age, hobbies }) => {
  return (
    <div>
      <hr />
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>
        <div>Hobbies:</div>
        <ul>
          {hobbies.map((hobby) => {
            return <li>{hobby}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
