import React, { useState } from 'react';
import Filter from './Components/Filter';
import PersonForm from './Components/PersonForm';
import Persons from './Components/Persons';

import './App.css';


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arturo Vidal', number: '555 467 362' },
    { name: 'Dan Abramov', number: '180 234 567' },
    { name: 'Mark Zucks', number: '07054532198' },
    { name: 'Zack Effron', number: '971 345 6754' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filtering, setFiltering] = useState('');

  const addPerson = (e) => {
    e.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber
    }
    const exists = persons.some(person => newName.toLowerCase() === person.name.toLowerCase());
    !exists ? setPersons([...persons, nameObject]) : alert(`${newName} already exists`);
    setNewName('');
    setNewNumber('');
  };

  const handleNewName = (e) => {
    setNewName(e.target.value)
  };

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  };

  const handleFiltering = (e) => {
    setFiltering(e.target.value)
  };

  const filtered = persons.filter(person => {
    return person.name.toLowerCase().indexOf(filtering.toLowerCase()) > -1;
  });


  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Filter
        filtering={filtering}
        handleFiltering={handleFiltering} />
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
      />
      <h1>Numbers</h1>
      <Persons filtered={filtered} />
    </div>
  );
}

export default App;
