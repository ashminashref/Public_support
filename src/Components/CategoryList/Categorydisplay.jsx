import React from 'react';
// 1. Import the useNavigate hook
import { useNavigate } from 'react-router-dom';
import { mainCategories } from './your-categories-file';

function Categorydisplay() {
  // 2. Get the navigate function from the hook
  const navigate = useNavigate();

  // 3. Create a handler function
  const handleCategoryClick = (path) => {
    navigate(path);
  };

  return (
    <div className="category-grid">
      {mainCategories.map((category) => (
        // 4. Call the handler on click
        <div 
          key={category.name} 
          className="category-card" 
          style={{ background: category.backgroundColor, cursor: 'pointer' }}
          onClick={() => handleCategoryClick(category.mainLink)}
        >
          <category.icon className="category-icon" />
          <h3>{category.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Categorydisplay;