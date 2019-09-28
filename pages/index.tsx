import React from 'react';
import Head from 'next/head';

const done = [
  {
    year: 2018,
    items: [
      {
        name: 'ФурФур.',
        desc: 'Брендинг.Создание сайта.SMM',
      },
      {name: 'Русское НЛП.', desc: 'R&D.'},
      {name: 'Calltouch.', desc: 'Ассистирование.'},
      {name: 'ВЕРСИ.', desc: 'Брендинг.Создание сайта.SMM.'},
      {name: 'ВАРВАРА.', desc: 'Консалтинг.SMM.'},
      {name: 'HAGEN.', desc: 'Консалтинг.Дизайн.SMM.Создание сайта.'},
      {name: 'INSIDER.PRO.', desc: 'SMM.'},
      {name: 'VOICECOMMUNICATION.', desc: 'SMM.'},
      {name: 'IXAT.', desc: 'Консалтинг.'},
      {
        name: 'ЛОСОСЬ И КОФЕ, ПОЮЩИЙ ЛОСОСЬ.',
        desc: 'Консалтинг.SMM.Проект сайта.',
      },
      {
        name: 'ЛЕТО, АХ ЛЕТО!',
        desc: 'Брендинг.Торговое оборудование.',
      },
      {
        name: 'ЧИСТОЯГОДА',
        desc: 'Брендинг.Торговое оборудование.',
      },
      {
        name: 'ПУШКАРСКАЯ СЛОБОДА',
        desc: 'Брендинг.',
      },
      {
        name: 'БИРВАГЕН',
        desc: 'SMM.',
      },
      {
        name: 'NOVO',
        desc: 'Консалтинг.Брендинг.Коммуникация.',
      },
      {
        name: 'СИБИРИЯ',
        desc: 'Консалтинг.Брендинг.Коммуникация.',
      },
      {
        name: 'GASTRONOMICA',
        desc: 'Консалтинг.',
      },
      {
        name: 'СТОЛИЦА ДЕРЕВЕНЬ',
        desc: 'Консалтинг.Брендинг.Коммуникация.',
      },
      {
        name: 'ШЕЛКОВАЯ',
        desc: 'SMM.',
      },
      {
        name: 'СТЕРИЛЛИН',
        desc: 'Брендинг.',
      },
    ],
  },
  {
    year: 2017,
    items: [
      {
        name: 'ФурФур.',
        desc: 'Консалтинг.Брендинг.Создание сайта. SMM. Architecture.',
      },
      {name: 'Русское НЛП.', desc: 'R&D.'},
      {name: 'Calltouch.', desc: 'Ассистирование.'},
      {name: 'GEN87.', desc: 'SMM.'},
      {name: 'Самая Cоль.', desc: 'SMM.'},
      {name: 'DIAMOND-DENT.', desc: 'SMM.'},
      {name: 'ФЛОРА ЦЕНТР.', desc: 'SMM.'},
      {name: 'ПЕРСОНА.', desc: 'SMM-таргет.'},
      {name: 'MAX BRAU.', desc: 'SMM-таргет.'},
      {name: 'ВЕРСИ.', desc: 'Брендинг.Создание сайта.SMM.'},
      {name: 'ВАРВАРА.', desc: 'Консалтинг.SMM.'},
      {name: 'REFRESH.', desc: 'Брендинг.Копирайт.Ассистирование.'},
      {name: 'АВТОДОМ.', desc: 'Консалтинг.'},
      {name: 'SMARTSHOP33.', desc: 'SMM.'},
      {name: 'HAGEN.', desc: 'Консалтинг.Дизайн.SMM.Создание сайта.'},
      {name: 'INSIDER.PRO.', desc: 'SMM.'},
      {name: 'VOICECOMMUNICATION.', desc: 'SMM.'},
      {name: 'IXAT.', desc: 'Консалтинг.'},
    ],
  },
  {
    year: 2016,
    items: [
      {name: 'Флора Центр.', desc: 'SMM.'},
      {name: 'ФурФур.', desc: 'Продвижение.'},
      {name: 'Шишки-Мишки.', desc: 'Брендинг.Управление.'},
      {name: 'ФлораМаркет.', desc: 'Брендинг.Управление.'},
      {name: 'Русское НЛП.', desc: 'R&D.'},
      {name: 'Calltouch.', desc: 'Ассистирование.'},
      {name: 'Центурион.', desc: 'Консалтинг.'},
      {name: 'GEN87', desc: 'SMM.'},
    ],
  },
  {
    year: 2015,
    items: [
      {name: 'ФурФур.', desc: 'Идея.Брендинг.Дизайн.Продвижение.'},
      {name: 'CoffePeople.', desc: 'Recreate.'},
      {name: 'Divan.ru.', desc: 'Копирайт.Ассистирование.'},
      {
        name: 'Суздаль Сего Дня.',
        desc: 'Идея.Нейминг.Запуск.Продвижение.',
      },
      {
        name: 'Funforever.',
        desc: 'Администрирование.Развитие.Продвижение.',
      },
      {
        name: 'ГТК Суздаль.',
        desc: 'SMM.Копирайт.Мобильный сайт.Реклама.',
      },
      {name: 'GoodMebel.ru.', desc: 'Копирайт.'},
      {name: 'Русское НЛП.', desc: 'R&D.'},
      {name: 'Управление рестораном.', desc: 'Книга.'},
      {name: 'SmartShop33.', desc: 'Администрирование.Продвижение.'},
      {name: 'Центурион.', desc: 'Консалтинг.'},
      {
        name: 'Ресторан “Козловица/Пражечка”.',
        desc: 'Копирайт.Консалтинг.',
      },
    ],
  },
  {
    year: 2014,
    items: [
      {
        name: 'Funforever.',
        desc: 'Идея.Дизайн.Создание.Администрирование.',
      },
      {name: 'Пушкарская Слобода.', desc: 'Сайт.Копирайт.'},
      {name: 'ГТК Суздаль.', desc: 'Сайт.Копирайт'},
      {
        name: 'ФлораЦентр.',
        desc: 'Промо-сайты.Реклама.Дизайн.Консалтинг.',
      },
      {name: 'ИнжЭлектро.', desc: 'Фирстиль.Копирайт.'},
      {name: 'Русское НЛП.', desc: 'Идея.Фирстиль.R&D.'},
      {name: 'Паритет/строительство.', desc: 'Фирстиль.Сайт.'},
      {name: 'Стройтек/строительство.', desc: 'Фирстиль.Сайт.'},
      {name: 'SmartShop33.', desc: 'Администрирование.Продвижение.'},
    ],
  },
  {
    year: 2013,
    items: [
      {
        name: 'ABIProduct.',
        desc: 'Проект нового FMCG продукта: Премиальные пельмени.',
      },
      {name: 'CoffePeople.', desc: 'Идея.Брендинг.Копирайт.Дизайн.'},
      {
        name: 'Ресторан Medoc.',
        desc: 'Брендинг.Дизайн.Позиционирование.',
      },
      {name: 'ThuleВладимир.', desc: 'Дизайн.'},
      {name: 'Автомойка Воск&Лоск.', desc: 'R&D.Проект ERP.'},
      {name: 'Ресторан Изба.', desc: 'Идея.Дизайн.Проработка меню.'},
      {
        name: 'Лестория.',
        desc: 'Копирайт.Интернет-магазин.Консалтинг.Реклама.',
      },
      {name: 'SmartShop33.', desc: 'Администрирование.Продвижение.'},
      {name: 'ФлораДекор.', desc: 'Фирстиль.Сайт.Продвижение.'},
      {
        name: 'ФлораЦентр.',
        desc: 'ERP.Позиционирование.Рестайлинг.Интернет-магазин.',
      },
      {name: 'Центурион.', desc: 'Консалтинг.Тренинги.'},
      {name: 'Юзберг.', desc: 'Промо видео.Проект сайта.'},
    ],
  },
  {
    year: 2012,
    items: [
      {
        name: 'DolceCremo.',
        desc: 'Брендинг.Дизайн.ERP.Торговое оборудование.',
      },
      {
        name: 'Торгово-офисный центр Революция.',
        desc: 'Нейминг.Фирстиль.Навигация.Дизайн.',
      },
      {name: 'SmartShop33.', desc: 'Администрирование.Продвижение.'},
      {
        name: 'Ресторанная группа Владим.',
        desc: 'Реклама.Аналитика.Сайт.Консалтинг.Журнал “Гастроном”',
      },
      {name: 'GlobalSMS.', desc: 'ERP.'},
      {name: 'РекиРуки/фестиваль рукоделия.', desc: 'Идея, нейминг.'},
    ],
  },
  {
    year: 2011,
    items: [
      {
        name: 'Журнал “Есть! Жизнь со вкусом”.',
        desc: 'Администрирование.Издание.Развитие.',
      },
      {name: 'Журнал “Зеркало”.', desc: 'Копирайт.Спецпроекты.'},
      {
        name: 'SmartShop33.',
        desc: 'Идея.Создание.Запуск.Фирстиль.Администрирование.',
      },
      {
        name: 'Ресторанная группа Владим.',
        desc: 'Реклама.Аналитика.Консалтинг.',
      },
    ],
  },
  {
    year: 2010,
    items: [
      {
        name: 'Журнал “Есть! Жизнь со вкусом”.',
        desc: 'Идея.Нейминг.Брендинг.Дизайн.',
      },
      {
        name: 'Ключ Здоровья.',
        desc: 'Идея.Дизайн.Проект торгового киоска.',
      },
      {name: 'ТехноСтрим.', desc: 'Нейминг.Фирстиль.Сайт.'},
      {name: 'ЯмалПиво.', desc: 'Консалтинг.'},
      {name: 'Ресторанная группа Владим.', desc: 'Сайт.'},
      {
        name: 'GeometriaVladimir.',
        desc: 'Идея.Запуск.Администрирование.Продвижение.',
      },
    ],
  },
  {
    year: 2009,
    items: [
      {
        name: 'Клуб любителей музыки Majack.',
        desc: 'Нейминг.Позиционирование.',
      },
      {
        name: 'Меридиансантехника оптом.',
        desc: 'Логотип.Сайт.Консалтинг.',
      },
      {name: 'Первопечатник/типография.', desc: 'Проект сайта.Копирайт.'},
    ],
  },
  {
    year: 2008,
    items: [
      {name: 'Альянс/IT.', desc: 'Реклама.'},
      {name: 'ДиакарМастер.', desc: 'Фирстиль.Сайт.Копирайт.Реклама.'},
    ],
  },
  {
    year: 2007,
    items: [{name: 'Альянс/IT.', desc: 'Ребрендинг.Реклама.'}],
  },
];

