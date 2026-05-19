import { useState } from 'react'
import './App.css'

import photo1 from './assets/photos/1.jpg'
import photo2 from './assets/photos/2.jpg'
import photo3 from './assets/photos/3.jpg'
import photo4 from './assets/photos/4.jpg'
import photo5 from './assets/photos/5.jpg'
import photo6 from './assets/photos/6.jpg'
import photo7 from './assets/photos/7.jpg'
import photo8 from './assets/photos/8.jpg'
import photo9 from './assets/photos/9.jpg'
import photo10 from './assets/photos/10.jpg'
import photo11 from './assets/photos/11.jpg'
import photo12 from './assets/photos/12.jpg'
import photo13 from './assets/photos/13.jpg'
import photo14 from './assets/photos/14.jpg'
import photo15 from './assets/photos/15.jpg'

// Финальные данные проекта
const projectData = {
  ru: {
    title: "Parki ar minda",
    intro: "„Parki ar minda“ («Пакет не нужен») — экологическая организация, которая с 2020 года помогает жителям Тбилиси сортировать мусор. За 2025 год команде „Parki ar minda“ удалось привлечь к сортировке мусора 25 000 тбилисцев и собрать 115 тонн отходов. С организацией сотрудничают 65 волонтёров: они принимают и сортируют мусор в трёх точках города — в районах Ваке, Сабуртало и Чугурети.\n\nЯ живу в Тбилиси с 2022 года, но об организации узнала раньше — от подруги, которая волонтёрит в „Parki ar minda“ с первого года открытия. Мне — часто пребывающей в оцепенении перед экологической катастрофой — было важно узнать поближе людей, которые нашли в себе силы объединиться и действовать вопреки общей тревоге.",
    photos: [
      { id: 1, src: photo1, caption: 'Татьяна Ремнёва, соосновательница "Parki ar minda"' },
      { id: 2, src: photo2, caption: 'Мурал рядом с гаражом "Parki ar minda" в районе Сабуртало' },
      { id: 3, src: photo3, caption: 'Разгрузка стекла для дальнейшей переработки' },
      { id: 4, src: photo4, caption: 'Диана — преподавательница русского языка для детей-билингвов. Волонтёрит в "Parki ar minda" с 2020 года' },
      { id: 5, src: photo5, caption: 'Волонтёр проверяет маркировку пластика на выездном гараже в районе Глдани. За 2025 год "Parki ar minda" собрали 22,4 тонны пластика' },
      { id: 6, src: photo6, caption: 'Каждый килограмм переработанных отходов — это сохранённые ресурсы. Так, за 2025 год "Parki ar minda" своими действиями сохранили электроэнергию для 110 домохозяйств' },
      { id: 7, src: photo7, caption: 'Ира — волонтёрка в гараже района Чугурети. Водит хайки в клубе путешествий «Горный ёж», делает кофе в кофейне «Интроверт», работает на разных проектах с детьми' },
      { id: 8, src: photo8, caption: 'Девочка сдаёт крышки на выездном гараже в Глдани' },
      { id: 9, src: photo9, caption: 'Больше всего на переработку приносят стекла — в 2025 году собрали 63,8 тонн' },
      { id: 10, src: photo10, caption: 'Волонтёр команды разгрузки в гараже района Сабуртало' },
      { id: 11, src: photo11, caption: 'Елена волонтёрит в гараже района Чугурети. До эмиграции работала в газете и благотворительных фондах, сейчас — няня' },
      { id: 12, src: photo12, caption: 'Гараж в Чугурети' },
      { id: 13, src: photo13, caption: 'Катя волонтёрит в гараже района Ваке. Работает специалисткой по коммуникациям' },
      { id: 14, src: photo14, caption: 'Сбор отходов в районе Глдани' },
      { id: 15, src: photo15, caption: 'Татьяна Ремнёва в гараже в Чугурети' },
    ]
  },
  en: {
    title: "Parki ar minda",
    intro: "“Parki ar minda” (“No bag needed”) is an environmental organization that has been helping Tbilisi residents sort their waste since 2020. In 2025, the “Parki ar minda” team managed to attract 25,000 Tbilisi residents to waste sorting and collected 115 tons of waste. 65 volunteers collaborate with the organization: they receive and sort waste at three locations in the city — in the Vake, Saburtalo, and Chugureti districts.\n\nI have lived in Tbilisi since 2022, but I learned about the organization earlier — from a friend who has been volunteering at “Parki ar minda” since its first year of opening. For me — often paralyzed in front of an environmental catastrophe — it was important to get to know the people who found the strength to unite and act despite the general anxiety.",
    photos: [
      { id: 1, src: photo1, caption: 'Tatiana Remneva, co-founder of "Parki ar minda"' },
      { id: 2, src: photo2, caption: 'Mural near the "Parki ar minda" garage in the Saburtalo district' },
      { id: 3, src: photo3, caption: 'Unloading glass for further recycling' },
      { id: 4, src: photo4, caption: 'Diana is a Russian language teacher for bilingual children. She has been volunteering at "Parki ar minda" since 2020' },
      { id: 5, src: photo5, caption: 'A volunteer checks plastic labels at the pop-up garage in the Gldani district. In 2025, "Parki ar minda" collected 22.4 tons of plastic' },
      { id: 6, src: photo6, caption: 'Every kilogram of recycled waste means saved resources. Thus, in 2025, "Parki ar minda" saved enough electricity for 110 households through their actions' },
      { id: 7, src: photo7, caption: 'Ira is a volunteer at the Chugureti district garage. She guides hikes in the "Mountain Hedgehog" travel club, makes coffee at the "Introvert" coffee shop, and works on various projects with children' },
      { id: 8, src: photo8, caption: 'A girl drops off bottle caps at the pop-up garage in Gldani' },
      { id: 9, src: photo9, caption: 'Glass is the most frequently brought item for recycling — 63.8 tons were collected in 2025' },
      { id: 10, src: photo10, caption: 'An unloading team volunteer at the Saburtalo district garage' },
      { id: 11, src: photo11, caption: 'Elena volunteers at the Chugureti district garage. Before emigrating, she worked in a newspaper and charitable foundations, now she is a nanny' },
      { id: 12, src: photo12, caption: 'Garage in Chugureti' },
      { id: 13, src: photo13, caption: 'Katya volunteers at the Vake district garage. She works as a communications specialist' },
      { id: 14, src: photo14, caption: 'Waste collection in the Gldani district' },
      { id: 15, src: photo15, caption: 'Tatiana Remneva in the Chugureti garage' },
    ]
  }
};

function App() {
  const [lang, setLang] = useState('ru');
  const currentData = projectData[lang];

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="project-title">{currentData.title}</h1>
        <div className="lang-switcher">
          <button 
            className={lang === 'ru' ? 'active' : ''} 
            onClick={() => setLang('ru')}
          >
            RU
          </button>
          <span>/</span>
          <button 
            className={lang === 'en' ? 'active' : ''} 
            onClick={() => setLang('en')}
          >
            EN
          </button>
        </div>
      </header>

      <main className="horizontal-scroll">
        {/* Панель со вступительным текстом */}
        <section className="panel intro-panel">
          <div className="intro-text">{currentData.intro}</div>
        </section>

        {/* Панели с фотографиями */}
        {currentData.photos.map((photo, index) => (
          <section key={photo.id} className="panel photo-panel">
            <div className="accent-line-container">
              <div className="accent-line"></div>
            </div>
            <div className="photo-content">
              <img src={photo.src} alt={`Photo ${index + 1}`} className="photo-img" />
              <p className="photo-caption">{photo.caption}</p>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
