import React from 'react';

const Filter = ({ handleFiltering, filtering }) => {

  return (
    <div>
      Filter by name: <input
        onChange={handleFiltering}
        value={filtering}
      />
    </div>
  )
}

export default Filter;
