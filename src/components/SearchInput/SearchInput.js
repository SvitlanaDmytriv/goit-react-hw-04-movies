import { useState } from 'react';

import { useLocation, useHistory } from 'react-router-dom';

export default function SearchInput({ changeValue }) {
  const [value, setValue] = useState('');
  const history = useHistory();
  const location = useLocation();

  const handleChange = e => {
    const { value } = e.target;
    setValue(value);
  };

  const onSubmit = e => {
    e.preventDefault();
    changeValue(value);

    history.push({
      ...location,
      search: `queryBy=${value}`,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="value"
          value={value}
          onChange={handleChange}
          required
          placeholder="Search Movie"
          autoComplete="off"
        />
      </form>
    </div>
  );
}
