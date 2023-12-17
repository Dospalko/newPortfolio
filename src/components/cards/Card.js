import React from 'react'

const Card = ({ title, content }) => (
    <div className="card bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{content}</p>
    </div>
  );
  
  export default Card;