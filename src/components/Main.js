import React from 'react';
import HubungiKamiForm from './HubungiKamiForm';
import Pokemon from "./Pokemon";

class Main extends React.Component{
    render() {
        const listPokemon = [
            {
                name:"Pikachu",
                image:"/img/pika.png",
                introduction:"The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button"
            },
            {
                name:"Bulbasaur",
                image:"/img/bulbasaur.png",
                introduction:"The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button"
            },
            {
                name:"Blastoise",
                image:"/img/blastoise.png",
                introduction:"The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button"
            },
            {
                name:"Charmander",
                image:"/img/charmander.png",
                introduction:"The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button"
            }
        ]
        return(
            <div className='main-wrapper'>
                <div className='main'>
                    <div className='hello-container'>
                        <h1>Hello, Pokemon hunter</h1>
                        <h2>Selamat datang di dunia Pokemon</h2>
                    </div>
                    <div className='pokemon-container'>
                        <h3>List Pokemon</h3>
                        <div className='list-card'>
                        {listPokemon.map((pokemon)=>{
                            return(
                                <Pokemon name={pokemon.name} image={pokemon.image} introduction={pokemon.introduction}/>
                            );
                        })}
                        </div>
                        {/* <Link className='btn' ></Link> */}
                    </div>
                    {/*Masukkan komponen HubungiKamiForm.js di bawah ini*/}
                </div>
                <div className='hubungikami-container'>
                    <h3>Hubungi Kami</h3>
                    <HubungiKamiForm/>
                </div>
            </div>
        );
    };
}

export default Main;