import { useState } from 'react'
import './App.css'

// Временные данные — позже мы заменим их на реальные тексты и фото
const projectData = {
  ru: {
    title: "Parki ar minda",
    intro: "Это фотопроект, посвященный организации Parki ar minda. Они собирают мусор для дальнейшей переработки.\n\nЗдесь будет ваш вступительный текст. Вы можете написать его в несколько абзацев, и они будут отображаться так же красиво.",
    photos: [
      { id: 1, src: "https://placehold.co/800x600/e0e0e0/8B0000?text=Photo+1", caption: "Пример подписи к первой фотографии." },
      { id: 2, src: "https://placehold.co/600x800/e0e0e0/8B0000?text=Photo+2", caption: "А это подпись ко второй фотографии." },
      { id: 3, src: "https://placehold.co/800x600/e0e0e0/8B0000?text=Photo+3", caption: "И подпись к третьей фотографии." },
    ]
  },
  en: {
    title: "Parki ar minda",
    intro: "This is a photo project dedicated to the organization Parki ar minda. They collect trash for further recycling.\n\nYour introductory text will be here. You can write it in several paragraphs, and they will be displayed just as beautifully.",
    photos: [
      { id: 1, src: "https://placehold.co/800x600/e0e0e0/8B0000?text=Photo+1", caption: "Example caption for the first photo." },
      { id: 2, src: "https://placehold.co/600x800/e0e0e0/8B0000?text=Photo+2", caption: "And this is the caption for the second photo." },
      { id: 3, src: "https://placehold.co/800x600/e0e0e0/8B0000?text=Photo+3", caption: "And the caption for the third photo." },
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
              <div className="photo-counter">{index + 1} / {currentData.photos.length}</div>
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
