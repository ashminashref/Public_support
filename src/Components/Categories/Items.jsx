import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// 1. IMPORT the 'mainCategories' array
import { mainCategories } from '../Data/Categories';
import './Items.css'; // Make sure you create this CSS file

function Items() {
  return (
    <Container>
      <Row>
        {mainCategories.map((category, index) => { 
          const Icon = category.icon; 
          return (
            <Col xs={4} md={3} key={index} className="category-item-col">
              {/* 3. Use 'category.mainLink' for the Link */}
              <Link to={category.mainLink} className="text-decoration-none">
                <div className="category-box">

                  {/* Gradient Icon Box */}
                  <div 
                    className="icon-background"
                    style={{ background: category.backgroundColor }}
                  >
                    <Icon className="category-icon" />
                  </div>

                  {/* Category Name */}
                  <p className="category-name">{category.name}</p>

                </div>
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Items;