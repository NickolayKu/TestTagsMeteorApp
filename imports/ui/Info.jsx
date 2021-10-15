import React from 'react';
import { ListGroup } from 'react-bootstrap';

export function Info() {

  return (
    <>
      <ListGroup variant="flush pt-5">
        <ListGroup.Item className="bg-light ps-1 text-secondary">Приложение для быстрого поиска и ознакомления со значениями различных специальных тегов, используемых в текстовых ролевых играх</ListGroup.Item>
        <ListGroup.Item className="bg-light ps-1 text-secondary">Версия приложения: <span className="text-danger">1.01</span></ListGroup.Item>
        <ListGroup.Item className="bg-light ps-1 text-secondary">Сделано с помощью: <span className="text-danger">ReactJS</span>, <span className="text-danger">MeteorJS</span>, <span className="text-danger">Bootstrap5</span> и <span className="text-danger">ReactIcons</span>
        </ListGroup.Item>
        <ListGroup.Item className="bg-light ps-1 text-info"><i>Принимаются пожелания, предложения и новые теги для их добавления</i></ListGroup.Item>
      </ListGroup>
    </>
  );
  
};
