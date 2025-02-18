import React, {} from 'react'

const NewsItem =(props)=> {

    
        let { title, description, urlToImage, url, author, publishedAt ,source} = props
        return (
            <div className='my-3'>
                <div className="card" /*style={{width: "18rem"}}*/>
                <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger "style={{ zIndex:'1' , left:'91%'}} > new {source}</span>
                    <img src={urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {author ? author : "unknown"}  date  {publishedAt} mins ago</small></p>
                        <a rel="noreferrer" href={url} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem