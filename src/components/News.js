import React, { Component } from 'react'
import NewsItem from "./NewsItem"

// https://newsapi.org/v2/top-headlines?country=in&apiKey=d0e16455abe44ee397a1e01a866a2478

export default class News extends Component {
  render() {
    return (
      <>
        <div className='container mx-3'>News Component</div>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
      </>
    )
  }
}
