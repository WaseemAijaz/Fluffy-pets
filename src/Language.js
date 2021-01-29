import React, { Component } from "react";
import { Translator, T, TF, LanguageList, Config } from 'react-translator-component'

import "./styles.css";
Config.default = "en";

Config.list = {
  de: {
    text: "Deutsch",
    icon: "./flags/de.svg",
    file: require("./locale/de.js")
  },
  en: {
    text: "English",
    icon: "./flags/en.svg",
    file: require("./locale/en")
  },
  es: {
    text: "Español",
    icon: "./flags/es.svg",
    file: require("./locale/es")
  },
  fr: {
    text: "Français",
    icon: "./flags/fr.svg",
    file: require("./locale/fr")
  },
  it: {
    text: "Italiano",
    icon: "./flags/it.svg",
    file: require("./locale/it")
  },
  ru: {
    text: "Pусский",
    icon: "./flags/ru.svg",
    file: require("./locale/ru")
  },
  tr: {
    text: "Türkçe",
    icon: "./flags/tr.svg",
    file: require("./locale/tr")
  }
};

class Language extends Component {
  constructor() {
    super();

    this.state = {
      language: Config.default
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <table className="language-lists">
            <tbody>
              <tr>
                <td>
                  <LanguageList Language={this.state.language} />
                  <select
                    className="custom-language-list"
                    value={this.state.language}
                    onChange={e => this.setState({ language: e.target.value })}
                  >
                    {Object.keys(Config.list).map(key => (
                      <option key={key} value={key}>
                        {Config.list[key].text}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </header>
      </div>
    );
  }
}

export default Language;