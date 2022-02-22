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
      }
  },
  capacity: {
    title: "Охват",
    content:
      (text) => text
  },
  directionCoverage: {
    title: "Редакционный охват",
    content:
      (text) => text
  },
  countArticles: {
    title: "Кол-во публикаций",
    content:
      (text) => text
  },
  countInfoPods: {
    title: "Кол-во инфоповодов",
    content:
      (text) => <span style={{color: "#17A600"}}>{text}</span>
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
      (text) => <img src={Edit} />
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
    sourceType: "Оппозиция",
    isOpposition: "",
    origin: "",
    edit: ""
  }
]