---
title: Картинка с фоном
sidebar_label: Страница с фоном
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

{/* Внешний контейнер */}
<div style={{ position: 'relative', width: '100%', minHeight: '650px', borderRadius: '8px', overflow: 'hidden' }}>
  
  {/* Фонова картинка */}
  <img src={useBaseUrl('/img/bg.png')} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1 }} />
  
  {/* Білий шар з меншою щільністю (0.60 замість 0.10) — картинка тепер чіткіша */}
  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.10)', zIndex: 2 }} />

  {/* Весь ваш текст резюме */}
  <div style={{ position: 'relative', zIndex: 3, padding: '40px', color: '#1c1e198' }}>

    <h2 style={{ color: '#1c1e21', marginTop: 0 }}>Досвід роботи</h2>

    {/* Блок 1 */}
    <div style={{ marginBottom: '25px' }}>
      <h3 style={{ color: '#1c1e21', margin: '10px 0 5px 0' }}>Технічний письменник</h3>
      <p style={{ fontStyle: 'italic', margin: '0 0 10px 0', fontWeight: 'bold' }}>Freelance | 2025 - теперішній час</p>
      <ul style={{ paddingLeft: '20px', margin: '5px 0' }}>
        <li>Розробка та підтримка документації у <strong>Docusaurus</strong> за підходом <strong>Docs-as-Code</strong></li>
        <li>Створення <strong>User Guides</strong> та <strong>Administrator Guides</strong> для веб застосунків</li>
        <li>Опис бізнес-процесів у нотації <strong>BPMN 2.0</strong> (<strong>Draw.io</strong>)</li>
        <li>Редагування та структурування <strong>REST API</strong> документації у <strong>Confluence</strong></li>
      </ul>
    </div>

    {/* Блок 2 */}
    <div style={{ marginBottom: '25px' }}>
      <h3 style={{ color: '#1c1e21', margin: '10px 0 5px 0' }}>Експерт технічний</h3>
      <p style={{ fontStyle: 'italic', margin: '0 0 10px 0', fontWeight: 'bold' }}>ТОВ "Промсервісдіагностика" | 2019 - 2024</p>
      <ul style={{ paddingLeft: '20px', margin: '5px 0' }}>
        <li>Збір та аналіз вимог щодо експлуатації обладнання</li>
        <li>Розрахунок кінцевого ресурсу устаткування</li>
        <li>Розробка експертно-технічного висновку на основі розрахунку та нормативно-технічної документації</li>
        <li>Взаємодія із замовниками</li>
        <li><strong>Результат:</strong> Скоротив час створення експертних висновків на 15% через оновлені шаблони</li>
      </ul>
    </div>

    {/* Блок 3 */}
    <div>
      <h3 style={{ color: '#1c1e21', margin: '10px 0 5px 0' }}>Попередній досвід</h3>
      <p style={{ fontStyle: 'italic', margin: '0 0 10px 0', fontWeight: 'bold' }}>2015 - 2019</p>
      <ul style={{ paddingLeft: '20px', margin: '5px 0' }}>
        <li>Мерчендайзер, ТОВ “Вічунай-Україна”</li>
        <li>Спеціаліст з верифікації та претензійно-позовної роботи, ПАТ КБ "ПриватБанк"</li>
      </ul>
    </div>

  </div>
</div>

---
{/*

## 🧩 Структура фонового блока

**Внешний контейнер**  
Задаёт размеры, скругление углов и управляет позиционированием всех слоёв. Без него фон и текст не будут правильно накладываться.

**Фоновое изображение (`<img>` с useBaseUrl)**  
Отображает картинку из папки `static/img`.  
Функция `useBaseUrl` автоматически добавляет базовый путь сайта, чтобы изображение корректно загружалось как локально, так и после деплоя.

**Белый полупрозрачный слой**  
Служит фильтром поверх картинки, снижает контрастность фона и улучшает читаемость текста.  
Можно убрать, если фон достаточно светлый.

**Контейнер контента**  
Основной блок с текстом резюме. Находится поверх фона и белого слоя. Без него текст окажется под фоном.

**Внутренние блоки**  
Используются для структурирования контента (опыт, проєкти тощо). Можно объединить или упростить, но лучше оставить для читаемости.
*/}