import React from 'react'
import PropTypes from 'prop-types'

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

export default class Popular extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'selectedLang': 'All'
    }

    this.handleUpdateLang = this.handleUpdateLang.bind(this)
  }

  handleUpdateLang(lang) {
    this.setState({
      'selectedLang': lang
    })
  }

  render() {

    return (<SelectLanguage
      selectedLang={this.state.selectedLang}
      handleUpdateLang={this.handleUpdateLang}
    />)
  }
}
