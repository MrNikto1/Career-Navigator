# 🎓 Career Navigator — Платформа для профориентации и трудоустройства

Привет! Это мой дипломный проект — **Career Navigator**.
Это веб-платформа, которая решает важную проблему: помогает абитуриентам и студентам выбрать правильный образовательный путь, а затем найти работу мечты.

Система объединяет три ключевые стороны:
- **Абитуриенты/Студенты** — проходят профориентацию, ищут вузы и вакансии
- **Вузы (HEI)** — публикуют информацию о программах, требованиях и условиях поступления
- **Работодатели** — размещают вакансии, стажировки и ищут молодых специалистов

---

## 🏗 Архитектура проекта

Проект построен по классической **клиент-серверной архитектуре** с разделением на Backend и Frontend:

### Backend (Node.js + Express)
Серверная часть реализована на **Express.js** с использованием **MVC паттерна**:
- **Models** — работа с данными (пользователи, студенты, вузы, работодатели, профориентация)
- **Controllers** — бизнес-логика и обработка запросов
- **Routes** — маршрутизация API endpoints
- **Views** — серверные шаблоны на **EJS** (для рендеринга страниц на сервере)

### Frontend (Nuxt.js + Vue 3)
Клиентская часть построена на современном стеке:
- **Nuxt.js 4** — SSR/SSG фреймворк для Vue.js
- **Vue 3** — реактивный UI
- **TypeScript** — типизация для надежности кода
- **Axios** — HTTP-клиент для общения с Backend API

---

## 🛠 Технологический стек

### Backend
* **Runtime:** Node.js
* **Фреймворк:** Express.js
* **Шаблонизатор:** EJS (Embedded JavaScript)
* **Переменные окружения:** dotenv
* **CORS:** для кросс-доменных запросов

### Frontend
* **Фреймворк:** Nuxt.js 4.0.0
* **Библиотека:** Vue.js 3.5.17
* **Роутинг:** Vue Router 4.5.1
* **HTTP:** Axios 5.13.6
* **Язык:** TypeScript

### База данных
* PostgreSQL / MySQL *(уточни свою БД)*

---

## 📂 Структура проекта

```text
Career-Navigator/
├── Backend/                    # Серверная часть
│   ├── config/                 # Конфигурация приложения
│   ├── controllers/            # Бизнес-логика
│   │   ├── usersControllers.js
│   │   ├── studentControllers.js
│   │   ├── HEIControllers.js
│   │   ├── employersControllers.js
│   │   ├── career-guidanceControllers.js
│   │   └── mainControllers.js
│   ├── models/                 # Модели данных
│   │   ├── UsersModels.js
│   │   ├── StudentsModels.js
│   │   ├── HEIModels.js
│   │   ├── EmployersModels.js
│   │   ├── Career-guidanceModels.js
│   │   └── index.js
│   ├── routes/                 # API маршруты
│   │   ├── users.js
│   │   ├── students.js
│   │   ├── HEI.js
│   │   ├── employers.js
│   │   ├── career-guidance.js
│   │   └── mainRoutes.js
│   ├── views/                  # EJS шаблоны
│   ├── public/                 # Статические файлы (CSS, JS, images)
│   ├── utils/                  # Вспомогательные функции
│   ├── app.js                  # Настройка Express приложения
│   ├── server.js               # Точка входа (запуск сервера)
│   ├── .env                    # Переменные окружения
│   └── package.json
│
├── frontend/                   # Клиентская часть
│   ├── app/                    # Компоненты Vue.js
│   ├── pages/                  # Страницы приложения (автоматический роутинг)
│   ├── public/                 # Публичные ресурсы
│   ├── nuxt.config.ts          # Конфигурация Nuxt
│   ├── tsconfig.json           # Конфигурация TypeScript
│   └── package.json
│
├── README.md                   # Ты тут :)
└── package.json                # Корневой package.json
