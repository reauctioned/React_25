import { useState } from "react";

export default function UseOnClickOutsideTest() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      {showContent ? (
        <div>
          <h1>Random Content</h1>
          <p>Cloes content by clicking outside the div</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
