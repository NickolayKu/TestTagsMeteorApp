import React from 'react';
import { MainTagsList } from './MainTagsList.jsx';
import { GenreTagsList } from './GenreTagsList.jsx';
import { RatingTagsList } from './RatingTagsList.jsx';
import { MainHeaderNav } from './MainHeaderNav.jsx';
import { Info } from './Info.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab, Container } from 'react-bootstrap';

export function App() {

return (
  <>
    <MainHeaderNav/>

    <Container className="px-2">
        <Tabs defaultActiveKey="main" variant="pills" id="uncontrolled-tab-example" className="mb-2">
          <Tab eventKey="main" title="Основные">
            <MainTagsList/>
          </Tab>
          <Tab eventKey="genre" title="Жанр">
            <GenreTagsList/>
          </Tab>
          <Tab eventKey="rating" title="Рейтинг">
            <RatingTagsList/>
          </Tab>
          <Tab eventKey="info" title="Инфо">
            <Info/>
          </Tab>
        </Tabs>
    </Container>   
  </>
) 

};

