import { useEffect, useState } from 'react';

function Cart({ event, shoeList }) {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    shoeList.length !== 0
      ? setShowBubble(true)
      : setShowBubble(false);
  }, [shoeList]);

  return (
    <>
      <i onClick={event} className="bi bi-cart2"></i>
      {showBubble && (
        <div
          style={{
            position: 'absolute',
            fontFamily: 'Verdana, sans-serif',
            bottom: '-20px',
            left: '-12px',
            borderRadius: '50%',
            content: '2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '30px',
            width: '30px',
            backgroundColor: '#59b8eb',
            fontSize: '15px',
            fontWeight: '500',
            color: 'white',
          }}
        >
          {shoeList.length}
        </div>
      )}
    </>
  );
}

export default Cart;
