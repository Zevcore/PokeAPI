import {Component} from 'react';
import './Main.scss';
import { update, store, index, destroy } from "../../actions/requests";

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            pokemons: [],
            edit: false,
        }
        this.deleteElement = this.deleteElement.bind(this);
        this.fillUpdate = this.fillUpdate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const result = index().then(res => {
            this.setState({pokemons: res})
        });
    }

    handleSubmit(e) {

        const formData = new URLSearchParams();
        formData.append('name', e.target.name.value);
        formData.append('weight', e.target.weight.value);
        formData.append('height', e.target.height.value);
        formData.append('evolvesto', e.target.evolvesto.value);
        formData.append('evolvesfrom', e.target.evolvesfrom.value);
        formData.append('origin', e.target.origin.value);


        this.state.edit ? update(formData, e.target.id.value) : store(formData);
        this.setState({edit:false});
    }

    fillUpdate(e) {
        this.setState({edit: true})
        let pokemons = this.state.pokemons;
        let pokemon = pokemons.find(el => ((el.id).toString() === e.target.value));

        let form = document.querySelector('.crud');
        let fieldset = form.querySelector('fieldset');
        let inputs = fieldset.querySelectorAll("input");


        inputs[0].value = pokemon.name;
        inputs[1].value = pokemon.weight;
        inputs[2].value = pokemon.height;
        inputs[3].value = pokemon.evolvesto;
        inputs[4].value = pokemon.evolvesfrom;
        inputs[5].value = pokemon.origin;
        inputs[6].value = pokemon.id;
    }

    deleteElement(e) {
        let pokemons = this.state.pokemons;
        let pokemon = pokemons.find(el => ((el.id).toString() === e.target.value));
        let stateId = pokemons.indexOf(pokemon);

        destroy(e.target.value);

        pokemons.splice(stateId, 1);
        this.setState({pokemons: pokemons})
    }

    render() {
        return(
            <main className="main">
                <h1>/pokemons <span>GET</span></h1>

                <div className="wrapper">
                    <ul>
                        <span>Pokemon list</span>

                        {this.state.pokemons.length > 0 &&
                            this.state.pokemons.map((pokemon) => (
                                <li key={pokemon.id}>
                                    {pokemon.name}
                                    <div className="box">
                                        <button className="delete" value={pokemon.id} onClick={this.deleteElement}>delete</button>
                                        <button className="edit" value={pokemon.id} onClick={this.fillUpdate}>edit</button>
                                    </div>

                                </li>
                            ))
                        }

                    </ul>

                    <form className="crud" onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend>{this.state.edit ? "Edit" : "Create"}</legend>
                            <label htmlFor="name">name</label>
                            <input type="text" name="name" />
                            <label htmlFor="weight">weight</label>
                            <input type="number" name="weight" />
                            <label htmlFor="height">height</label>
                            <input type="number" name="height" />
                            <label htmlFor="evolvesto">evolves to</label>
                            <input type="text" name="evolvesto" />
                            <label htmlFor="evolvesfrom">evolves from</label>
                            <input type="text" name="evolvesfrom" />
                            <label htmlFor="origin">origin</label>
                            <input type="text" name="origin" />
                            <input type="hidden" name="id" />
                            <input type="submit" value={this.state.edit ? "Edit" : "Create"} />
                        </fieldset>
                    </form>
                </div>

            </main>
        );
    }
}

export default Main;