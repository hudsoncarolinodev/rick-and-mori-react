
const CharCard = ({name,status,image}) =>{

    return(
        
        <li className="item">
          {
            status === "Alive" ?
          <div className="person active">
            <h2>{name}</h2>
            <figure>
              <img src={image} alt={name} />
            </figure>
          </div>
          :
          <div className="person">
            <h2>{name}</h2>
            <figure>
              <img src={image} alt={name} />
            </figure>
          </div>
          }
        </li>
        
    )
 
}
export default CharCard