const current = [
  {
    year: 2019,
    items: [
      {
        name: 'CALLTOUCH.',
        desc: 'Ассистирование.',
      },
      {
        name: 'ВАРВАРА ЗЕНИНА.',
        desc: 'Консалтинг.',
      },
      {
        name: 'HAGEN.',
        desc: 'Дизайн.SMM.',
      },
      {
        name: 'КУДЫКИНА ГОРА.',
        desc: 'Консалтинг.Брендинг.Дизайн.Архитектура.SMM.',
      },
      {
        name: 'VOICECOMMUNICATION.',
        desc: 'SMM.',
      },
      {
        name: 'SELEBRIUM.',
        desc: 'Брендинг.Дизайн.Сайт.SMM.RnD.',
      },
      {
        name: 'РЫНОК НА СТУДЁНОЙ.',
        desc: 'Брендинг.Дизайн.SMM.',
      },
      {
        name: 'FARM DO.',
        desc: 'SMM.',
      },
      {
        name: 'BEERWAGEN.',
        desc: 'SMM.',
      },
      {
        name: 'NOVO-RESTAURANT.',
        desc: 'Консалтинг.Дизайн.SMM.',
      },
    ],
  },
];
export default class Index extends React.Component {
  _renderItems = items =>
    items.map((item, i) => (
      <li key={i}>
        <strong>{item.name}</strong>
        <div className="desc">{item.desc}</div>
      </li>
    ));
  _renderLists = (lists, className) =>
    lists.map((list, i) => (
      <div key={i} className={className}>
        <h5>{list.year}</h5>
        <ul>{this._renderItems(list.items)}</ul>
      </div>
    ));

  componentDidCatch() {}

