import React, { useState } from 'react'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search'; // Assuming you want
function Search() {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log('searching for', searchTerm)
    }
  return (
    <div className='mt-5'>
        <Form className="mb-4" onSubmit={handleSearchSubmit}> {/* Added onSubmit for form submission */}
      <InputGroup>
        <InputGroup.Text id="search-addon" className="search-icon-bg">
          <SearchIcon />
        </InputGroup.Text>
        <FormControl
          placeholder="Search all services..."
          aria-label="Search all services"
          aria-describedby="search-addon"
          className="search-input-field"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </InputGroup>
    </Form>
    </div>
  )
}

export default Search