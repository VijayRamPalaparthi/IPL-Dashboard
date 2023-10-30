// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {card} = props
  const {name, teamImageUrl, id} = card

  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="card-container">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
