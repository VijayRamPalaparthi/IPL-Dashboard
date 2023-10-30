// Write your code here
import './index.css'

const LatestMatch = props => {
  const {data} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    teamName,
    teamLogo,
    firstInning,
    secondInning,
  } = data

  return (
    <div className="latest-match-card">
      <div className="card-part">
        <p className="c-team-name">{teamName}</p>
        <p className="date">{date}</p>
        <p className="common-heading">{venue}</p>
        <p className="common-heading">{result}</p>
      </div>
      <img
        src={teamLogo}
        alt={`latest match ${teamName}`}
        className="c-team-logo"
      />
      <div className="card-part">
        <p className="common-heading1">First Innings</p>
        <p className="common-heading2">{firstInning}</p>
        <p className="common-heading1">Second Innings</p>
        <p className="common-heading2">{secondInning}</p>
        <p className="common-heading1">Man Of The Match</p>
        <p className="common-heading2">{manOfTheMatch}</p>
        <p className="common-heading1">Umpires</p>
        <p className="common-heading2">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
