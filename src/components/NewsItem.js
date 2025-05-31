import React from 'react'

const NewsItem =(props)=> {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;

    // Limit description to 15 words
    const getShortDescription = (desc) => {
        if (!desc) return '';
        const words = desc.split(' ');
        if (words.length > 15) {
            return words.slice(0, 15).join(' ') + '...';
        }
        return desc;
    };

    return (
        <div className='my-3 news-card-animate h-100'>
            <div className="card shadow-lg news-card-hover h-100 d-flex flex-column">
                {/* source section */}
                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-gradient' style={{left:'60%',top:'-10px', zIndex:99}} >{source}</span>

                <img src={!imageUrl ? "https://media.cheggcdn.com/media/8f8/8f8d8ae8-36b5-447e-947c-076618279a3d/php1KnYTm" : imageUrl} className="card-img-top news-img-animate" alt={title} height='200px' style={{objectFit: 'cover'}} />

                <div className="card-body d-flex flex-column flex-grow-1">
                    <h5 className="card-title news-title-animate">{title ? title : ''} </h5>
                    <p className="card-text">{getShortDescription(description)}</p>
                    <p className="card-text"><small className='text-muted'>By {author? author: 'Unknown'} on {new Date(date).toGMTString()}</small></p>
                    <div className="mt-auto">
                        <a rel="noreferrer" href={newsUrl} className="btn btn-sm btn-primary btn-animated" target='_blank'>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewsItem;
