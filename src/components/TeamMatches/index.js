// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: {},
    recentMatchesList: [],
    teamBanner: '',
    isLoading: true,
    teamForBg: '',
  }

  componentDidMount() {
    this.getRecentMatchData()
  }

  getRecentMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    this.setState({teamForBg: id})
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latest = data.latest_match_details

    const recent = data.recent_matches
    const banner = data.team_banner_url
    const latestMatch = {
      umpires: latest.umpires,
      result: latest.result,
      manOfTheMatch: latest.man_of_the_match,
      id: latest.id,
      date: latest.date,
      venue: latest.venue,
      teamName: latest.competing_team,
      teamLogo: latest.competing_team_logo,
      firstInning: latest.first_innings,
      secondInning: latest.second_innings,
      status: latest.match_status,
    }
    const recentMatch = recent.map(each => ({
      id: each.id,
      result: each.result,
      teamLogo: each.competing_team_logo,
      teamName: each.competing_team,
      status: each.match_status,
    }))
    this.setState({
      latestMatchDetails: latestMatch,
      recentMatchesList: recentMatch,
      teamBanner: banner,
      isLoading: false,
    })
  }

  renderCards = () => {
    const {latestMatchDetails, recentMatchesList, teamBanner} = this.state
    return (
      <div className="matches-body-container">
        <img src={teamBanner} className="banner" alt="team banner" />
        <h1 className="common-heading">Latest Matches</h1>
        <LatestMatch data={latestMatchDetails} />
        <ul className="recent-match-container">
          {recentMatchesList.map(each => (
            <MatchCard object={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading, teamForBg} = this.state

    return (
      <div className={`matches-bg-container ${teamForBg}`}>
        {isLoading ? (
          <div data-testid="loader" className="for-loading">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderCards()
        )}
      </div>
    )
  }
}

export default TeamMatches
