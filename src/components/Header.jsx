import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class Header extends Component {

    render() {
        return (
            <div className="bg-header">
                <header className="header-main container">

                    <Link to="/" className="logo" title="Evolucional"><img alt="Evolucional" src="http://www.evolucional.com.br/Public/images/logo-evolucional.png" /></Link>

                    <span className="btn-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>

                    <nav className="menu">
                        <ul>
                            <li><Link to="/" title="Home">HOME</Link></li>
                            
                            <li><Link to="/students" title="">Estudantes</Link></li>
                            <li><Link to="/teachers" title="">Professores</Link></li>
                            
                            {/* <li><Link href="/experimente" className="hide" title="Promoçãp">EXPERIMENTE </Link></li> */}
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}