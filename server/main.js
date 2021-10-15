import { Meteor } from 'meteor/meteor';
import { GenreTagsCollection } from '/imports/api/GenreTagsCollection';
import { MainTagsCollection } from '/imports/api/MainTagsCollection';
import { RatingTagsCollection } from '/imports/api/RatingTagsCollection';

function insertGenreTag({ title, description }) {
  GenreTagsCollection.insert({title, description, createdAt: new Date()});
}
function insertMainTag({ title, description }) {
  MainTagsCollection.insert({title, description, createdAt: new Date()});
}
function insertRatingTag({ title, description, hightlight }) {
  RatingTagsCollection.insert({title, description, hightlight, createdAt: new Date()});
}

//MainTagsCollection.remove({});
//GenreTagsCollection.remove({});
//RatingTagsCollection.remove({});

Meteor.startup(() => {
  
  if (GenreTagsCollection.find().count() === 0) {
    insertGenreTag({
      title: 'Альтернативная вселенная',
      description: 'Всё что связано с романтикой'
    });
    insertGenreTag({
      title: 'Любовь и романтика',
      description: 'Всё что связано с романтикой'
    });
    insertGenreTag({
      title: 'Соулмейты',
      description: 'Всё что связано с романтикой'
    });
    insertGenreTag({
      title: 'Драма',
      description: 'Всё что связано с романтикой'
    });
    insertGenreTag({
      title: 'Ангст',
      description: 'Всё что связано с романтикой'
    });
    insertGenreTag({
      title: 'Экшн',
      description: 'Всё что связано с романтикой'
    });
    insertGenreTag({
      title: 'Психология',
      description: 'Всё что связано с романтикой'
    });
    insertGenreTag({
      title: 'Повседневность',
      description: 'Всё что связано с романтикой'
    });
    insertGenreTag({
      title: 'Историческое',
      description: 'Всё что связано с романтикой'
    });
    insertGenreTag({
      title: 'Мистика',
      description: 'Всё что связано с романтикой'
    });
    insertGenreTag({
      title: 'Фэнтези',
      description: 'Всё что связано с романтикой'
    });
    insertGenreTag({
      title: 'Фантастика',
      description: 'Всё что связано с романтикой'
    });
    insertGenreTag({
      title: 'Мифические существа',
      description: 'Всё что связано с романтикой'
    });
    insertGenreTag({
      title: 'Приключения',
      description: 'Всё что связано с романтикой'
    });
    insertGenreTag({
      title: 'Юмор',
      description: 'Всё что связано с романтикой'
    });
    insertGenreTag({
      title: 'Учебные заведения',
      description: 'Всё что связано с романтикой'
    });
    insertGenreTag({
      title: 'Интим',
      description: 'Всё что связано с романтикой'
    });
    insertGenreTag({
      title: 'Постапокалипсис',
      description: 'Всё что связано с романтикой'
    });
    insertGenreTag({
      title: 'Ужасы',
      description: 'Всё что связано с романтикой'
    });
    insertGenreTag({
      title: 'Антиутопия',
      description: 'Всё что связано с романтикой'
    });
    insertGenreTag({
      title: 'Детектив',
      description: 'Всё что связано с романтикой'
    });
  }

  if (MainTagsCollection.find().count() === 0) {
    insertMainTag({
      title: 'Большие посты',
      description: 'Предлагается играть большими постами. Новичкам лучше пропускать этот тег'
    });
    insertMainTag({
      title: 'Короткие посты',
      description: 'Предлагается играть короткими постами. Хороший выбор для новичков'
    });
    insertMainTag({
      title: 'Литературный стиль',
      description: 'Посты должны соответствовать литературному стилю общения'
    });
    insertMainTag({
      title: 'Джен',
      description: 'Отыгрыш без каких-либо романтических отношений, любви или секса между персонажами'
    });
    insertMainTag({
      title: 'Гет',
      description: 'Гетеросексуальная связь\гетеросексуальные отношения\мужчина и женщина'
    });
    insertMainTag({
      title: 'Слеш',
      description: 'Гомосексуальная связь\гомосексуальные отношения между мужчинами'
    });
    insertMainTag({
      title: 'Фемслеш',
      description: 'Лесбийская связь\лесбийские отношения между женщинами'
    });
    insertMainTag({
      title: 'На один раз',
      description: 'Не планируется продолжение общения или дальнейшие игры после завершения первой игры'
    });
    insertMainTag({
      title: 'Долговременная игра',
      description: 'Планируется продолжение общения или дальнейшие игры после завершения первой игры'
    });
    insertMainTag({
      title: 'Реал',
      description: 'Общение между людьми владельцами персонажей в реальной жизни'
    });
    insertMainTag({
      title: 'Конференция',
      description: 'Собрание групп, представителей или отдельных персонажей для обсуждения определённых тем'
    });
  }

  if (RatingTagsCollection.find().count() === 0) {
    insertRatingTag({
      title: 'G',
      description: 'Не содержит ничего, что большинство людей могло бы посчитать неприемлемым. Обнажение, сексуальные сцены и сцены приёма наркотиков отсутствуют, насилие минимально, отрывки диалога могут выйти за пределы вежливой беседы, но не выходят за пределы обычных ежедневных выражений',
      hightlight: false
    });
    insertRatingTag({
      title: 'PG',
      description: 'Явные сексуальные сцены и сцены употребления наркотиков отсутствуют, нагота, если присутствует, то только очень ограниченно, ужас и насилие не превышают умеренного уровня',
      hightlight: false
    });
    insertRatingTag({
      title: 'PG13',
      description: 'Грубое или продолжительное насилие отсутствует, сексуальная ориентация на наготу отсутствует, некоторые сцены употребления наркотиков могут присутствовать, можно услышать единичные употребления грубой сексуальной лексики',
      hightlight: false
    });
    insertRatingTag({
      title: 'R',
      description: 'Присутствует нецензурная лексика, допускается отыгрыш насилия и секса, но без подробного описания процесса',
      hightlight: false
    });
    insertRatingTag({
      title: 'NC17',
      description: 'Присутствует нецензурная лексика, подробное описание насилия и секса, затрагиваются темы, которые часть людей могло бы посчитать аморальными',
      hightlight: true
    });
    insertRatingTag({
      title: 'NC21',
      description: 'Полностью отсутствуют какие-либо ограничения, рамки морали и недопустимые темы',
      hightlight: true
    });
  }

});
