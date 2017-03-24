import React from 'react';

const TermItem = (term) => {
  console.log({term});
  return (
      <p>{term.value}</p>
  )
};

export default TermItem;
