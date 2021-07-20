import CharCard from "../CharCard"
const Characters = ({characterList}) =>{
    
    return(
        <div className="characterList">
            <h2>Meus personagens</h2>
            <ul>
                { 
                    characterList.map(({id,name,status,image}) => <CharCard 
                        key={id} 
                        name={name} 
                        status={status}
                        image={image}
                        /> 
                    )
                }
            </ul>
        </div>
    )
 
}
export default Characters