// Write your code here
import './index.css'

const MatchCard = props => {
  const {object} = props
  const {result, teamLogo, teamName, status} = object

  return (
    <li className="march-card-container">
      <img
        src={teamLogo}
        alt={`competing team ${teamName}`}
        className="match-team-logo"
      />
      <p className="m-team-name">{teamName}</p>
      <p className="date1">{result}</p>
      <p className={status}>{status}</p>
    </li>
  )
}

export default MatchCard
