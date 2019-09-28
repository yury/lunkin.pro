import React from 'react';
import '../styles/style.css';
import '../styles/animate.css';

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
    items.map(item => (
      <li>
        <strong>{item.name}</strong>
        <div className="desc">{item.desc}</div>
      </li>
    ));
  _renderLists = (lists, className) =>
    lists.map(list => (
      <div className={className}>
        <h5>{list.year}</h5>
        <ul>{this._renderItems(list.items)}</ul>
      </div>
    ));
  render = () => (
    <div>
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
    </div>
  );
}
