import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mainCategories, shopRestaurants, emergencyHospitals } from '../Components/Data/Categories';// We need your data file

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import { IoStar } from "react-icons/io5"; // For star rating

import './CategoryPage.css'; // New CSS file for styling

function CategoryPage() {
  // Get both main and sub category names from the URL
  const { mainCategoryName, subCategoryName } = useParams();

  // Find the top-level category (e.g., "Shops", "Emergency")
  const currentMainCategory = mainCategories.find(
    (cat) => cat.mainLink === `/${mainCategoryName}`
  );

  // If no main category is found, something is wrong with the URL
  if (!currentMainCategory) {
    return (
      <div className="category-page-container dark-theme">
        <header className="category-header-bar">
          {/* --- FIX 1 --- */}
          <Link to="/" className="back-button"><ArrowBackIosNewIcon /></Link>
          <h1 className="header-title">Category Not Found</h1>
        </header>
        <div className="category-content-padding">
          <p>The category "{mainCategoryName}" does not exist.</p>
          <Link to="/" className="back-home-link">Go back home</Link>
        </div>
      </div>
    );
  }

  // Determine what kind of content to display
  let contentToRender = null;
  let pageTitle = currentMainCategory.name; // Default title

  if (subCategoryName) {
    // Case 1: Displaying a specific list (e.g., /shops/restaurant, /emergency/hospitals)
    // Find the specific subcategory data (e.g., "Restaurant" within "Shops")
    const currentSubCategory = currentMainCategory.subcategories?.find(
      (subCat) => subCat.id === subCategoryName
    );

    if (!currentSubCategory) {
      // Handle invalid subcategory URL
      return (
        <div className="category-page-container dark-theme">
          <header className="category-header-bar">
            {/* This line was already correct! */}
            <Link to={`/${mainCategoryName}`} className="back-button"><ArrowBackIosNewIcon /></Link>
            <h1 className="header-title">Subcategory Not Found</h1>
          </header>
          <div className="category-content-padding">
            <p>The subcategory "{subCategoryName}" does not exist within "{currentMainCategory.name}".</p>
            <Link to={`/${mainCategoryName}`} className="back-home-link">Back to {currentMainCategory.name}</Link>
          </div>
        </div>
      );
    }
    
    pageTitle = currentSubCategory.name; // e.g., "Restaurant"
    
    // Now, load the actual items for this specific subcategory
    // This is where you would integrate with a real API or a larger data structure
    let itemsList = [];
    if (mainCategoryName === 'shops' && subCategoryName === 'restaurant') {
        itemsList = shopRestaurants; // From your Categories.js example data
    } else if (mainCategoryName === 'emergency' && subCategoryName === 'hospital') {
        itemsList = emergencyHospitals; // Assuming you add specific data for this
    }
    // ... add more conditions for other subcategories if data is local
    // else {
    //   // Fallback for subcategories that don't have specific data yet
    //   itemsList = [{id: 'temp', name: 'No items defined for this subcategory yet.', details: 'Coming soon!'}]
    // }

    contentToRender = (
      <div className="list-items-container">
        {itemsList.length > 0 ? (
          itemsList.map((item) => (
            <div key={item.id} className="list-item-card">
              <h3>{item.name}</h3>
              
              {item.contact && <p>Contact: {item.contact}</p>}
              {item.details && <p className="item-details">{item.details}</p>}
              {item.time && <p>Timings: {item.time}</p>}
              {/* Add more fields as per your item structure */}
            </div>
          ))
        ) : (
          <p className="no-items-message">No {currentSubCategory.name} found.</p>
        )}
      </div>
    );

  } else if (currentMainCategory.subcategories) {
    // Case 2: Displaying subcategories (e.g., /shops, /vehicles)
    contentToRender = (
      <div className="subcategory-grid-container">
        {currentMainCategory.subcategories.map((subCat) => {
          const SubIcon = subCat.icon; // Get the specific icon for the subcategory
          return (
            <Link 
              to={subCat.link} 
              key={subCat.id} 
              className="subcategory-card-link"
            >
              <div className="subcategory-card">
                <div className="subcategory-icon-box">
                  <SubIcon className="subcategory-icon" />
                </div>
                <h4 className="subcategory-name">{subCat.name}</h4>
                <p className="subcategory-count">{subCat.count}</p>
              </div>
            </Link>
          );
        })}
      </div>
    );
  } else if (currentMainCategory.items) {
    // Case 3: Displaying direct items for a main category (e.g., /emergency, /bustime)
    // This looks like the "Restaurants Nearby" style but for direct items
    contentToRender = (
      <div className="list-items-container">
        {currentMainCategory.items.map((item) => (
          <div key={item.id} className="list-item-card">
            <h3>{item.name}</h3>
            {item.contact && <p>Contact: <a href={`tel:${item.contact}`} className="contact-link">{item.contact}</a></p>}
            {item.details && <p className="item-details">{item.details}</p>}
            {item.time && <p>Timings: {item.time}</p>}
          </div>
        ))}
      </div>
    );
  } else {
    // Fallback if a category has neither subcategories nor direct items
    contentToRender = <p className="no-content-message">No content defined for this category yet.</p>;
  }

  return (
    <div className="category-page-container dark-theme">
      {/* Header Bar with Back Button */}
      <header className="category-header-bar">
        {/* If we're on a subcategory page, go back to the main category.
            Otherwise, go back to home. */}
        {/* --- FIX 2 --- */}
        <Link to={subCategoryName ? `/${mainCategoryName}` : "/"} className="back-button">
          <ArrowBackIosNewIcon />
        </Link>
        <h1 className="header-title">{pageTitle}</h1>
      </header>

      {/* Main content area */}
      <main className="category-content-area">
        {contentToRender}
      </main>
    </div>
  );
}

export default CategoryPage;