import { useState, useEffect } from "react";
import { UserCard } from "./UserCard/UserCard";
import { fetchUsers } from "./services/fetchUsers";
import { toast } from 'react-hot-toast';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetchUsers()
    .then((data) => {
        setIsLoading(false);
        setUsers(data);
      })
    .catch((error) => {
        console.log(error)
        toast.error('Something went wrong. We could not complete your request');
    })    
    .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {users.length > 0 && !isLoading && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <UserCard user={user}  />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;
