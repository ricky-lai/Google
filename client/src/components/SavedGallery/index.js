import React, { Component } from 'react';
import Delete from "../Delete";
import API from "../../utils/API";
import "./style.css"

class SavedGallery extends Component {
    state = {
        items: [],
        promiseIsResolved: false     
    };

    deleteSaved(props) {
        API.deleteBook(props.id)
        .then(
             this.setState({items: this.state.items.filter(item => item._id !== props.id)}))
    }

   componentDidMount(){
        API.getBooks().then((res => {
            this.setState({ items: res.data})}))
            .then(this.setState({promiseIsResolved: true}));
    }

    render() {
        let altImage = 'http://icons.iconarchive.com/icons/dtafalonso/android-lollipop/256/Play-Books-icon.png';
        // Prevents page from loading until GET request is complete, preventing error
        if(!this.state.promiseIsResolved){return null}
        else{
    return (
        <div className="book-list-wrapper">
        <div className="col-sm-12">
                <p className="search-status">Saved Items</p>
        </div>
            {  
                this.state.items.map((item, index) => {
                    let { authors, title, image, link, description, _id } = item;
                    let bookTitle = item.title;
                    return (
                        <div key={index} className="col-sm-12 col-md-4 col-lg-12 book-column">
                            <div className="book-wrapper">
                                {<Delete
                                    id={item._id}
                                    deleteSaved={this.deleteSaved.bind(this)}
                                />}
                                <a className="book" href={link} target="_blank">
                                <div className="book-title white-text">
                                        <h3>{bookTitle}</h3>
                                    </div>
                                </a>
                                <p><strong>Author: </strong>{authors}</p>
                                <div className="book-inner-flex">
                                <a className="book" href={link} target="_blank">
                                    <div className="book-image-wrapper">
                                        <img src={image[0] !== undefined ? image[0].thumbnail : altImage}
                                            alt="Book Image"
                                            className="book-image"
                                        />
                                    </div>
                                    
                                </a>
                                <div className="description">                        
                                    <div><strong>Description:</strong></div>
                                    {description}</div>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
        }
    }
}

export default SavedGallery;
