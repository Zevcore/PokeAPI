import {Component} from 'react';
import './Sidebar.scss';
import logo from "./pokeball.png";

class Sidebar extends Component {
    render() {
        return(
            <sidebar className="sidebar">
                <header className="header">
                    <img src={logo} alt="" />
                        <h1>pokeAPI</h1>
                </header>
                <form>
                    <input type="text" placeholder="search" />
                </form>
                <ul>
                    <p>APIs</p>
                    <li>
                        <div className="path">/pokemons</div>
                        <span style={{color: "#50e610"}}>GET</span></li>
                    <li>
                        <div className="path">/pokemons</div>
                        <span style={{color: "#1cd3eb"}}>POST</span></li>
                    <li>
                        <div className="path">/pokemons/:id</div>
                        <span style={{color: "#50e610"}}>GET</span></li>
                    <li>
                        <div className="path">/pokemons/:id</div>
                        <span style={{color: "#b810e6"}}>PUT</span></li>
                    <li>
                        <div className="path">/pokemons/:id</div>
                        <span style={{color: "#e38710"}}>DELETE</span></li>
                </ul>
            </sidebar>
        );
    }
}

export default Sidebar;