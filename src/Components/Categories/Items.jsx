import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { categories } from '../Data/Categories';
import './Items.css';

function Items() {
  return (
    <Container>
      <Row>
        {categories.map((category, index) => {
          const Icon = category.icon; // ✅ Get icon component
          return (
            <Col xs={4} md={3} key={index} className="category-item-col">
              <Link to={category.link} className="text-decoration-none">
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
