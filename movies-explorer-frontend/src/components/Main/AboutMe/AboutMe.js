import React, { memo } from "react";

function AboutMe()
{  
    return (
      <article className="aboutMe">
        <h2 className="aboutMe__title">Выпускник</h2>
        <div className="aboutMe__line"></div>
        <div className="aboutMe__wrapper">
            <div className="aboutMe__info">
                <h3 className="aboutMe__info-title">Владимир</h3>
                <h4 className="aboutMe__info-subtitle">Фронтенд-разработчик, 40 лет</h4>
                <p className="aboutMe__info-text">Родился в&nbsp;Германии. Учился и&nbsp;окончил технический университет на&nbsp;Дальнем Востоке. Обосновался в&nbsp;Москве. Люблю готовить, путешествовать с&nbsp;семьей (у&nbsp;меня жена и&nbsp;двое сыновей) и&nbsp;увлекаюсь любительским бегом. Проработал 18&nbsp;лет в&nbsp;продажах и&nbsp;закупках. Наконец решился поменять свою жизнь и&nbsp;заняться тем, что действительно нравится&nbsp;&mdash; веб-разработкой. Обучился по&nbsp;специальности &laquo;Веб-разработчик&raquo; на&nbsp;курсах Яндекс Практикум. Ищу работу в&nbsp;команде разработчиков в&nbsp;замечательной Компании.</p>
                <a className="aboutMe__info-profile" target="_blank" rel="noreferrer" href="https://github.com/VladimirIvancha">Моя страничка на Github Pages</a>
            </div>
            <div className="aboutMe__info-photo"></div>
        </div>
      </article>
    );
}

export default memo(AboutMe);