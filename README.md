# Проектная работа Mesto
 
 Ссылка на проект: https://mxnsoon.github.io/mesto/

## Обзор

Проект "Место" - это страница, где можно добавлять различные фотографии, ставить им лайки, удалять их, приближать фотографии, а так же редактировать информацию профиля.

## Функционал:

- Карточки создаются при помощи JS
- Форма добавления карточки, возможность добавлять новые карточки
- Реаилзовано лайк/удаление карточки
- Модальные окна закрываются при любом разрешении экрана, картинка не теряет пропорции
- Реализовано плавное открытие и закрытие модального окна CSS-стилями
- Для всех полей ввода в формах включена лайв-валидация
- Кнопка отправки формы неактивна, если хотя бы одно из полей не проходит валидацию;
- модальное окно закрывается по в клику в любом месте вне этого окна и по нажатию на Esc

## Пакеты, которые используюстя в сборке:

- [Babel core](https://github.com/babel/babel/tree/master/packages/babel-core)
- [Babel preset](https://github.com/babel/babel-preset-env)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [Babel loader](https://github.com/babel/babel-loader)
- [Css loader](https://github.com/webpack-contrib/css-loader)
- [Css nano](https://github.com/cssnano/cssnano)
- [Html loader](https://github.com/webpack-contrib/html-loader)
- [Postcss loader](https://github.com/webpack-contrib/postcss-loader)
- [Webpack](https://github.com/webpack/webpack)

## Инструкции по запуску: 

- Скачать или клонировать репозиторий
- Установить зависимости при помощи npm `npm i`
- Запустить в development режиме `webpack-dev-server --open --watch`
- Запустить сборку production билда с помощью webpack'a `npm run build -- --mode production`



Данная работа корректно отобразится на всех браузерах, поддерживающих технологию Grid Layout.
