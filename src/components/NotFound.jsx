import React, { Component } from 'react';
import Header from './Header';
export default class NotFound extends Component {

    render() {
        return (
            <div className="">
                <Header/>
                <div className="body">
                    <h1>Página não encontrada</h1>
                </div>
            </div>
        );
    }
}   