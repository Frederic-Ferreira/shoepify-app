import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import video from '../video/shoelaces.mp4';

function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 500);
  }, []);

  return (
    <div id="home">
      <h1>Hey!</h1>
      {showContent && (
        <>
          <video autoPlay loop height="100%" width="100%">
            <source src={video} />
          </video>
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
