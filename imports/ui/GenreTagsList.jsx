import React, { useState, useEffect } from 'react';
import { GenreTagsCollection } from '../api/GenreTagsCollection';
import { Button, Form, Offcanvas } from 'react-bootstrap';

export function GenreTagsList() {
 
  const [genreTags, setGenreTags] = useState([]);

  useEffect(() => {
    async function loadDefaultGenreTags() {
      if(genreTags == ""){
        let responseGenreTags = GenreTagsCollection.find({}, { sort: { title: -1 } }).fetch()
        setGenreTags(responseGenreTags)
        console.log(responseGenreTags);
      }
        console.log("loading genre tags");
    }
    loadDefaultGenreTags()
  });

  const [errorShow, setErrorShow] = useState('none');

  const [tagsShow, setTagsShow] = useState('block');

  const [show, setShow] = useState({show: false, title: ''});

  const handleClose = () => setShow({show: false, title: '', description: ''});
  const handleShow = (titleText, descriptionText) => setShow({show: true, title: titleText, description: descriptionText});
 
  const searchData = (text) => {
    if (text != "") {
        if( GenreTagsCollection.find({'title': {'$regex': text, '$options': 'i'}}).count() == 0 ){
            setGenreTags([])
            setErrorShow('block');
            setTagsShow('none');
        } else {
            setGenreTags(
              GenreTagsCollection.find({'title': {'$regex': text, '$options': 'i'}}).fetch()
            )
            setErrorShow('none');
            setTagsShow('block');
        }       
    } else {
        setGenreTags(
          GenreTagsCollection.find({}, { sort: { title: -1 } }).fetch()
        )   
        setErrorShow('none');    
        setTagsShow('block'); 
    }
  };

  

  return (   
    <>
        <Form.Group className="mb-3" controlId="searchMainTags">
            <Form.Control type="search" onChange={(e) => searchData(e.target.value)} placeholder="Поиск по тегам жанра" />
        </Form.Group>
        <span className="text-center pt-3 text-muted" style={{display: errorShow, opacity: "0.5"}}>Ничего не найдено</span>
        <div style={{display: tagsShow}} className="pt-1">   
            {genreTags.map(
                genreTag => 
                <Button key={genreTag._id} onClick={(e) => handleShow(genreTag.title, genreTag.description)} variant="outline-secondary rounded-pill me-2 mt-1 mb-1">#{genreTag.title}</Button>
            )}
        </div>

        <Offcanvas placement="bottom" className="bg-light" show={show.show} onHide={handleClose} style={{ height: "auto", maxHeight: "84.6vh" }}>
            <Offcanvas.Header className="pb-1" closeButton>
                <Offcanvas.Title>{show.title}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="pt-1">
                {show.description}
            </Offcanvas.Body>
        </Offcanvas>
    </>   
  );

};
