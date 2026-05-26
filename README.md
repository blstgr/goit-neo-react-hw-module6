# goit-neo-react-hw-module6

Домашня робота до теми **«Основи Redux»**. Застосунок реалізує книгу контактів на Vite + React з керуванням станом через Redux Toolkit.

## Посилання

- Репозиторій: https://github.com/blstgr/goit-neo-react-hw-module6
- Робоча сторінка Vercel: буде додано після деплою

## Технології

- Vite
- React
- Redux Toolkit
- React Redux
- Redux Persist
- CSS Modules

## Функціональність

- додавання контакту з іменем та номером телефону;
- видалення контакту зі списку;
- фільтрація контактів за іменем або номером;
- збереження масиву контактів у `localStorage` за допомогою Redux Persist.

## Структура Redux

Файли Redux-логіки розміщені в `src/redux`:

- `store.js` - створення Redux store та persistor;
- `contactsSlice.js` - слайс контактів з екшенами `addContact` і `deleteContact`;
- `filtersSlice.js` - слайс фільтра з екшеном `changeFilter`;
- `selectors.js` - функції-селектори для компонентів.

Початковий стан:

```js
{
  contacts: {
    items: []
  },
  filters: {
    name: ''
  }
}
```

## Команди

```bash
npm install
npm run dev
npm run build
npm run lint
npm run format
```

## Критерії виконання

- Проєкт створений на Vite.
- Redux Toolkit використовується для керування контактами та фільтром.
- React-компоненти підключені до Redux через `useSelector` і `useDispatch`.
- `Contact` отримує дані контакту через props, інші компоненти не приймають props.
- Контакти зберігаються у локальному сховищі через Redux Persist.
- Стилізація виконана CSS-модулями.
- Компоненти в `src/components` мають окремі папки з JSX-файлом і CSS-модулем з однаковою назвою.
