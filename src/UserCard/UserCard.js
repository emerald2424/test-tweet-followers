import { useEffect, useState } from "react";
import css from "./UserCard.module.css";
import { updateUser } from "../services/fetchUsers";
import { toast } from "react-hot-toast";

export const UserCard = ({ user }) => {
  const [followers, setFollowers] = useState(user.followers);
  const [buttonText, setButtonText] = useState("follow");
  const [isFollowed, setIsFollowed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (!isFollowed) {
      setButtonText("following");
      setFollowers(followers + 1);
      setIsFollowed(true);
    } else {
      setButtonText("follow");
      setFollowers(followers - 1);
      setIsFollowed(false);
    }
  };

  useEffect(() => {
    
    setIsLoading(true);
    updateUser(user.id, followers)
      .then(data => {
        return data;
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong. We could not complete your request");
      })
      .finally(() => setIsLoading(false));
  }, [user.id, followers]);

  return (
    <>
      {!isLoading && (
        <>
          <p>Followers: {new Intl.NumberFormat("en").format(followers)}</p>
          <button
            type="button"
            onClick={handleClick}
            className={isFollowed ? css.btn_active : css.btn_inactive}
          >
            {buttonText}
          </button>
        </>
      )}
    </>
  );
};
