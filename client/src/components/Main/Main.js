import {Component} from 'react';
import './Main.scss';

class Main extends Component {

    state = {
        pokemons: []
    }

    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        };

        fetch("http://0.0.0.0:80/api/pokemons", requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ pokemons: data }));
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = new URLSearchParams();
        formData.append('name', e.target.name.value);
        formData.append('weight', e.target.weight.value);
        formData.append('height', e.target.height.value);
        formData.append('evolvesto', e.target.evolvesto.value);
        formData.append('evolvesfrom', e.target.evolvesfrom.value);
        formData.append('origin', e.target.origin.value);


        // let data = {
        //   name: e.target.name.value,
        //   weight: e.target.weight.value,
        //   evolvesto: e.target.evolvesto.value,
        //   evolvesfrom: e.target.evolvesfrom.value,
        //   origin: e.target.origin.value,
        // };
        //
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData.toString(),
            json: true,
        };
        // console.log(requestOptions);
        fetch("http://0.0.0.0:80/api/pokemons", requestOptions);
    }

    render() {
        return(
            <main className="main">
                <h1>/pokemons <span>GET</span></h1>

                <ul>
                    <span>Pokemon list</span>

                    {this.state.pokemons.length > 0 &&
                        this.state.pokemons.map((pokemon) => (
                            <li key={pokemon.id}>{pokemon.name}</li>
                        ))
                    }

                </ul>

                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Create</legend>
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
                        <input type="submit" value="Dodaj" />
                    </fieldset>
                </form>

            </main>
        );
    }
}

export default Main;