export default function Characters(props) {
    const { characters, setCharacters } = props;

    const resetCharacters = () => {
        setCharacters(null);
    }

    return (
        <div className="body">
            <div className="personajesGoHome">
            <h1>
            Personajes
            </h1>
            <button className="btn-search" onClick={resetCharacters}>
            Volver a home
            </button>
            </div>
            <div className="container-characters">
                {characters.map((character, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status === "Alive" ? (
                                    <>
                                    <span className="alive" />
                                    Alive
                                    </>
                                ) : (
                                    <>
                                    <span className="dead" />
                                    Dead
                                    </>
                                )}
                            </h6>
                            <span className="text-grey">Episodios: </span>
                            <span>{character.episode.length}</span>
                            <p>
                                <span className="text-gray">
                                    Especie: </span>
                                <span className="text-gray">
                                {character.species}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
                
            </div>
            <div className="div-goHome">
            <button className="btn-search" onClick={resetCharacters}>Volver a home</button>
            </div>
        </div>
      );
}
