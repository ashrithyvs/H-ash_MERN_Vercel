import React, { useState } from "react";

export default function ReadMore({ children }) {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <span className="text">
      {isReadMore ? text.slice(0, 90) : text}
      <span onClick={toggleReadMore} className="read-or-hide text-primary">
        {isReadMore ? "  ...read more" : " show less"}
      </span>
    </span>
  );
}
