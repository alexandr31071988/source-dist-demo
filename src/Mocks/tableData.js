import React from "react"
import Edit from '../assets/Edit.svg'

export const tableRows = {
  sourceName: {
    title: "Название источника",
    content: (text) => text
  },
  link: {
    title: "Ссылка",
    content:
      (text) => {
        return <a className="link" href={text}>{text}</a>
      },
    maxWidth: 135,
  },
  capacity: {
    title: "Охват",
    content:
      (text) => text
  },
  directionCoverage: {
    title: "Редакционный охват",
    content:
      (text) => text,
    maxWidth: 75,
  },
  countArticles: {
    title: "Кол-во публикаций",
    content:
      (text) => text
  },
  countInfoPods: {
    title: "Кол-во инфоповодов",
    content:
      (text) => <span style={{color: "#17A600"}}>{text}</span>,
    maxWidth: 70,
  },
  sourceType: {
    title: "Тип источника",
    content:
      (text) => text
  },
  isOpposition: {
    title: "Оппозиция",
    content:
      (text) => text
  },
  origin: {
    title: "Первоисточник",
    content:
      (text) => text
  },
  edit: {
    title: "",
    content:
      (text, onClick) => <img onClick={onClick} src={Edit} />
  },
}

export const tableLines = [
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой !!!!",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "= Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Телеграмм",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир ",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой !!!!",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "= Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Телеграмм",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир ",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой !!!!",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "= Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Телеграмм",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир ",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой !!!!",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "= Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Телеграмм",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир ",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой !!!!",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "= Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Телеграмм",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир ",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой !!!!",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "= Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Телеграмм",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир ",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой !!!!",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "= Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Телеграмм",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир ",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой !!!!",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "= Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Телеграмм",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир ",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой !!!!",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "= Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "СМИ",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Телеграмм",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир ",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  },
  {
    sourceName: "Прямой эфир Эха Москвы",
    link: "https://telegram.me/vyzvon/179641",
    capacity: "12 099",
    directionCoverage: "1 348 094",
    countArticles: "1 348 094",
    countInfoPods: "218 464 443",
    sourceType: "Соцсети",
    isOpposition: "",
    origin: "",
    edit: ""
  }
]

export const getTableData = (limit, page) => {
  const pages = []
  let currentLimit = limit, tempArray = []
  tableLines.forEach((item, index) => {
    if(index < currentLimit - 1){
      tempArray.push(Object.assign(item, {edit: index}))
    } else {
      tempArray.push(Object.assign(item, {edit: index}))
      currentLimit = currentLimit + limit
      pages.push(tempArray)
      tempArray = []
    }
  })
  return [pages[page - 1], pages.length]
}

export const getTablePageData = (data) => (limit, page) => {
  const pages = []
  let currentLimit = limit, tempArray = []
  data.forEach((item, index) => {
    if(index < currentLimit - 1){
      tempArray.push(Object.assign(item, {edit: index}))
    } else {
      tempArray.push(Object.assign(item, {edit: index}))
      currentLimit = currentLimit + limit
      pages.push(tempArray)
      tempArray = []
    }
  })

  return [pages[page - 1], pages.length]
}