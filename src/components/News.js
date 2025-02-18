import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalresults, setTotalresults] = useState(0)
 

   const captalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  const updateNews = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8e9e051f15324ec3a70ad879f7296940&page=${page}&pagesize=${props.pagesize}`;
    setLoading(true)
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    setArticles(parsedData.articles)
    setTotalresults(parsedData.totalresults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
     document.title = `${captalizeFirstLetter(props.category)} - News App`;
    updateNews();
  }, [])
  //  const hanldeNextClick = async () => {
  //   if (this.state.page + 1 > Math.ceil(this.state.totalresults / props.pagesize)) {

  //   }
  //   else {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8e9e051f15324ec3a70ad879f7296940&page=${this.state.page + 1}&pagesize=${props.pagesize}`;
  //     this.setState({ loading: true })
  //     let data = await fetch(url)
  //     let parsedData = await data.json()
  //     console.log(parsedData)
  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: parsedData.articles,
  //       loading: false
  //     })
  //   }

  // }
  //  const hanldePrevClick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8e9e051f15324ec3a70ad879f7296940&page=${this.state.page - 1}&pagesize=${props.pagesize}`;
  //   this.setState({ loading: true })
  //   let data = await fetch(url)
  //   let parsedData = await data.json()
  //   console.log(parsedData)
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parsedData.articles,
  //     loading: false
  //   })

  // }
  const fetchMoreData = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=8e9e051f15324ec3a70ad879f7296940&page=${page + 1}&pagesize=${props.pagesize}`;
    setPage(page + 1)
    setLoading(true)
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    setArticles(articles.concat(parsedData.articles))
    setTotalresults(parsedData.totalresults)
    setLoading(false)
    props.setProgress(100);
  }
  
    return (
      <>

        <h1 className='text-center' style={{marginTop:'90px'}}>News - Top_headlines from {captalizeFirstLetter(props.category)}</h1>
        {/* {this.state.loading && <Spinner />} */}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalresults}
          loader={<Spinner />}
        >
          <div className="container">

            <div className="row">
              {articles.map((element) => {
                return <div className="col-md-4" key={element.url} >
                  <NewsItem title={element.title} description={element.description ? element.description.slice(0, 85) : ""} urlToImage={element.urlToImage ? element.urlToImage : " https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i2RoeJNV1WDk/v1/1200x741.jpg"} url={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                </div>
              })}
            </div>

          </div>

        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.hanldePrevClick} > &larr; Previous </button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalresults / props.pagesize)} type="button" className="btn btn-dark" onClick={this.hanldeNextClick} >Next &rarr;</button>
        </div> */}


      </>
    )
  
}

export default News