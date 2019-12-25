import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    window.onpopstate = function(event) {
      console.log(`location: ${document.location}, state: ${event.state}`);
    };
  }, []);
  return (
    <div>
      <button onClick={() => window.history.pushState('v1', '', '/page1')}>
        page1
      </button>
      <button onClick={() => window.history.pushState('v2', '', '/page2')}>
        page2
      </button>
    </div>
  );
}
