# Проект АнтиХвост (клиентское приложение)

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

## Описание 📖

Репозиторий содержит клиентское приложение на основе [NextJS](https://nextjs.org/), представляющее из себя веб-прложение на основе сервера [anti-tail-server](https://github.com/mkstas/anti-tail-server).

## Функционал ✨

- Вход с помощью номера мобильного телефона
- Учебные дисциплины (создание и редактирование)
  - Ввод учебной дисциплины
- Типы работ (создание и редактирование)
  - Ввод типы работы
- Учебные работы (создание и редактирование)
  - Ввод названия работы
  - Ввод описания (опционально)
  - Выбор дня сдачи работы
  - Выбор учебной дисциплины
  - Выбор типа работы
- Создание подзадач для учебных работ (создание и редактирование)
  - Ввод подзадачи
- Фильтрация учебных работ по дисциплинам и типам

## Установка и запуск 🛠️

### Установка

```bash
$ npm install
```

### Запуск в режиме разработки

```bash
$ npm run dev
```

### Сборка и запуск Docker образа

```bash
$ docker-compoose up -d --build
```
