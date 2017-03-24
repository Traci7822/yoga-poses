import React from 'react';
import TermItem from './TermItem';

const TermList = (props) => {
  const termItems = props.terms.map((body_part) => {
    // debugger;

    return (
    <li key={body_part.name}>
      <TermItem key={body_part.name} value={body_part.name}/>
    </li>
  )
  });

  return (
    <ul>{termItems}</ul>
  );
};

export default TermList;
