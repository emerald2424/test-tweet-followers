import css from "./App.css";
import { useState } from "react";
import Home from "./Home";

const App = () => {
  const [followers, setFollowers] = useState(100500);
  const [buttonText, setButtonText] = useState('follow')
  
  const handleClick = () => {
    const Button = document.querySelector('button')
    if (buttonText === 'follow') {
      setButtonText('following');
      setFollowers(followers + 1);
      Button.classList.toggle('btn--active');
    } else {
      setButtonText('follow');
      setFollowers(followers - 1);
      Button.classList.toggle('btn--active');
    }
  };

  return (
    <>
      <Home></Home>
      <p>Followers: {new Intl.NumberFormat("en").format(followers)}</p>
      <button className={css.btn} type="button" onClick={handleClick}>
        {buttonText}
      </button>
    </>
  );
};

export default App;
