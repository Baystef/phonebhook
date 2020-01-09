import React from 'react';

const Personform = ({ addPerson, newName, newNumber, handleNewName, handleNewNumber }) => {
  return (
    <form onSubmit={addPerson}>
    <h1>New Contact</h1>
    <div>
      name: <input
        value={newName}
        onChange={handleNewName}
      />
      <br />
      number: <input
        value={newNumber}
        onChange={handleNewNumber}
      />
    </div>
    <div>
      <button type="submit">Add</button>
    </div>
  </form>
  )
}

export default Personform;
