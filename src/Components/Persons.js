import React from 'react';
import Person from './Person';

const Persons = ({ filtered }) => {
  const newPersons = () => {
    return filtered.map((person, i) => <Person person={person} key={i} />)
  };

  return <>{newPersons()}</>
}

export default Persons;
