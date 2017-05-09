import React from 'react'
import PropTypes from 'prop-types'
import { fetchPopularRepos } from '../utils/api'

const SelectLanguage = props => {
  const languages = ['All', 'Javascript', 'Ruby', 'Java', 'Css', 'Python']

  return (<ul className="languages">{ languages.map(lang => (
    <li
      style={lang === props.selectedLang ? {color: 'red'}: null}
      onClick={() => props.handleUpdateLang(lang)}
      key={ lang }
    >
      {lang}
    </li>
  )) }
</ul>)
}

SelectLanguage.propTypes = {
  selectedLang: PropTypes.string.isRequired,
  handleUpdateLang: PropTypes.func.isRequired
}

const RepoMenu = props => (
  <ul className="popular-list">
    {props.repos.map(( repo, index ) => (
      <li key={repo.name} className='popular-item'>
        <div className='popular-rank'>#{index + 1}</div>
        <ul className='space-list-items'>
          <li>
            <img
              className='avatar'
              src={repo.owner.avatar_url}
              alt={'Avatar for ' + repo.owner.login}
            />
          </li>
          <li><a href={repo.html_url}>{repo.name}</a></li>
          <li>@{repo.owner.login}</li>
          <li>{repo.stargazers_count} stars</li>
        </ul>
      </li>
    ))}
  </ul>
)

export default class Popular extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'selectedLang': 'All'
    }

    this.handleUpdateLang = this.handleUpdateLang.bind(this)
  }

  componentDidMount() {
    this.handleUpdateLang(this.state.selectedLang)
  }

  handleUpdateLang(lang) {
    this.setState({
      'selectedLang': lang,
      repos: null
    })

    fetchPopularRepos(lang)
      .then(repos => this.setState(
        Object.assign(
          this.state,
          { repos: repos }
        ))
      )
  }

  render() {

    return (
      <div>
        <SelectLanguage
          selectedLang={this.state.selectedLang}
          handleUpdateLang={this.handleUpdateLang}
        />
        {!this.state.repos ? <p>Loading</p> : <RepoMenu repos={this.state.repos} /> }
      </div>)
  }
}
