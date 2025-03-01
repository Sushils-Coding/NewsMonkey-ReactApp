import React from 'react'

const NewsItem =(props)=> {

        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className='my-3'>
                <div className="card" >
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger' style={{left:'60%',top:'-10px', zIndex:1}} >{source}</span>

                    <img src={!imageUrl ? "https://media.cheggcdn.com/media/8f8/8f8d8ae8-36b5-447e-947c-076618279a3d/php1KnYTm" : imageUrl} className="card-img-top" alt={title} height='250px' />

                    <div className="card-body">
                        <h5 className="card-title">{title ? title : ''} </h5>
                        <p className="card-text">{description ? description : ''}</p>
                        <p className="card-text"><small className='text-muted'>By {author? author: 'Unknown'} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} className="btn btn-sm btn-primary btn-dark" target='_blank'>Read More</a>
                    </div>

                </div>
            </div>
        )
}
export default NewsItem;