  render = () => (
    <div>
      <Head>
        <title>Lunkin.pro</title>
        <script>new WOW().init();</script>
      </Head>
      <h1
        className="wow fadeInUp"
        data-wow-delay="4.8s"
        style={{textAlign: 'center'}}>
        Lunkin.pro
      </h1>
      <div className="container noscroll">
        <div className="part noscroll">
          <div className="slogan slogan-1 wow fadeInLeft" data-wow-delay="0s">
            Все что мы сделали
          </div>
          <div
            className="timeline noscroll wow fadeInLeft"
            data-wow-delay="1.1s">
            {this._renderLists(done, 'done')}
            <div className="done">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          </div>
        </div>
        <div className="part noscroll">
          <div className="slogan slogan-2 wow fadeIn" data-wow-delay="2.2s">
            Во всем что мы делаем
          </div>
          <div
            className="timeline timeline-2 wow fadeInLeft"
            data-wow-delay="3.4s">
            {this._renderLists(current, 'current')}
          </div>
        </div>
      </div>
      <style jsx global>{`
        html: {
          background: #18181a;
        }

        body {
          background: #18181a url(/static/bg.jpg) repeat-x center center fixed;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;
          padding: 0;
          margin: 0;
          color: #f9f9f9;
          font-family: -apple-system, Helvetica, Arial, san-serif;
        }

        h1 {
          font-weight: 400;
          font-size: 44px;
        }

        .container {
          width: 100%;
        }

        /* хром, сафари */
        .noscroll::-webkit-scrollbar {
          width: 0;
        }

        /* ie 10+ */
        .noscroll {
          -ms-overflow-style: none;
        }

        /* фф (свойство больше не работает, других способов тоже нет)*/
        .noscroll {
          overflow: -moz-scrollbars-none;
        }

        .slogan {
          display: block;
          padding: 3px 38px;
          margin-bottom: 20px;
          font-size: 20px;
          font-weight: 300;
        }

        .slogan-1 {
          text-align: right;
        }

        .slogan-2 {
          flex-shrink: 1;
          text-shadow: 0 0 15px #939393;
        }

        .part {
          width: 50%;
          float: left;
          overflow: scroll;
        }

        .timeline {
          display: flex;
          flex-direction: row-reverse;
          align-items: flex-start;
          overflow: scroll;
        }

        .timeline-2 {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          overflow: scroll;
        }

        .done,
        .current {
          min-width: -webkit-min-content;
          min-width: min-content;
        }

        .current {
          flex-basis: 80px;
        }

        .done ul,
        .current ul {
          border-left: 1px solid #979797;
          border-top: 1px solid #979797;
        }

        ul {
          list-style: none;
          margin-left: 0;
          padding-left: 0;
          padding-top: 1.5em;
          padding-bottom: 0.5em;
          margin-top: 0;
        }

        li {
          padding-left: 2em;
          text-indent: -2em;
          padding-right: 3em;
        }

        li:before {
          content: '–';
          padding-right: 2em;
          color: #979797;
        }

        li {
          margin-bottom: 18px;
          font-weight: 300;
        }

        .desc {
          padding-left: 5em;
          font-size: 14px;
          color: #c0c0c8;
        }

        li strong {
          font-weight: 500;
          text-transform: uppercase;
          color: #d4d2d8;
        }

        h5 {
          display: flex;
          padding: 6px 12px;
          margin: 0;
          border-left: 1px solid #979795;
          line-height: 0.6;
          color: #c4c6c8;
        }

        @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
          h1 {
            font-size: 24px;
          }
          .slogan {
            padding: 3px 24px;
            margin-bottom: 10px;
            font-size: 14px;
          }
          .desc {
            padding-left: 3em;
            font-size: 10px;
            color: #c0c0c8;
          }

          li strong {
            font-size: 12px;
            font-weight: 500;
            text-transform: uppercase;
            color: #d4d2d8;
          }

          li {
            padding-left: 1em;
            text-indent: -1em;
            padding-right: 2em;
          }

          li:before {
            content: '–';
            padding-right: 1em;
            color: #979797;
          }

          .part {
            overflow-x: scroll; /* has to be scroll, not auto */
            -webkit-overflow-scrolling: touch;
          }
        }

        @charset "UTF-8";

        .animated {
          -webkit-animation-duration: 1s;
          animation-duration: 1s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
        }

        .animated.infinite {
          -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
        }

        .animated.hinge {
          -webkit-animation-duration: 2s;
          animation-duration: 2s;
        }

        .animated.flipOutX,
        .animated.flipOutY,
        .animated.bounceIn,
        .animated.bounceOut {
          -webkit-animation-duration: 0.75s;
          animation-duration: 0.75s;
        }

        @-webkit-keyframes bounce {
          from,
          20%,
          53%,
          80%,
          to {
            -webkit-animation-timing-function: cubic-bezier(
              0.215,
              0.61,
              0.355,
              1
            );
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }

          40%,
          43% {
            -webkit-animation-timing-function: cubic-bezier(
              0.755,
              0.05,
              0.855,
              0.06
            );
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            -webkit-transform: translate3d(0, -30px, 0);
            transform: translate3d(0, -30px, 0);
          }

          70% {
            -webkit-animation-timing-function: cubic-bezier(
              0.755,
              0.05,
              0.855,
              0.06
            );
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            -webkit-transform: translate3d(0, -15px, 0);
            transform: translate3d(0, -15px, 0);
          }

          90% {
            -webkit-transform: translate3d(0, -4px, 0);
            transform: translate3d(0, -4px, 0);
          }
        }

        @keyframes bounce {
          from,
          20%,
          53%,
          80%,
          to {
            -webkit-animation-timing-function: cubic-bezier(
              0.215,
              0.61,
              0.355,
              1
            );
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }

          40%,
          43% {
            -webkit-animation-timing-function: cubic-bezier(
              0.755,
              0.05,
              0.855,
              0.06
            );
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            -webkit-transform: translate3d(0, -30px, 0);
            transform: translate3d(0, -30px, 0);
          }

          70% {
            -webkit-animation-timing-function: cubic-bezier(
              0.755,
              0.05,
              0.855,
              0.06
            );
            animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
            -webkit-transform: translate3d(0, -15px, 0);
            transform: translate3d(0, -15px, 0);
          }

          90% {
            -webkit-transform: translate3d(0, -4px, 0);
            transform: translate3d(0, -4px, 0);
          }
        }

        .bounce {
          -webkit-animation-name: bounce;
          animation-name: bounce;
          -webkit-transform-origin: center bottom;
          transform-origin: center bottom;
        }

        @-webkit-keyframes flash {
          from,
          50%,
          to {
            opacity: 1;
          }

          25%,
          75% {
            opacity: 0;
          }
        }

        @keyframes flash {
          from,
          50%,
          to {
            opacity: 1;
          }

          25%,
          75% {
            opacity: 0;
          }
        }

        .flash {
          -webkit-animation-name: flash;
          animation-name: flash;
        }

        /* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

        @-webkit-keyframes pulse {
          from {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
          }

          50% {
            -webkit-transform: scale3d(1.05, 1.05, 1.05);
            transform: scale3d(1.05, 1.05, 1.05);
          }

          to {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
          }
        }

        @keyframes pulse {
          from {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
          }

          50% {
            -webkit-transform: scale3d(1.05, 1.05, 1.05);
            transform: scale3d(1.05, 1.05, 1.05);
          }

          to {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
          }
        }

        .pulse {
          -webkit-animation-name: pulse;
          animation-name: pulse;
        }

        @-webkit-keyframes rubberBand {
          from {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
          }

          30% {
            -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
          }

          40% {
            -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
          }

          50% {
            -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
          }

          65% {
            -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
          }

          75% {
            -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
          }

          to {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
          }
        }

        @keyframes rubberBand {
          from {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
          }

          30% {
            -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
          }

          40% {
            -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
          }

          50% {
            -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
          }

          65% {
            -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
          }

          75% {
            -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
          }

          to {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
          }
        }

        .rubberBand {
          -webkit-animation-name: rubberBand;
          animation-name: rubberBand;
        }

        @-webkit-keyframes shake {
          from,
          to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }

          10%,
          30%,
          50%,
          70%,
          90% {
            -webkit-transform: translate3d(-10px, 0, 0);
            transform: translate3d(-10px, 0, 0);
          }

          20%,
          40%,
          60%,
          80% {
            -webkit-transform: translate3d(10px, 0, 0);
            transform: translate3d(10px, 0, 0);
          }
        }

        @keyframes shake {
          from,
          to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }

          10%,
          30%,
          50%,
          70%,
          90% {
            -webkit-transform: translate3d(-10px, 0, 0);
            transform: translate3d(-10px, 0, 0);
          }

          20%,
          40%,
          60%,
          80% {
            -webkit-transform: translate3d(10px, 0, 0);
            transform: translate3d(10px, 0, 0);
          }
        }

        .shake {
          -webkit-animation-name: shake;
          animation-name: shake;
        }

        @-webkit-keyframes headShake {
          0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
          }

          6.5% {
            -webkit-transform: translateX(-6px) rotateY(-9deg);
            transform: translateX(-6px) rotateY(-9deg);
          }

          18.5% {
            -webkit-transform: translateX(5px) rotateY(7deg);
            transform: translateX(5px) rotateY(7deg);
          }

          31.5% {
            -webkit-transform: translateX(-3px) rotateY(-5deg);
            transform: translateX(-3px) rotateY(-5deg);
          }

          43.5% {
            -webkit-transform: translateX(2px) rotateY(3deg);
            transform: translateX(2px) rotateY(3deg);
          }

          50% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
          }
        }

        @keyframes headShake {
          0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
          }

          6.5% {
            -webkit-transform: translateX(-6px) rotateY(-9deg);
            transform: translateX(-6px) rotateY(-9deg);
          }

          18.5% {
            -webkit-transform: translateX(5px) rotateY(7deg);
            transform: translateX(5px) rotateY(7deg);
          }

          31.5% {
            -webkit-transform: translateX(-3px) rotateY(-5deg);
            transform: translateX(-3px) rotateY(-5deg);
          }

          43.5% {
            -webkit-transform: translateX(2px) rotateY(3deg);
            transform: translateX(2px) rotateY(3deg);
          }

          50% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
          }
        }

        .headShake {
          -webkit-animation-timing-function: ease-in-out;
          animation-timing-function: ease-in-out;
          -webkit-animation-name: headShake;
          animation-name: headShake;
        }

        @-webkit-keyframes swing {
          20% {
            -webkit-transform: rotate3d(0, 0, 1, 15deg);
            transform: rotate3d(0, 0, 1, 15deg);
          }

          40% {
            -webkit-transform: rotate3d(0, 0, 1, -10deg);
            transform: rotate3d(0, 0, 1, -10deg);
          }

          60% {
            -webkit-transform: rotate3d(0, 0, 1, 5deg);
            transform: rotate3d(0, 0, 1, 5deg);
          }

          80% {
            -webkit-transform: rotate3d(0, 0, 1, -5deg);
            transform: rotate3d(0, 0, 1, -5deg);
          }

          to {
            -webkit-transform: rotate3d(0, 0, 1, 0deg);
            transform: rotate3d(0, 0, 1, 0deg);
          }
        }

        @keyframes swing {
          20% {
            -webkit-transform: rotate3d(0, 0, 1, 15deg);
            transform: rotate3d(0, 0, 1, 15deg);
          }

          40% {
            -webkit-transform: rotate3d(0, 0, 1, -10deg);
            transform: rotate3d(0, 0, 1, -10deg);
          }

          60% {
            -webkit-transform: rotate3d(0, 0, 1, 5deg);
            transform: rotate3d(0, 0, 1, 5deg);
          }

          80% {
            -webkit-transform: rotate3d(0, 0, 1, -5deg);
            transform: rotate3d(0, 0, 1, -5deg);
          }

          to {
            -webkit-transform: rotate3d(0, 0, 1, 0deg);
            transform: rotate3d(0, 0, 1, 0deg);
          }
        }

        .swing {
          -webkit-transform-origin: top center;
          transform-origin: top center;
          -webkit-animation-name: swing;
          animation-name: swing;
        }

        @-webkit-keyframes tada {
          from {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
          }

          10%,
          20% {
            -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
            transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
          }

          30%,
          50%,
          70%,
          90% {
            -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
          }

          40%,
          60%,
          80% {
            -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
          }

          to {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
          }
        }

        @keyframes tada {
          from {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
          }

          10%,
          20% {
            -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
            transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
          }

          30%,
          50%,
          70%,
          90% {
            -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
          }

          40%,
          60%,
          80% {
            -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
          }

          to {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
          }
        }

        .tada {
          -webkit-animation-name: tada;
          animation-name: tada;
        }

        /* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

        @-webkit-keyframes wobble {
          from {
            -webkit-transform: none;
            transform: none;
          }

          15% {
            -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
            transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
          }

          30% {
            -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
            transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
          }

          45% {
            -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
            transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
          }

          60% {
            -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
            transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
          }

          75% {
            -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
            transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
          }

          to {
            -webkit-transform: none;
            transform: none;
          }
        }

        @keyframes wobble {
          from {
            -webkit-transform: none;
            transform: none;
          }

          15% {
            -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
            transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
          }

          30% {
            -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
            transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
          }

          45% {
            -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
            transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
          }

          60% {
            -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
            transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
          }

          75% {
            -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
            transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
          }

          to {
            -webkit-transform: none;
            transform: none;
          }
        }

        .wobble {
          -webkit-animation-name: wobble;
          animation-name: wobble;
        }

        @-webkit-keyframes jello {
          from,
          11.1%,
          to {
            -webkit-transform: none;
            transform: none;
          }

          22.2% {
            -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
            transform: skewX(-12.5deg) skewY(-12.5deg);
          }

          33.3% {
            -webkit-transform: skewX(6.25deg) skewY(6.25deg);
            transform: skewX(6.25deg) skewY(6.25deg);
          }

          44.4% {
            -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
            transform: skewX(-3.125deg) skewY(-3.125deg);
          }

          55.5% {
            -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
            transform: skewX(1.5625deg) skewY(1.5625deg);
          }

          66.6% {
            -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
            transform: skewX(-0.78125deg) skewY(-0.78125deg);
          }

          77.7% {
            -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
            transform: skewX(0.390625deg) skewY(0.390625deg);
          }

          88.8% {
            -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
            transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
          }
        }

        @keyframes jello {
          from,
          11.1%,
          to {
            -webkit-transform: none;
            transform: none;
          }

          22.2% {
            -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
            transform: skewX(-12.5deg) skewY(-12.5deg);
          }

          33.3% {
            -webkit-transform: skewX(6.25deg) skewY(6.25deg);
            transform: skewX(6.25deg) skewY(6.25deg);
          }

          44.4% {
            -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
            transform: skewX(-3.125deg) skewY(-3.125deg);
          }

          55.5% {
            -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
            transform: skewX(1.5625deg) skewY(1.5625deg);
          }

          66.6% {
            -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
            transform: skewX(-0.78125deg) skewY(-0.78125deg);
          }

          77.7% {
            -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
            transform: skewX(0.390625deg) skewY(0.390625deg);
          }

          88.8% {
            -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
            transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
          }
        }

        .jello {
          -webkit-animation-name: jello;
          animation-name: jello;
          -webkit-transform-origin: center;
          transform-origin: center;
        }

        @-webkit-keyframes bounceIn {
          from,
          20%,
          40%,
          60%,
          80%,
          to {
            -webkit-animation-timing-function: cubic-bezier(
              0.215,
              0.61,
              0.355,
              1
            );
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }

          0% {
            opacity: 0;
            -webkit-transform: scale3d(0.3, 0.3, 0.3);
            transform: scale3d(0.3, 0.3, 0.3);
          }

          20% {
            -webkit-transform: scale3d(1.1, 1.1, 1.1);
            transform: scale3d(1.1, 1.1, 1.1);
          }

          40% {
            -webkit-transform: scale3d(0.9, 0.9, 0.9);
            transform: scale3d(0.9, 0.9, 0.9);
          }

          60% {
            opacity: 1;
            -webkit-transform: scale3d(1.03, 1.03, 1.03);
            transform: scale3d(1.03, 1.03, 1.03);
          }

          80% {
            -webkit-transform: scale3d(0.97, 0.97, 0.97);
            transform: scale3d(0.97, 0.97, 0.97);
          }

          to {
            opacity: 1;
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
          }
        }

        @keyframes bounceIn {
          from,
          20%,
          40%,
          60%,
          80%,
          to {
            -webkit-animation-timing-function: cubic-bezier(
              0.215,
              0.61,
              0.355,
              1
            );
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }

          0% {
            opacity: 0;
            -webkit-transform: scale3d(0.3, 0.3, 0.3);
            transform: scale3d(0.3, 0.3, 0.3);
          }

          20% {
            -webkit-transform: scale3d(1.1, 1.1, 1.1);
            transform: scale3d(1.1, 1.1, 1.1);
          }

          40% {
            -webkit-transform: scale3d(0.9, 0.9, 0.9);
            transform: scale3d(0.9, 0.9, 0.9);
          }

          60% {
            opacity: 1;
            -webkit-transform: scale3d(1.03, 1.03, 1.03);
            transform: scale3d(1.03, 1.03, 1.03);
          }

          80% {
            -webkit-transform: scale3d(0.97, 0.97, 0.97);
            transform: scale3d(0.97, 0.97, 0.97);
          }

          to {
            opacity: 1;
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
          }
        }

        .bounceIn {
          -webkit-animation-name: bounceIn;
          animation-name: bounceIn;
        }

        @-webkit-keyframes bounceInDown {
          from,
          60%,
          75%,
          90%,
          to {
            -webkit-animation-timing-function: cubic-bezier(
              0.215,
              0.61,
              0.355,
              1
            );
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }

          0% {
            opacity: 0;
            -webkit-transform: translate3d(0, -3000px, 0);
            transform: translate3d(0, -3000px, 0);
          }

          60% {
            opacity: 1;
            -webkit-transform: translate3d(0, 25px, 0);
            transform: translate3d(0, 25px, 0);
          }

          75% {
            -webkit-transform: translate3d(0, -10px, 0);
            transform: translate3d(0, -10px, 0);
          }

          90% {
            -webkit-transform: translate3d(0, 5px, 0);
            transform: translate3d(0, 5px, 0);
          }

          to {
            -webkit-transform: none;
            transform: none;
          }
        }

        @keyframes bounceInDown {
          from,
          60%,
          75%,
          90%,
          to {
            -webkit-animation-timing-function: cubic-bezier(
              0.215,
              0.61,
              0.355,
              1
            );
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }

          0% {
            opacity: 0;
            -webkit-transform: translate3d(0, -3000px, 0);
            transform: translate3d(0, -3000px, 0);
          }

          60% {
            opacity: 1;
            -webkit-transform: translate3d(0, 25px, 0);
            transform: translate3d(0, 25px, 0);
          }

          75% {
            -webkit-transform: translate3d(0, -10px, 0);
            transform: translate3d(0, -10px, 0);
          }

          90% {
            -webkit-transform: translate3d(0, 5px, 0);
            transform: translate3d(0, 5px, 0);
          }

          to {
            -webkit-transform: none;
            transform: none;
          }
        }

        .bounceInDown {
          -webkit-animation-name: bounceInDown;
          animation-name: bounceInDown;
        }

        @-webkit-keyframes bounceInLeft {
          from,
          60%,
          75%,
          90%,
          to {
            -webkit-animation-timing-function: cubic-bezier(
              0.215,
              0.61,
              0.355,
              1
            );
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }

          0% {
            opacity: 0;
            -webkit-transform: translate3d(-3000px, 0, 0);
            transform: translate3d(-3000px, 0, 0);
          }

          60% {
            opacity: 1;
            -webkit-transform: translate3d(25px, 0, 0);
            transform: translate3d(25px, 0, 0);
          }

          75% {
            -webkit-transform: translate3d(-10px, 0, 0);
            transform: translate3d(-10px, 0, 0);
          }

          90% {
            -webkit-transform: translate3d(5px, 0, 0);
            transform: translate3d(5px, 0, 0);
          }

          to {
            -webkit-transform: none;
            transform: none;
          }
        }

        @keyframes bounceInLeft {
          from,
          60%,
          75%,
          90%,
          to {
            -webkit-animation-timing-function: cubic-bezier(
              0.215,
              0.61,
              0.355,
              1
            );
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }

          0% {
            opacity: 0;
            -webkit-transform: translate3d(-3000px, 0, 0);
            transform: translate3d(-3000px, 0, 0);
          }

          60% {
            opacity: 1;
            -webkit-transform: translate3d(25px, 0, 0);
            transform: translate3d(25px, 0, 0);
          }

          75% {
            -webkit-transform: translate3d(-10px, 0, 0);
            transform: translate3d(-10px, 0, 0);
          }

          90% {
            -webkit-transform: translate3d(5px, 0, 0);
            transform: translate3d(5px, 0, 0);
          }

          to {
            -webkit-transform: none;
            transform: none;
          }
        }

        .bounceInLeft {
          -webkit-animation-name: bounceInLeft;
          animation-name: bounceInLeft;
        }

        @-webkit-keyframes bounceInRight {
          from,
          60%,
          75%,
          90%,
          to {
            -webkit-animation-timing-function: cubic-bezier(
              0.215,
              0.61,
              0.355,
              1
            );
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }

          from {
            opacity: 0;
            -webkit-transform: translate3d(3000px, 0, 0);
            transform: translate3d(3000px, 0, 0);
          }

          60% {
            opacity: 1;
            -webkit-transform: translate3d(-25px, 0, 0);
            transform: translate3d(-25px, 0, 0);
          }

          75% {
            -webkit-transform: translate3d(10px, 0, 0);
            transform: translate3d(10px, 0, 0);
          }

          90% {
            -webkit-transform: translate3d(-5px, 0, 0);
            transform: translate3d(-5px, 0, 0);
          }

          to {
            -webkit-transform: none;
            transform: none;
          }
        }

        @keyframes bounceInRight {
          from,
          60%,
          75%,
          90%,
          to {
            -webkit-animation-timing-function: cubic-bezier(
              0.215,
              0.61,
              0.355,
              1
            );
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }

          from {
            opacity: 0;
            -webkit-transform: translate3d(3000px, 0, 0);
            transform: translate3d(3000px, 0, 0);
          }

          60% {
            opacity: 1;
            -webkit-transform: translate3d(-25px, 0, 0);
            transform: translate3d(-25px, 0, 0);
          }

          75% {
            -webkit-transform: translate3d(10px, 0, 0);
            transform: translate3d(10px, 0, 0);
          }

          90% {
            -webkit-transform: translate3d(-5px, 0, 0);
            transform: translate3d(-5px, 0, 0);
          }

          to {
            -webkit-transform: none;
            transform: none;
          }
        }

        .bounceInRight {
          -webkit-animation-name: bounceInRight;
          animation-name: bounceInRight;
        }

        @-webkit-keyframes bounceInUp {
          from,
          60%,
          75%,
          90%,
          to {
            -webkit-animation-timing-function: cubic-bezier(
              0.215,
              0.61,
              0.355,
              1
            );
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }

          from {
            opacity: 0;
            -webkit-transform: translate3d(0, 3000px, 0);
            transform: translate3d(0, 3000px, 0);
          }

          60% {
            opacity: 1;
            -webkit-transform: translate3d(0, -20px, 0);
            transform: translate3d(0, -20px, 0);
          }

          75% {
            -webkit-transform: translate3d(0, 10px, 0);
            transform: translate3d(0, 10px, 0);
          }

          90% {
            -webkit-transform: translate3d(0, -5px, 0);
            transform: translate3d(0, -5px, 0);
          }

          to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes bounceInUp {
          from,
          60%,
          75%,
          90%,
          to {
            -webkit-animation-timing-function: cubic-bezier(
              0.215,
              0.61,
              0.355,
              1
            );
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
          }

          from {
            opacity: 0;
            -webkit-transform: translate3d(0, 3000px, 0);
            transform: translate3d(0, 3000px, 0);
          }

          60% {
            opacity: 1;
            -webkit-transform: translate3d(0, -20px, 0);
            transform: translate3d(0, -20px, 0);
          }

          75% {
            -webkit-transform: translate3d(0, 10px, 0);
            transform: translate3d(0, 10px, 0);
          }

          90% {
            -webkit-transform: translate3d(0, -5px, 0);
            transform: translate3d(0, -5px, 0);
          }

          to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
        }

        .bounceInUp {
          -webkit-animation-name: bounceInUp;
          animation-name: bounceInUp;
        }

        @-webkit-keyframes bounceOut {
          20% {
            -webkit-transform: scale3d(0.9, 0.9, 0.9);
            transform: scale3d(0.9, 0.9, 0.9);
          }

          50%,
          55% {
            opacity: 1;
            -webkit-transform: scale3d(1.1, 1.1, 1.1);
            transform: scale3d(1.1, 1.1, 1.1);
          }

          to {
            opacity: 0;
            -webkit-transform: scale3d(0.3, 0.3, 0.3);
            transform: scale3d(0.3, 0.3, 0.3);
          }
        }

        @keyframes bounceOut {
          20% {
            -webkit-transform: scale3d(0.9, 0.9, 0.9);
            transform: scale3d(0.9, 0.9, 0.9);
          }

          50%,
          55% {
            opacity: 1;
            -webkit-transform: scale3d(1.1, 1.1, 1.1);
            transform: scale3d(1.1, 1.1, 1.1);
          }

          to {
            opacity: 0;
            -webkit-transform: scale3d(0.3, 0.3, 0.3);
            transform: scale3d(0.3, 0.3, 0.3);
          }
        }

        .bounceOut {
          -webkit-animation-name: bounceOut;
          animation-name: bounceOut;
        }

        @-webkit-keyframes bounceOutDown {
          20% {
            -webkit-transform: translate3d(0, 10px, 0);
            transform: translate3d(0, 10px, 0);
          }

          40%,
          45% {
            opacity: 1;
            -webkit-transform: translate3d(0, -20px, 0);
            transform: translate3d(0, -20px, 0);
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(0, 2000px, 0);
            transform: translate3d(0, 2000px, 0);
          }
        }

        @keyframes bounceOutDown {
          20% {
            -webkit-transform: translate3d(0, 10px, 0);
            transform: translate3d(0, 10px, 0);
          }

          40%,
          45% {
            opacity: 1;
            -webkit-transform: translate3d(0, -20px, 0);
            transform: translate3d(0, -20px, 0);
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(0, 2000px, 0);
            transform: translate3d(0, 2000px, 0);
          }
        }

        .bounceOutDown {
          -webkit-animation-name: bounceOutDown;
          animation-name: bounceOutDown;
        }

        @-webkit-keyframes bounceOutLeft {
          20% {
            opacity: 1;
            -webkit-transform: translate3d(20px, 0, 0);
            transform: translate3d(20px, 0, 0);
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(-2000px, 0, 0);
            transform: translate3d(-2000px, 0, 0);
          }
        }

        @keyframes bounceOutLeft {
          20% {
            opacity: 1;
            -webkit-transform: translate3d(20px, 0, 0);
            transform: translate3d(20px, 0, 0);
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(-2000px, 0, 0);
            transform: translate3d(-2000px, 0, 0);
          }
        }

        .bounceOutLeft {
          -webkit-animation-name: bounceOutLeft;
          animation-name: bounceOutLeft;
        }

        @-webkit-keyframes bounceOutRight {
          20% {
            opacity: 1;
            -webkit-transform: translate3d(-20px, 0, 0);
            transform: translate3d(-20px, 0, 0);
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(2000px, 0, 0);
            transform: translate3d(2000px, 0, 0);
          }
        }

        @keyframes bounceOutRight {
          20% {
            opacity: 1;
            -webkit-transform: translate3d(-20px, 0, 0);
            transform: translate3d(-20px, 0, 0);
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(2000px, 0, 0);
            transform: translate3d(2000px, 0, 0);
          }
        }

        .bounceOutRight {
          -webkit-animation-name: bounceOutRight;
          animation-name: bounceOutRight;
        }

        @-webkit-keyframes bounceOutUp {
          20% {
            -webkit-transform: translate3d(0, -10px, 0);
            transform: translate3d(0, -10px, 0);
          }

          40%,
          45% {
            opacity: 1;
            -webkit-transform: translate3d(0, 20px, 0);
            transform: translate3d(0, 20px, 0);
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(0, -2000px, 0);
            transform: translate3d(0, -2000px, 0);
          }
        }

        @keyframes bounceOutUp {
          20% {
            -webkit-transform: translate3d(0, -10px, 0);
            transform: translate3d(0, -10px, 0);
          }

          40%,
          45% {
            opacity: 1;
            -webkit-transform: translate3d(0, 20px, 0);
            transform: translate3d(0, 20px, 0);
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(0, -2000px, 0);
            transform: translate3d(0, -2000px, 0);
          }
        }

        .bounceOutUp {
          -webkit-animation-name: bounceOutUp;
          animation-name: bounceOutUp;
        }

        @-webkit-keyframes fadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        .fadeIn {
          -webkit-animation-name: fadeIn;
          animation-name: fadeIn;
        }

        @-webkit-keyframes fadeInDown {
          from {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
          }

          to {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
          }

          to {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
          }
        }

        .fadeInDown {
          -webkit-animation-name: fadeInDown;
          animation-name: fadeInDown;
        }

        @-webkit-keyframes fadeInDownBig {
          from {
            opacity: 0;
            -webkit-transform: translate3d(0, -2000px, 0);
            transform: translate3d(0, -2000px, 0);
          }

          to {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
          }
        }

        @keyframes fadeInDownBig {
          from {
            opacity: 0;
            -webkit-transform: translate3d(0, -2000px, 0);
            transform: translate3d(0, -2000px, 0);
          }

          to {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
          }
        }

        .fadeInDownBig {
          -webkit-animation-name: fadeInDownBig;
          animation-name: fadeInDownBig;
        }

        @-webkit-keyframes fadeInLeft {
          from {
            opacity: 0;
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
          }

          to {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
          }

          to {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
          }
        }

        .fadeInLeft {
          -webkit-animation-name: fadeInLeft;
          animation-name: fadeInLeft;
        }

        @-webkit-keyframes fadeInLeftBig {
          from {
            opacity: 0;
            -webkit-transform: translate3d(-2000px, 0, 0);
            transform: translate3d(-2000px, 0, 0);
          }

          to {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
          }
        }

        @keyframes fadeInLeftBig {
          from {
            opacity: 0;
            -webkit-transform: translate3d(-2000px, 0, 0);
            transform: translate3d(-2000px, 0, 0);
          }

          to {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
          }
        }

        .fadeInLeftBig {
          -webkit-animation-name: fadeInLeftBig;
          animation-name: fadeInLeftBig;
        }

        @-webkit-keyframes fadeInRight {
          from {
            opacity: 0;
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
          }

          to {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
          }

          to {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
          }
        }

        .fadeInRight {
          -webkit-animation-name: fadeInRight;
          animation-name: fadeInRight;
        }

        @-webkit-keyframes fadeInRightBig {
          from {
            opacity: 0;
            -webkit-transform: translate3d(2000px, 0, 0);
            transform: translate3d(2000px, 0, 0);
          }

          to {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
          }
        }

        @keyframes fadeInRightBig {
          from {
            opacity: 0;
            -webkit-transform: translate3d(2000px, 0, 0);
            transform: translate3d(2000px, 0, 0);
          }

          to {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
          }
        }

        .fadeInRightBig {
          -webkit-animation-name: fadeInRightBig;
          animation-name: fadeInRightBig;
        }

        @-webkit-keyframes fadeInUp {
          from {
            opacity: 0;
            -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
          }

          to {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
          }

          to {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
          }
        }

        .fadeInUp {
          -webkit-animation-name: fadeInUp;
          animation-name: fadeInUp;
        }

        @-webkit-keyframes fadeInUpBig {
          from {
            opacity: 0;
            -webkit-transform: translate3d(0, 2000px, 0);
            transform: translate3d(0, 2000px, 0);
          }

          to {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
          }
        }

        @keyframes fadeInUpBig {
          from {
            opacity: 0;
            -webkit-transform: translate3d(0, 2000px, 0);
            transform: translate3d(0, 2000px, 0);
          }

          to {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
          }
        }

        .fadeInUpBig {
          -webkit-animation-name: fadeInUpBig;
          animation-name: fadeInUpBig;
        }

        @-webkit-keyframes fadeOut {
          from {
            opacity: 1;
          }

          to {
            opacity: 0;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }

          to {
            opacity: 0;
          }
        }

        .fadeOut {
          -webkit-animation-name: fadeOut;
          animation-name: fadeOut;
        }

        @-webkit-keyframes fadeOutDown {
          from {
            opacity: 1;
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
          }
        }

        @keyframes fadeOutDown {
          from {
            opacity: 1;
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
          }
        }

        .fadeOutDown {
          -webkit-animation-name: fadeOutDown;
          animation-name: fadeOutDown;
        }

        @-webkit-keyframes fadeOutDownBig {
          from {
            opacity: 1;
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(0, 2000px, 0);
            transform: translate3d(0, 2000px, 0);
          }
        }

        @keyframes fadeOutDownBig {
          from {
            opacity: 1;
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(0, 2000px, 0);
            transform: translate3d(0, 2000px, 0);
          }
        }

        .fadeOutDownBig {
          -webkit-animation-name: fadeOutDownBig;
          animation-name: fadeOutDownBig;
        }

        @-webkit-keyframes fadeOutLeft {
          from {
            opacity: 1;
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
          }
        }

        @keyframes fadeOutLeft {
          from {
            opacity: 1;
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
          }
        }

        .fadeOutLeft {
          -webkit-animation-name: fadeOutLeft;
          animation-name: fadeOutLeft;
        }

        @-webkit-keyframes fadeOutLeftBig {
          from {
            opacity: 1;
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(-2000px, 0, 0);
            transform: translate3d(-2000px, 0, 0);
          }
        }

        @keyframes fadeOutLeftBig {
          from {
            opacity: 1;
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(-2000px, 0, 0);
            transform: translate3d(-2000px, 0, 0);
          }
        }

        .fadeOutLeftBig {
          -webkit-animation-name: fadeOutLeftBig;
          animation-name: fadeOutLeftBig;
        }

        @-webkit-keyframes fadeOutRight {
          from {
            opacity: 1;
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
          }
        }

        @keyframes fadeOutRight {
          from {
            opacity: 1;
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
          }
        }

        .fadeOutRight {
          -webkit-animation-name: fadeOutRight;
          animation-name: fadeOutRight;
        }

        @-webkit-keyframes fadeOutRightBig {
          from {
            opacity: 1;
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(2000px, 0, 0);
            transform: translate3d(2000px, 0, 0);
          }
        }

        @keyframes fadeOutRightBig {
          from {
            opacity: 1;
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(2000px, 0, 0);
            transform: translate3d(2000px, 0, 0);
          }
        }

        .fadeOutRightBig {
          -webkit-animation-name: fadeOutRightBig;
          animation-name: fadeOutRightBig;
        }

        @-webkit-keyframes fadeOutUp {
          from {
            opacity: 1;
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
          }
        }

        @keyframes fadeOutUp {
          from {
            opacity: 1;
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
          }
        }

        .fadeOutUp {
          -webkit-animation-name: fadeOutUp;
          animation-name: fadeOutUp;
        }

        @-webkit-keyframes fadeOutUpBig {
          from {
            opacity: 1;
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(0, -2000px, 0);
            transform: translate3d(0, -2000px, 0);
          }
        }

        @keyframes fadeOutUpBig {
          from {
            opacity: 1;
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(0, -2000px, 0);
            transform: translate3d(0, -2000px, 0);
          }
        }

        .fadeOutUpBig {
          -webkit-animation-name: fadeOutUpBig;
          animation-name: fadeOutUpBig;
        }

        @-webkit-keyframes flip {
          from {
            -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
            transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
            -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
          }

          40% {
            -webkit-transform: perspective(400px) translate3d(0, 0, 150px)
              rotate3d(0, 1, 0, -190deg);
            transform: perspective(400px) translate3d(0, 0, 150px)
              rotate3d(0, 1, 0, -190deg);
            -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
          }

          50% {
            -webkit-transform: perspective(400px) translate3d(0, 0, 150px)
              rotate3d(0, 1, 0, -170deg);
            transform: perspective(400px) translate3d(0, 0, 150px)
              rotate3d(0, 1, 0, -170deg);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
          }

          80% {
            -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95);
            transform: perspective(400px) scale3d(0.95, 0.95, 0.95);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
          }

          to {
            -webkit-transform: perspective(400px);
            transform: perspective(400px);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
          }
        }

        @keyframes flip {
          from {
            -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
            transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
            -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
          }

          40% {
            -webkit-transform: perspective(400px) translate3d(0, 0, 150px)
              rotate3d(0, 1, 0, -190deg);
            transform: perspective(400px) translate3d(0, 0, 150px)
              rotate3d(0, 1, 0, -190deg);
            -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
          }

          50% {
            -webkit-transform: perspective(400px) translate3d(0, 0, 150px)
              rotate3d(0, 1, 0, -170deg);
            transform: perspective(400px) translate3d(0, 0, 150px)
              rotate3d(0, 1, 0, -170deg);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
          }

          80% {
            -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95);
            transform: perspective(400px) scale3d(0.95, 0.95, 0.95);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
          }

          to {
            -webkit-transform: perspective(400px);
            transform: perspective(400px);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
          }
        }

        .animated.flip {
          -webkit-backface-visibility: visible;
          backface-visibility: visible;
          -webkit-animation-name: flip;
          animation-name: flip;
        }

        @-webkit-keyframes flipInX {
          from {
            -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
            transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
            opacity: 0;
          }

          40% {
            -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
            transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
          }

          60% {
            -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
            transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
            opacity: 1;
          }

          80% {
            -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
            transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
          }

          to {
            -webkit-transform: perspective(400px);
            transform: perspective(400px);
          }
        }

        @keyframes flipInX {
          from {
            -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
            transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
            opacity: 0;
          }

          40% {
            -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
            transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
          }

          60% {
            -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
            transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
            opacity: 1;
          }

          80% {
            -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
            transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
          }

          to {
            -webkit-transform: perspective(400px);
            transform: perspective(400px);
          }
        }

        .flipInX {
          -webkit-backface-visibility: visible !important;
          backface-visibility: visible !important;
          -webkit-animation-name: flipInX;
          animation-name: flipInX;
        }

        @-webkit-keyframes flipInY {
          from {
            -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
            transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
            opacity: 0;
          }

          40% {
            -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
            transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
          }

          60% {
            -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
            transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
            opacity: 1;
          }

          80% {
            -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
            transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
          }

          to {
            -webkit-transform: perspective(400px);
            transform: perspective(400px);
          }
        }

        @keyframes flipInY {
          from {
            -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
            transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
            opacity: 0;
          }

          40% {
            -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
            transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
          }

          60% {
            -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
            transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
            opacity: 1;
          }

          80% {
            -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
            transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
          }

          to {
            -webkit-transform: perspective(400px);
            transform: perspective(400px);
          }
        }

        .flipInY {
          -webkit-backface-visibility: visible !important;
          backface-visibility: visible !important;
          -webkit-animation-name: flipInY;
          animation-name: flipInY;
        }

        @-webkit-keyframes flipOutX {
          from {
            -webkit-transform: perspective(400px);
            transform: perspective(400px);
          }

          30% {
            -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
            transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
            opacity: 1;
          }

          to {
            -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
            transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
            opacity: 0;
          }
        }

        @keyframes flipOutX {
          from {
            -webkit-transform: perspective(400px);
            transform: perspective(400px);
          }

          30% {
            -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
            transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
            opacity: 1;
          }

          to {
            -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
            transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
            opacity: 0;
          }
        }

        .flipOutX {
          -webkit-animation-name: flipOutX;
          animation-name: flipOutX;
          -webkit-backface-visibility: visible !important;
          backface-visibility: visible !important;
        }

        @-webkit-keyframes flipOutY {
          from {
            -webkit-transform: perspective(400px);
            transform: perspective(400px);
          }

          30% {
            -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
            transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
            opacity: 1;
          }

          to {
            -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
            transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
            opacity: 0;
          }
        }

        @keyframes flipOutY {
          from {
            -webkit-transform: perspective(400px);
            transform: perspective(400px);
          }

          30% {
            -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
            transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
            opacity: 1;
          }

          to {
            -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
            transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
            opacity: 0;
          }
        }

        .flipOutY {
          -webkit-backface-visibility: visible !important;
          backface-visibility: visible !important;
          -webkit-animation-name: flipOutY;
          animation-name: flipOutY;
        }

        @-webkit-keyframes lightSpeedIn {
          from {
            -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
            transform: translate3d(100%, 0, 0) skewX(-30deg);
            opacity: 0;
          }

          60% {
            -webkit-transform: skewX(20deg);
            transform: skewX(20deg);
            opacity: 1;
          }

          80% {
            -webkit-transform: skewX(-5deg);
            transform: skewX(-5deg);
            opacity: 1;
          }

          to {
            -webkit-transform: none;
            transform: none;
            opacity: 1;
          }
        }

        @keyframes lightSpeedIn {
          from {
            -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
            transform: translate3d(100%, 0, 0) skewX(-30deg);
            opacity: 0;
          }

          60% {
            -webkit-transform: skewX(20deg);
            transform: skewX(20deg);
            opacity: 1;
          }

          80% {
            -webkit-transform: skewX(-5deg);
            transform: skewX(-5deg);
            opacity: 1;
          }

          to {
            -webkit-transform: none;
            transform: none;
            opacity: 1;
          }
        }

        .lightSpeedIn {
          -webkit-animation-name: lightSpeedIn;
          animation-name: lightSpeedIn;
          -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
        }

        @-webkit-keyframes lightSpeedOut {
          from {
            opacity: 1;
          }

          to {
            -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
            transform: translate3d(100%, 0, 0) skewX(30deg);
            opacity: 0;
          }
        }

        @keyframes lightSpeedOut {
          from {
            opacity: 1;
          }

          to {
            -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
            transform: translate3d(100%, 0, 0) skewX(30deg);
            opacity: 0;
          }
        }

        .lightSpeedOut {
          -webkit-animation-name: lightSpeedOut;
          animation-name: lightSpeedOut;
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
        }

        @-webkit-keyframes rotateIn {
          from {
            -webkit-transform-origin: center;
            transform-origin: center;
            -webkit-transform: rotate3d(0, 0, 1, -200deg);
            transform: rotate3d(0, 0, 1, -200deg);
            opacity: 0;
          }

          to {
            -webkit-transform-origin: center;
            transform-origin: center;
            -webkit-transform: none;
            transform: none;
            opacity: 1;
          }
        }

        @keyframes rotateIn {
          from {
            -webkit-transform-origin: center;
            transform-origin: center;
            -webkit-transform: rotate3d(0, 0, 1, -200deg);
            transform: rotate3d(0, 0, 1, -200deg);
            opacity: 0;
          }

          to {
            -webkit-transform-origin: center;
            transform-origin: center;
            -webkit-transform: none;
            transform: none;
            opacity: 1;
          }
        }

        .rotateIn {
          -webkit-animation-name: rotateIn;
          animation-name: rotateIn;
        }

        @-webkit-keyframes rotateInDownLeft {
          from {
            -webkit-transform-origin: left bottom;
            transform-origin: left bottom;
            -webkit-transform: rotate3d(0, 0, 1, -45deg);
            transform: rotate3d(0, 0, 1, -45deg);
            opacity: 0;
          }

          to {
            -webkit-transform-origin: left bottom;
            transform-origin: left bottom;
            -webkit-transform: none;
            transform: none;
            opacity: 1;
          }
        }

        @keyframes rotateInDownLeft {
          from {
            -webkit-transform-origin: left bottom;
            transform-origin: left bottom;
            -webkit-transform: rotate3d(0, 0, 1, -45deg);
            transform: rotate3d(0, 0, 1, -45deg);
            opacity: 0;
          }

          to {
            -webkit-transform-origin: left bottom;
            transform-origin: left bottom;
            -webkit-transform: none;
            transform: none;
            opacity: 1;
          }
        }

        .rotateInDownLeft {
          -webkit-animation-name: rotateInDownLeft;
          animation-name: rotateInDownLeft;
        }

        @-webkit-keyframes rotateInDownRight {
          from {
            -webkit-transform-origin: right bottom;
            transform-origin: right bottom;
            -webkit-transform: rotate3d(0, 0, 1, 45deg);
            transform: rotate3d(0, 0, 1, 45deg);
            opacity: 0;
          }

          to {
            -webkit-transform-origin: right bottom;
            transform-origin: right bottom;
            -webkit-transform: none;
            transform: none;
            opacity: 1;
          }
        }

        @keyframes rotateInDownRight {
          from {
            -webkit-transform-origin: right bottom;
            transform-origin: right bottom;
            -webkit-transform: rotate3d(0, 0, 1, 45deg);
            transform: rotate3d(0, 0, 1, 45deg);
            opacity: 0;
          }

          to {
            -webkit-transform-origin: right bottom;
            transform-origin: right bottom;
            -webkit-transform: none;
            transform: none;
            opacity: 1;
          }
        }

        .rotateInDownRight {
          -webkit-animation-name: rotateInDownRight;
          animation-name: rotateInDownRight;
        }

        @-webkit-keyframes rotateInUpLeft {
          from {
            -webkit-transform-origin: left bottom;
            transform-origin: left bottom;
            -webkit-transform: rotate3d(0, 0, 1, 45deg);
            transform: rotate3d(0, 0, 1, 45deg);
            opacity: 0;
          }

          to {
            -webkit-transform-origin: left bottom;
            transform-origin: left bottom;
            -webkit-transform: none;
            transform: none;
            opacity: 1;
          }
        }

        @keyframes rotateInUpLeft {
          from {
            -webkit-transform-origin: left bottom;
            transform-origin: left bottom;
            -webkit-transform: rotate3d(0, 0, 1, 45deg);
            transform: rotate3d(0, 0, 1, 45deg);
            opacity: 0;
          }

          to {
            -webkit-transform-origin: left bottom;
            transform-origin: left bottom;
            -webkit-transform: none;
            transform: none;
            opacity: 1;
          }
        }

        .rotateInUpLeft {
          -webkit-animation-name: rotateInUpLeft;
          animation-name: rotateInUpLeft;
        }

        @-webkit-keyframes rotateInUpRight {
          from {
            -webkit-transform-origin: right bottom;
            transform-origin: right bottom;
            -webkit-transform: rotate3d(0, 0, 1, -90deg);
            transform: rotate3d(0, 0, 1, -90deg);
            opacity: 0;
          }

          to {
            -webkit-transform-origin: right bottom;
            transform-origin: right bottom;
            -webkit-transform: none;
            transform: none;
            opacity: 1;
          }
        }

        @keyframes rotateInUpRight {
          from {
            -webkit-transform-origin: right bottom;
            transform-origin: right bottom;
            -webkit-transform: rotate3d(0, 0, 1, -90deg);
            transform: rotate3d(0, 0, 1, -90deg);
            opacity: 0;
          }

          to {
            -webkit-transform-origin: right bottom;
            transform-origin: right bottom;
            -webkit-transform: none;
            transform: none;
            opacity: 1;
          }
        }

        .rotateInUpRight {
          -webkit-animation-name: rotateInUpRight;
          animation-name: rotateInUpRight;
        }

        @-webkit-keyframes rotateOut {
          from {
            -webkit-transform-origin: center;
            transform-origin: center;
            opacity: 1;
          }

          to {
            -webkit-transform-origin: center;
            transform-origin: center;
            -webkit-transform: rotate3d(0, 0, 1, 200deg);
            transform: rotate3d(0, 0, 1, 200deg);
            opacity: 0;
          }
        }

        @keyframes rotateOut {
          from {
            -webkit-transform-origin: center;
            transform-origin: center;
            opacity: 1;
          }

          to {
            -webkit-transform-origin: center;
            transform-origin: center;
            -webkit-transform: rotate3d(0, 0, 1, 200deg);
            transform: rotate3d(0, 0, 1, 200deg);
            opacity: 0;
          }
        }

        .rotateOut {
          -webkit-animation-name: rotateOut;
          animation-name: rotateOut;
        }

        @-webkit-keyframes rotateOutDownLeft {
          from {
            -webkit-transform-origin: left bottom;
            transform-origin: left bottom;
            opacity: 1;
          }

          to {
            -webkit-transform-origin: left bottom;
            transform-origin: left bottom;
            -webkit-transform: rotate3d(0, 0, 1, 45deg);
            transform: rotate3d(0, 0, 1, 45deg);
            opacity: 0;
          }
        }

        @keyframes rotateOutDownLeft {
          from {
            -webkit-transform-origin: left bottom;
            transform-origin: left bottom;
            opacity: 1;
          }

          to {
            -webkit-transform-origin: left bottom;
            transform-origin: left bottom;
            -webkit-transform: rotate3d(0, 0, 1, 45deg);
            transform: rotate3d(0, 0, 1, 45deg);
            opacity: 0;
          }
        }

        .rotateOutDownLeft {
          -webkit-animation-name: rotateOutDownLeft;
          animation-name: rotateOutDownLeft;
        }

        @-webkit-keyframes rotateOutDownRight {
          from {
            -webkit-transform-origin: right bottom;
            transform-origin: right bottom;
            opacity: 1;
          }

          to {
            -webkit-transform-origin: right bottom;
            transform-origin: right bottom;
            -webkit-transform: rotate3d(0, 0, 1, -45deg);
            transform: rotate3d(0, 0, 1, -45deg);
            opacity: 0;
          }
        }

        @keyframes rotateOutDownRight {
          from {
            -webkit-transform-origin: right bottom;
            transform-origin: right bottom;
            opacity: 1;
          }

          to {
            -webkit-transform-origin: right bottom;
            transform-origin: right bottom;
            -webkit-transform: rotate3d(0, 0, 1, -45deg);
            transform: rotate3d(0, 0, 1, -45deg);
            opacity: 0;
          }
        }

        .rotateOutDownRight {
          -webkit-animation-name: rotateOutDownRight;
          animation-name: rotateOutDownRight;
        }

        @-webkit-keyframes rotateOutUpLeft {
          from {
            -webkit-transform-origin: left bottom;
            transform-origin: left bottom;
            opacity: 1;
          }

          to {
            -webkit-transform-origin: left bottom;
            transform-origin: left bottom;
            -webkit-transform: rotate3d(0, 0, 1, -45deg);
            transform: rotate3d(0, 0, 1, -45deg);
            opacity: 0;
          }
        }

        @keyframes rotateOutUpLeft {
          from {
            -webkit-transform-origin: left bottom;
            transform-origin: left bottom;
            opacity: 1;
          }

          to {
            -webkit-transform-origin: left bottom;
            transform-origin: left bottom;
            -webkit-transform: rotate3d(0, 0, 1, -45deg);
            transform: rotate3d(0, 0, 1, -45deg);
            opacity: 0;
          }
        }

        .rotateOutUpLeft {
          -webkit-animation-name: rotateOutUpLeft;
          animation-name: rotateOutUpLeft;
        }

        @-webkit-keyframes rotateOutUpRight {
          from {
            -webkit-transform-origin: right bottom;
            transform-origin: right bottom;
            opacity: 1;
          }

          to {
            -webkit-transform-origin: right bottom;
            transform-origin: right bottom;
            -webkit-transform: rotate3d(0, 0, 1, 90deg);
            transform: rotate3d(0, 0, 1, 90deg);
            opacity: 0;
          }
        }

        @keyframes rotateOutUpRight {
          from {
            -webkit-transform-origin: right bottom;
            transform-origin: right bottom;
            opacity: 1;
          }

          to {
            -webkit-transform-origin: right bottom;
            transform-origin: right bottom;
            -webkit-transform: rotate3d(0, 0, 1, 90deg);
            transform: rotate3d(0, 0, 1, 90deg);
            opacity: 0;
          }
        }

        .rotateOutUpRight {
          -webkit-animation-name: rotateOutUpRight;
          animation-name: rotateOutUpRight;
        }

        @-webkit-keyframes hinge {
          0% {
            -webkit-transform-origin: top left;
            transform-origin: top left;
            -webkit-animation-timing-function: ease-in-out;
            animation-timing-function: ease-in-out;
          }

          20%,
          60% {
            -webkit-transform: rotate3d(0, 0, 1, 80deg);
            transform: rotate3d(0, 0, 1, 80deg);
            -webkit-transform-origin: top left;
            transform-origin: top left;
            -webkit-animation-timing-function: ease-in-out;
            animation-timing-function: ease-in-out;
          }

          40%,
          80% {
            -webkit-transform: rotate3d(0, 0, 1, 60deg);
            transform: rotate3d(0, 0, 1, 60deg);
            -webkit-transform-origin: top left;
            transform-origin: top left;
            -webkit-animation-timing-function: ease-in-out;
            animation-timing-function: ease-in-out;
            opacity: 1;
          }

          to {
            -webkit-transform: translate3d(0, 700px, 0);
            transform: translate3d(0, 700px, 0);
            opacity: 0;
          }
        }

        @keyframes hinge {
          0% {
            -webkit-transform-origin: top left;
            transform-origin: top left;
            -webkit-animation-timing-function: ease-in-out;
            animation-timing-function: ease-in-out;
          }

          20%,
          60% {
            -webkit-transform: rotate3d(0, 0, 1, 80deg);
            transform: rotate3d(0, 0, 1, 80deg);
            -webkit-transform-origin: top left;
            transform-origin: top left;
            -webkit-animation-timing-function: ease-in-out;
            animation-timing-function: ease-in-out;
          }

          40%,
          80% {
            -webkit-transform: rotate3d(0, 0, 1, 60deg);
            transform: rotate3d(0, 0, 1, 60deg);
            -webkit-transform-origin: top left;
            transform-origin: top left;
            -webkit-animation-timing-function: ease-in-out;
            animation-timing-function: ease-in-out;
            opacity: 1;
          }

          to {
            -webkit-transform: translate3d(0, 700px, 0);
            transform: translate3d(0, 700px, 0);
            opacity: 0;
          }
        }

        .hinge {
          -webkit-animation-name: hinge;
          animation-name: hinge;
        }

        /* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

        @-webkit-keyframes rollIn {
          from {
            opacity: 0;
            -webkit-transform: translate3d(-100%, 0, 0)
              rotate3d(0, 0, 1, -120deg);
            transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
          }

          to {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
          }
        }

        @keyframes rollIn {
          from {
            opacity: 0;
            -webkit-transform: translate3d(-100%, 0, 0)
              rotate3d(0, 0, 1, -120deg);
            transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
          }

          to {
            opacity: 1;
            -webkit-transform: none;
            transform: none;
          }
        }

        .rollIn {
          -webkit-animation-name: rollIn;
          animation-name: rollIn;
        }

        /* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

        @-webkit-keyframes rollOut {
          from {
            opacity: 1;
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
            transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
          }
        }

        @keyframes rollOut {
          from {
            opacity: 1;
          }

          to {
            opacity: 0;
            -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
            transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
          }
        }

        .rollOut {
          -webkit-animation-name: rollOut;
          animation-name: rollOut;
        }

        @-webkit-keyframes zoomIn {
          from {
            opacity: 0;
            -webkit-transform: scale3d(0.3, 0.3, 0.3);
            transform: scale3d(0.3, 0.3, 0.3);
          }

          50% {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            -webkit-transform: scale3d(0.3, 0.3, 0.3);
            transform: scale3d(0.3, 0.3, 0.3);
          }

          50% {
            opacity: 1;
          }
        }

        .zoomIn {
          -webkit-animation-name: zoomIn;
          animation-name: zoomIn;
        }

        @-webkit-keyframes zoomInDown {
          from {
            opacity: 0;
            -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
            -webkit-animation-timing-function: cubic-bezier(
              0.55,
              0.055,
              0.675,
              0.19
            );
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
          }

          60% {
            opacity: 1;
            -webkit-transform: scale3d(0.475, 0.475, 0.475)
              translate3d(0, 60px, 0);
            transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
            -webkit-animation-timing-function: cubic-bezier(
              0.175,
              0.885,
              0.32,
              1
            );
            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
          }
        }

        @keyframes zoomInDown {
          from {
            opacity: 0;
            -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
            -webkit-animation-timing-function: cubic-bezier(
              0.55,
              0.055,
              0.675,
              0.19
            );
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
          }

          60% {
            opacity: 1;
            -webkit-transform: scale3d(0.475, 0.475, 0.475)
              translate3d(0, 60px, 0);
            transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
            -webkit-animation-timing-function: cubic-bezier(
              0.175,
              0.885,
              0.32,
              1
            );
            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
          }
        }

        .zoomInDown {
          -webkit-animation-name: zoomInDown;
          animation-name: zoomInDown;
        }

        @-webkit-keyframes zoomInLeft {
          from {
            opacity: 0;
            -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
            transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
            -webkit-animation-timing-function: cubic-bezier(
              0.55,
              0.055,
              0.675,
              0.19
            );
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
          }

          60% {
            opacity: 1;
            -webkit-transform: scale3d(0.475, 0.475, 0.475)
              translate3d(10px, 0, 0);
            transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
            -webkit-animation-timing-function: cubic-bezier(
              0.175,
              0.885,
              0.32,
              1
            );
            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
          }
        }

        @keyframes zoomInLeft {
          from {
            opacity: 0;
            -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
            transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
            -webkit-animation-timing-function: cubic-bezier(
              0.55,
              0.055,
              0.675,
              0.19
            );
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
          }

          60% {
            opacity: 1;
            -webkit-transform: scale3d(0.475, 0.475, 0.475)
              translate3d(10px, 0, 0);
            transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
            -webkit-animation-timing-function: cubic-bezier(
              0.175,
              0.885,
              0.32,
              1
            );
            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
          }
        }

        .zoomInLeft {
          -webkit-animation-name: zoomInLeft;
          animation-name: zoomInLeft;
        }

        @-webkit-keyframes zoomInRight {
          from {
            opacity: 0;
            -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
            transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
            -webkit-animation-timing-function: cubic-bezier(
              0.55,
              0.055,
              0.675,
              0.19
            );
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
          }

          60% {
            opacity: 1;
            -webkit-transform: scale3d(0.475, 0.475, 0.475)
              translate3d(-10px, 0, 0);
            transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
            -webkit-animation-timing-function: cubic-bezier(
              0.175,
              0.885,
              0.32,
              1
            );
            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
          }
        }

        @keyframes zoomInRight {
          from {
            opacity: 0;
            -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
            transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
            -webkit-animation-timing-function: cubic-bezier(
              0.55,
              0.055,
              0.675,
              0.19
            );
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
          }

          60% {
            opacity: 1;
            -webkit-transform: scale3d(0.475, 0.475, 0.475)
              translate3d(-10px, 0, 0);
            transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
            -webkit-animation-timing-function: cubic-bezier(
              0.175,
              0.885,
              0.32,
              1
            );
            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
          }
        }

        .zoomInRight {
          -webkit-animation-name: zoomInRight;
          animation-name: zoomInRight;
        }

        @-webkit-keyframes zoomInUp {
          from {
            opacity: 0;
            -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
            -webkit-animation-timing-function: cubic-bezier(
              0.55,
              0.055,
              0.675,
              0.19
            );
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
          }

          60% {
            opacity: 1;
            -webkit-transform: scale3d(0.475, 0.475, 0.475)
              translate3d(0, -60px, 0);
            transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
            -webkit-animation-timing-function: cubic-bezier(
              0.175,
              0.885,
              0.32,
              1
            );
            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
          }
        }

        @keyframes zoomInUp {
          from {
            opacity: 0;
            -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
            -webkit-animation-timing-function: cubic-bezier(
              0.55,
              0.055,
              0.675,
              0.19
            );
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
          }

          60% {
            opacity: 1;
            -webkit-transform: scale3d(0.475, 0.475, 0.475)
              translate3d(0, -60px, 0);
            transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
            -webkit-animation-timing-function: cubic-bezier(
              0.175,
              0.885,
              0.32,
              1
            );
            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
          }
        }

        .zoomInUp {
          -webkit-animation-name: zoomInUp;
          animation-name: zoomInUp;
        }

        @-webkit-keyframes zoomOut {
          from {
            opacity: 1;
          }

          50% {
            opacity: 0;
            -webkit-transform: scale3d(0.3, 0.3, 0.3);
            transform: scale3d(0.3, 0.3, 0.3);
          }

          to {
            opacity: 0;
          }
        }

        @keyframes zoomOut {
          from {
            opacity: 1;
          }

          50% {
            opacity: 0;
            -webkit-transform: scale3d(0.3, 0.3, 0.3);
            transform: scale3d(0.3, 0.3, 0.3);
          }

          to {
            opacity: 0;
          }
        }

        .zoomOut {
          -webkit-animation-name: zoomOut;
          animation-name: zoomOut;
        }

        @-webkit-keyframes zoomOutDown {
          40% {
            opacity: 1;
            -webkit-transform: scale3d(0.475, 0.475, 0.475)
              translate3d(0, -60px, 0);
            transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
            -webkit-animation-timing-function: cubic-bezier(
              0.55,
              0.055,
              0.675,
              0.19
            );
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
          }

          to {
            opacity: 0;
            -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
            -webkit-transform-origin: center bottom;
            transform-origin: center bottom;
            -webkit-animation-timing-function: cubic-bezier(
              0.175,
              0.885,
              0.32,
              1
            );
            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
          }
        }

        @keyframes zoomOutDown {
          40% {
            opacity: 1;
            -webkit-transform: scale3d(0.475, 0.475, 0.475)
              translate3d(0, -60px, 0);
            transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
            -webkit-animation-timing-function: cubic-bezier(
              0.55,
              0.055,
              0.675,
              0.19
            );
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
          }

          to {
            opacity: 0;
            -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
            -webkit-transform-origin: center bottom;
            transform-origin: center bottom;
            -webkit-animation-timing-function: cubic-bezier(
              0.175,
              0.885,
              0.32,
              1
            );
            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
          }
        }

        .zoomOutDown {
          -webkit-animation-name: zoomOutDown;
          animation-name: zoomOutDown;
        }

        @-webkit-keyframes zoomOutLeft {
          40% {
            opacity: 1;
            -webkit-transform: scale3d(0.475, 0.475, 0.475)
              translate3d(42px, 0, 0);
            transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
          }

          to {
            opacity: 0;
            -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
            transform: scale(0.1) translate3d(-2000px, 0, 0);
            -webkit-transform-origin: left center;
            transform-origin: left center;
          }
        }

        @keyframes zoomOutLeft {
          40% {
            opacity: 1;
            -webkit-transform: scale3d(0.475, 0.475, 0.475)
              translate3d(42px, 0, 0);
            transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
          }

          to {
            opacity: 0;
            -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
            transform: scale(0.1) translate3d(-2000px, 0, 0);
            -webkit-transform-origin: left center;
            transform-origin: left center;
          }
        }

        .zoomOutLeft {
          -webkit-animation-name: zoomOutLeft;
          animation-name: zoomOutLeft;
        }

        @-webkit-keyframes zoomOutRight {
          40% {
            opacity: 1;
            -webkit-transform: scale3d(0.475, 0.475, 0.475)
              translate3d(-42px, 0, 0);
            transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
          }

          to {
            opacity: 0;
            -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
            transform: scale(0.1) translate3d(2000px, 0, 0);
            -webkit-transform-origin: right center;
            transform-origin: right center;
          }
        }

        @keyframes zoomOutRight {
          40% {
            opacity: 1;
            -webkit-transform: scale3d(0.475, 0.475, 0.475)
              translate3d(-42px, 0, 0);
            transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
          }

          to {
            opacity: 0;
            -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
            transform: scale(0.1) translate3d(2000px, 0, 0);
            -webkit-transform-origin: right center;
            transform-origin: right center;
          }
        }

        .zoomOutRight {
          -webkit-animation-name: zoomOutRight;
          animation-name: zoomOutRight;
        }

        @-webkit-keyframes zoomOutUp {
          40% {
            opacity: 1;
            -webkit-transform: scale3d(0.475, 0.475, 0.475)
              translate3d(0, 60px, 0);
            transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
            -webkit-animation-timing-function: cubic-bezier(
              0.55,
              0.055,
              0.675,
              0.19
            );
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
          }

          to {
            opacity: 0;
            -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
            -webkit-transform-origin: center bottom;
            transform-origin: center bottom;
            -webkit-animation-timing-function: cubic-bezier(
              0.175,
              0.885,
              0.32,
              1
            );
            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
          }
        }

        @keyframes zoomOutUp {
          40% {
            opacity: 1;
            -webkit-transform: scale3d(0.475, 0.475, 0.475)
              translate3d(0, 60px, 0);
            transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
            -webkit-animation-timing-function: cubic-bezier(
              0.55,
              0.055,
              0.675,
              0.19
            );
            animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
          }

          to {
            opacity: 0;
            -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
            transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
            -webkit-transform-origin: center bottom;
            transform-origin: center bottom;
            -webkit-animation-timing-function: cubic-bezier(
              0.175,
              0.885,
              0.32,
              1
            );
            animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
          }
        }

        .zoomOutUp {
          -webkit-animation-name: zoomOutUp;
          animation-name: zoomOutUp;
        }

        @-webkit-keyframes slideInDown {
          from {
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
            visibility: visible;
          }

          to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes slideInDown {
          from {
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
            visibility: visible;
          }

          to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
        }

        .slideInDown {
          -webkit-animation-name: slideInDown;
          animation-name: slideInDown;
        }

        @-webkit-keyframes slideInLeft {
          from {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
            visibility: visible;
          }

          to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes slideInLeft {
          from {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
            visibility: visible;
          }

          to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
        }

        .slideInLeft {
          -webkit-animation-name: slideInLeft;
          animation-name: slideInLeft;
        }

        @-webkit-keyframes slideInRight {
          from {
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
            visibility: visible;
          }

          to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes slideInRight {
          from {
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
            visibility: visible;
          }

          to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
        }

        .slideInRight {
          -webkit-animation-name: slideInRight;
          animation-name: slideInRight;
        }

        @-webkit-keyframes slideInUp {
          from {
            -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
            visibility: visible;
          }

          to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes slideInUp {
          from {
            -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
            visibility: visible;
          }

          to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
        }

        .slideInUp {
          -webkit-animation-name: slideInUp;
          animation-name: slideInUp;
        }

        @-webkit-keyframes slideOutDown {
          from {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }

          to {
            visibility: hidden;
            -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
          }
        }

        @keyframes slideOutDown {
          from {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }

          to {
            visibility: hidden;
            -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
          }
        }

        .slideOutDown {
          -webkit-animation-name: slideOutDown;
          animation-name: slideOutDown;
        }

        @-webkit-keyframes slideOutLeft {
          from {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }

          to {
            visibility: hidden;
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
          }
        }

        @keyframes slideOutLeft {
          from {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }

          to {
            visibility: hidden;
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
          }
        }

        .slideOutLeft {
          -webkit-animation-name: slideOutLeft;
          animation-name: slideOutLeft;
        }

        @-webkit-keyframes slideOutRight {
          from {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }

          to {
            visibility: hidden;
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
          }
        }

        @keyframes slideOutRight {
          from {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }

          to {
            visibility: hidden;
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
          }
        }

        .slideOutRight {
          -webkit-animation-name: slideOutRight;
          animation-name: slideOutRight;
        }

        @-webkit-keyframes slideOutUp {
          from {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }

          to {
            visibility: hidden;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
          }
        }

        @keyframes slideOutUp {
          from {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }

          to {
            visibility: hidden;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
          }
        }

        .slideOutUp {
          -webkit-animation-name: slideOutUp;
          animation-name: slideOutUp;
        }
      `}</style>
    </div>
  );
}
