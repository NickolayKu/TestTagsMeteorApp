import React, { useState, useEffect } from 'react';
import { RatingTagsCollection } from '../api/RatingTagsCollection';
import { Button, Form, Offcanvas } from 'react-bootstrap';

export function RatingTagsList() {
 
  const [ratingTags, setRatingTags] = useState(
    RatingTagsCollection.find({}, { sort: { title: -1 } }).fetch()
  );

  useEffect(() => {
    async function loadDefaultRatingTags() {
      if(ratingTags == ""){
        let responseRatingTags = RatingTagsCollection.find().fetch()
        setRatingTags(responseRatingTags)
        console.log(responseRatingTags);
      }
        console.log("loading rating tags");
    }
    loadDefaultRatingTags()
  });

  const [errorShow, setErrorShow] = useState('none');

  const [tagsShow, setTagsShow] = useState('block');

  const [show, setShow] = useState({show: false, title: ''});

  const handleClose = () => setShow({show: false, title: '', description: ''});
  const handleShow = (titleText, descriptionText) => setShow({show: true, title: titleText, description: descriptionText});
 
  const searchData = (text) => {
    if (text != "") {
        if( RatingTagsCollection.find({'title': {'$regex': text, '$options': 'i'}}).count() == 0 ){
            setRatingTags([])
            setErrorShow('block');
            setTagsShow('none');
        } else {
            setRatingTags(
              RatingTagsCollection.find({'title': {'$regex': text, '$options': 'i'}}).fetch()
            )
            setErrorShow('none');
            setTagsShow('block');
        }       
    } else {
        setRatingTags(
          RatingTagsCollection.find().fetch()
        )   
        setErrorShow('none');    
        setTagsShow('block'); 
    }
  };

  return (
  <>
        <Form.Group className="mb-3" controlId="searchMainTags">
            <Form.Control type="search" onChange={(e) => searchData(e.target.value)} placeholder="Поиск по тегам рейтинга" />
        </Form.Group>
        <span className="text-center pt-3 text-muted" style={{display: errorShow, opacity: "0.5"}}>Ничего не найдено</span>
        <div style={{display: tagsShow}} className="pt-1"> 
      {ratingTags.map(
        ratingTag => 
        {
            if(ratingTag.hightlight === true){ 
                return <Button key={ratingTag._id} onClick={(e) => handleShow(ratingTag.title, ratingTag.description)} variant="outline-danger rounded-pill me-2 mt-1 mb-1">#{ratingTag.title}</Button>
            } else {
                return <Button key={ratingTag._id} onClick={(e) => handleShow(ratingTag.title, ratingTag.description)} variant="outline-secondary rounded-pill me-2 mt-1 mb-1">#{ratingTag.title}</Button>
            }
        }
        
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