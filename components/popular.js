import React from 'react'

export default class Popular extends React.Component {
  constructor() {
    super()
    this.state = {
      'selectedLanguage': 'All'
    }
  }

  updateLanguage(lang) {
    this.setState({
      'selectedLanguage': lang
    })
  }

  render() {
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'Css', 'Python']

    return (
      <ul className="languages">{ languages.map(lang => (
        <li
          style={lang === this.state.selectedLanguage ? {color: 'red'}: null}
          onClick={() => this.updateLanguage(lang)}
          key={ lang }
        >
          {lang}
        </li>
      )) }
    </ul>
    )
  }
}
