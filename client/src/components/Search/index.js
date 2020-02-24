import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import Gallery from '../Gallery';
import Logo from "../Logo";
import "./style.css";


class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            query: '',
            items: [],
            lastQuery: ''
        };
    }
    search(){
        const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
        fetch(`${BASE_URL}${this.state.query}`, {method: 'GET'})
        .then(response => response.json())
        .then(json => {
            let {items} = json;
            this.setState({items});
            this.setState({lastQuery : this.state.query });
            console.log(json);
        });
    }

    render () {
        return (
            <div className="global">
            <Logo />
                <FormGroup>
                    <InputGroup>
                        <FormControl 
                        type = "text"
                        placeholder = "Search for a book"
                        onChange = { event => this.setState({query: event.target.value})} 
                        onKeyPress = { event => {
                            if(event.key == "Enter"){
                                this.search();
                            }
                        }}
                        />
                        <InputGroup.Addon onClick={() => this.search()}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <Gallery items = {this.state.items} 
                    query = {this.state.lastQuery} 
                    />   
            </div>
        )
    }
}

export default Search;