import {Component} from 'react';
import './Aside.scss';
import { index } from "../../actions/requests";

class Aside extends Component {

    constructor(props){
        super(props);
        this.state = {
            pokemons: [],
        }
    }
    componentDidMount() {
        const result = index().then(res => {
            this.setState({pokemons: res})
        });

        document.querySelector(".search").addEventListener("keyup", (e) => {
           this.searchPokemon(e);
        });
    }

    searchPokemon(e) {
        if(e.keyCode !== 13) return;

        let value = document.querySelector(".search").value;
        let pokemons = this.state.pokemons;
        let pokemon = pokemons.find(el => ((el.name).toString() === value.toString()));
        if(typeof(pokemon) !== 'undefined') {
            var pokeInfo = document.querySelector(".pokemon").querySelectorAll("p");
            pokeInfo[0].innerHTML = "<span>Name: </span>" + pokemon.name;
            pokeInfo[1].innerHTML = "<span>Weight: </span>" + pokemon.weight;
            pokeInfo[2].innerHTML = "<span>Height: </span>" + pokemon.height;
            pokeInfo[3].innerHTML = "<span>Evolves to: </span>" + pokemon.evolvesto;
            pokeInfo[4].innerHTML = "<span>Evolves from: </span>" + pokemon.evolvesfrom;
            pokeInfo[5].innerHTML = "<span>Origin: </span>" + pokemon.origin;
        }
    }

    render() {
        return(
            <aside className="aside">
                <input type="text" className="search" name="search" placeholder="Pokemon name"/>
                <div className="pokemon">
                    <p className="name"></p>
                    <p className="weight"></p>
                    <p className="height"></p>
                    <p className="evolvesto"></p>
                    <p className="evolvesfrom"></p>
                    <p className="origin"></p>
                </div>
            </aside>
        );
    }
}

export default Aside;