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
    intro: "Parki ar minda (в переводе с грузинского «Пакет не нужен») — экологическая организация, которая с 2020 года помогает жителям Тбилиси сортировать отходы. За 2025 год команде Parki ar minda удалось привлечь к сортировке отходов 25 000 тбилисцев и собрать 115 тонн отходов. С организацией сотрудничают 65 волонтёров: они принимают и сортируют отходы в трёх точках города — в районах Ваке, Сабуртало и Чугурети.\n\nЯ живу в Тбилиси с 2022 года, но об организации узнала раньше — от подруги, которая волонтёрит в Parki ar minda с первого года открытия. Мне — часто пребывающей в оцепенении перед экологической катастрофой — было важно рассказать о людях, нашедших в себе силы объединиться и действовать вопреки тревоге.",
    photos: [
      { id: 1, src: photo1, caption: 'Татьяна Ремнёва, соосновательница Parki ar minda' },
      { id: 2, src: photo2, caption: 'Мурал рядом с гаражом Parki ar minda в районе Сабуртало' },
      { id: 3, src: photo3, caption: 'Разгрузка стекла для дальнейшей переработки' },
      { id: 4, src: photo4, caption: 'Диана — преподавательница русского языка для детей-билингвов. Волонтёрит в Parki ar minda с 2020 года', quote: '«Простой шаг к экологичному образу жизни — пользоваться многоразовой бутылкой для воды и напитков на вынос»' },
      { id: 5, src: photo5, caption: 'Волонтёр проверяет маркировку на пластиковой бутылке. За 2025 год Parki ar minda собрали 22,4 тонны пластика' },
      { id: 6, src: photo6, caption: 'Каждый килограмм переработанных отходов — это сохранённые ресурсы. В 2025 году команда Parki ar minda сохранила электроэнергию для 110 домохозяйств' },
      { id: 7, src: photo7, caption: 'Ира — волонтёрка в гараже района Чугурети. Водит хайки в клубе путешествий «Горный ёж», делает кофе в кофейне «Интроверт», работает на разных проектах с детьми', quote: '«Простые экологичные вещи, которые я практикую, — всегда держать с собой парочку сеток для овощей и использовать их вместо пластиковых пакетов»' },
      { id: 8, src: photo8, caption: 'Девочка сдаёт крышки на выездном гараже в Глдани' },
      { id: 9, src: photo9, caption: 'Гараж в Ваке' },
      { id: 10, src: photo10, caption: 'Волонтёр команды разгрузки в гараже района Сабуртало' },
      { id: 11, src: photo11, caption: 'Елена волонтёрит в гараже района Чугурети. До эмиграции работала в газете и благотворительных фондах, сейчас — няня', quote: '«Очень важно в самом начале организовать сортировку дома так, чтобы это не было в тягость — не мешало бы в быту, не надо было бы далеко везти. Можно начать только с одного вида: например, только пластиковые бутылки, только бумагу или только батарейки или лампочки. И когда это станет привычным, немного расширить ассортимент»' },
      { id: 12, src: photo12, caption: 'Гараж в Чугурети' },
      { id: 13, src: photo13, caption: 'Катя волонтёрит в гараже района Ваке. Работает специалисткой по коммуникациям', quote: '«Reduce, reuse и только потом — recycle. Все материалы, кроме металла и стекла, могут быть переработаны ограниченное число раз. Поэтому начните с отказа от ненужного — уже это значительно сократит количество отходов»' },
      { id: 14, src: photo14, caption: 'Сбор отходов в районе Глдани' },
      { id: 15, src: photo15, caption: 'Татьяна Ремнёва в гараже в Чугурети' },
    ]
  },
  en: {
    title: "Parki ar minda",
    intro: "\"Parki ar minda\" (translated from Georgian as \"No bag needed\") is an environmental organization that has been helping Tbilisi residents sort their waste since 2020. In 2025, the \"Parki ar minda\" team managed to attract 25,000 Tbilisi residents to waste sorting and collected 115 tons of waste. 65 volunteers collaborate with the organization: they receive and sort waste at three locations in the city — in the Vake, Saburtalo, and Chugureti districts.\n\nI have lived in Tbilisi since 2022, but I learned about the organization earlier — from a friend who has been volunteering at \"Parki ar minda\" since its first year of opening. For me — often paralyzed in front of an environmental catastrophe — it was important to tell the story of the people who found the strength to unite and act despite the anxiety.",
    photos: [
      { id: 1, src: photo1, caption: 'Tatiana Remneva, co-founder of "Parki ar minda"' },
      { id: 2, src: photo2, caption: 'Mural near the "Parki ar minda" garage in the Saburtalo district' },
      { id: 3, src: photo3, caption: 'Unloading glass for further recycling' },
      { id: 4, src: photo4, caption: 'Diana is a Russian language teacher for bilingual children. She has been volunteering at "Parki ar minda" since 2020', quote: '“A simple step towards an eco-friendly lifestyle is to use a reusable bottle for water and takeout drinks”' },
      { id: 5, src: photo5, caption: 'A volunteer checks the label on a plastic bottle. In 2025, "Parki ar minda" collected 22.4 tons of plastic' },
      { id: 6, src: photo6, caption: 'Every kilogram of recycled waste means saved resources. In 2025, the "Parki ar minda" team saved enough electricity for 110 households' },
      { id: 7, src: photo7, caption: 'Ira is a volunteer at the Chugureti district garage. She guides hikes in the "Mountain Hedgehog" travel club, makes coffee at the "Introvert" coffee shop, and works on various projects with children', quote: '“Simple eco-friendly habits I practice include always keeping a couple of mesh bags with me and using them instead of plastic bags”' },
      { id: 8, src: photo8, caption: 'A girl drops off bottle caps at the pop-up garage in Gldani' },
      { id: 9, src: photo9, caption: 'Garage in Vake' },
      { id: 10, src: photo10, caption: 'An unloading team volunteer at the Saburtalo district garage' },
      { id: 11, src: photo11, caption: 'Elena volunteers at the Chugureti district garage. Before emigrating, she worked in a newspaper and charitable foundations, now she is a nanny', quote: '“It is very important at the very beginning to organize home sorting so that it doesn’t feel like a burden — it shouldn’t interfere with daily life or require traveling far. You can start with just one type: for example, only plastic bottles, only paper, or only batteries and light bulbs. And once that becomes a habit, slightly expand the range”' },
      { id: 12, src: photo12, caption: 'Garage in Chugureti' },
      { id: 13, src: photo13, caption: 'Katya volunteers at the Vake district garage. She works as a communications specialist', quote: '“Reduce, reuse, and only then — recycle. All materials, except metal and glass, can be recycled a limited number of times. Therefore, start by refusing what is unnecessary — this alone will significantly reduce the amount of waste”' },
      { id: 14, src: photo14, caption: 'Waste collection in the Gldani district' },
      { id: 15, src: photo15, caption: 'Tatiana Remneva in the Chugureti garage' },
    ]
  }
};

function App() {
  const [lang, setLang] = useState('ru');
  const [expandedQuoteId, setExpandedQuoteId] = useState(null);
  const currentData = projectData[lang];

  const toggleQuote = (id) => {
    setExpandedQuoteId(prev => prev === id ? null : id);
  };

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
              <div className="photo-wrapper">
                <img src={photo.src} alt={`Photo ${index + 1}`} className="photo-img" />
                {photo.quote && (
                  <>
                    <button 
                      className={`quote-toggle ${expandedQuoteId === photo.id ? 'active' : ''}`}
                      onClick={() => toggleQuote(photo.id)}
                      aria-label="Toggle quote"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    </button>
                    <div className={`quote-overlay ${expandedQuoteId === photo.id ? 'visible' : ''}`}>
                      <p className="quote-text">{photo.quote}</p>
                    </div>
                  </>
                )}
              </div>
              <p className="photo-caption">{photo.caption}</p>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
