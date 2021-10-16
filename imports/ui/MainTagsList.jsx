import React, { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { MainTagsCollection } from '../api/MainTagsCollection';
import { Button, Form, Offcanvas } from 'react-bootstrap';

export const MainTagsList = () => {    

  const [mainTags, setMainTags] = useState([]);

  const mainTagsDefault = useTracker(() => MainTagsCollection.find({}, { sort: { title: -1 } }).fetch() );

  var mainTagsDB = "";
  

//   const mainTagsDef = useTracker(() =>
//     MainTagsCollection.find({}, { sort: { title: -1 } }).fetch()
//   );
//   console.log(mainTagsDef);

//   useEffect(() => {
//     async function loadDefaultTags() {
//       if(mainTags == ""){
//         let response = MainTagsCollection.find({}, { sort: { title: -1 } }).fetch()
//         setMainTags(response)
//         console.log(response);
//       }
//         console.log("loading main tags");
//     }
//     loadDefaultTags()
//   });

  const [errorShow, setErrorShow] = useState('none');

  const [tagsShow, setTagsShow] = useState('block');

  const [show, setShow] = useState({show: false, title: ''});

  const handleClose = () => setShow({show: false, title: '', description: ''});
  const handleShow = (titleText, descriptionText) => setShow({show: true, title: titleText, description: descriptionText});
 
  const searchData = (text) => {
    if (text != "") {
        if( MainTagsCollection.find({'title': {'$regex': text, '$options': 'i'}}).count() == 0 ){
            setMainTags([])
            setErrorShow('block');
            setTagsShow('none');
        } else {
            setMainTags(
                MainTagsCollection.find({'title': {'$regex': text, '$options': 'i'}}).fetch()
            )
            setErrorShow('none');
            setTagsShow('block');
        }       
    } else {
        setMainTags(
            MainTagsCollection.find({}, { sort: { title: -1 } }).fetch()
        )   
        setErrorShow('none');    
        setTagsShow('block'); 
    }
  };

  if(mainTags == ""){
    mainTagsDB = mainTagsDefault;
  } else {
    mainTagsDB = mainTags;
  }

  return (   
    <>
        <Form.Group className="mb-3" controlId="searchMainTags">
            <Form.Control type="search" onChange={(e) => searchData(e.target.value)} placeholder="Поиск по основным тегам" />
        </Form.Group>
        <span className="text-center pt-3 text-muted" style={{display: errorShow, opacity: "0.5"}}>Ничего не найдено</span>
        <div style={{display: tagsShow}} className="pt-1">   
            {mainTagsDB.map(
                mainTag => 
                <Button key={mainTag._id} onClick={(e) => handleShow(mainTag.title, mainTag.description)} variant="outline-secondary rounded-pill me-2 mt-1 mb-1">#{mainTag.title}</Button>
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
