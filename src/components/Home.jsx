import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import lottie from 'lottie-web';

import laces from '../animation/data.json';

function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
      lottie.loadAnimation({
        container: document.getElementById('svg-container'),
        animationData: laces,
      });
    }, 500);
  }, []);

  return (
    <div id="home">
      <h1>Hey!</h1>
      {showContent && (
        <>
          <div id="svg-container" />
          <h2>Time to tie your shoes ...</h2>
        </>
      )}
      <Link to="/shop">
        <button type="button">Shop now</button>
      </Link>
    </div>
  );
}

export default Home;
