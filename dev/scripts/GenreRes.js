import React from 'react';

//we want to push
    //image url
    //title 
    //author


class GenreRes extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.anchor.scrollIntoView({behavior: "smooth"});
    }

    render () {
    return (
        <div className="res-container">
            <div ref={node => this.anchor = node} className="anchor" />
            <section className="results">
                <div className="gallery clearfix">
                    <div className="emblem-container">
                        <img className="emblem" src="../assets/icon2.svg" alt="icon of person reading"/>
                    </div>
                    <h2>Lit List</h2>
                    <div className="row-container clearfix">
                        {this.props.rowOne.map((book) => {
                            return (
                                <div className="title-gallery clearfix" key={book.best_book.id.$t} onClick={() => this.props.onBookSelect(book)}>
                                <div className="cover-container">
                                    {book.best_book.image_url.includes("nophoto") ? <div className="similar-books__no-photo"><p className="similar-books__no-photo-text">{book.best_book.title} by {book.best_book.author.name}</p></div> : <img className="similar-books__image" src={book.best_book.image_url} alt="Book cover" />}
                                </div>
                                    {/* <h3>{book.best_book.title}</h3> */}
                                </div>
                            )
                        })}  
                    </div>
                    <div className="row-container clearfix">
                        {this.props.rowTwo.map((book) => {
                            return (
                                <div className="title-gallery clearfix" key={book.best_book.id.$t} onClick={() => {this.props.onBookSelect(book)}}>
                                    <div className="cover-container">
                                        {book.best_book.image_url.includes("nophoto") ? <div className="similar-books__no-photo"><p className="similar-books__no-photo-text">{book.best_book.title} by {book.best_book.author.name}</p></div> : <img className="similar-books__image" src={book.best_book.image_url} alt="Book cover" />}
                                        {/* <img src={book.best_book.image_url} alt="Book Cover" /> */}
                                    </div>
                                    {/* <h3>{book.best_book.title}</h3> */}
                                </div>
                            )
                        })} 
                    </div>
                </div>
                <div className="back-forth">
                    {this.props.index > 0 && <button className="previous-page" onClick={() => this.props.pageBack()}> <img src="../assets/arrow.svg" alt="arrow"/> </button>}
                    {this.props.index < 9 && this.props.books.length > 0 ? <button className="next-page" onClick={() => this.props.pageForward()}><img src="../assets/arrow.svg" alt="arrow"/></button> : null}
                </div>
            </section>  
        </div>
        )
    }   
}

export default GenreRes;