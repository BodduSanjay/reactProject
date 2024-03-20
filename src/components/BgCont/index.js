import {Component} from 'react'
import './index.css'
import History from '../History'

class BgCont extends Component {
  state = {
    text: '',
    historyList: [],
  }

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({historyList: initialHistoryList})
  }

  textChange = event => {
    const {value} = event.target
    this.setState({text: value})
    const newList = this.state.historyList.filter(each =>
      each.title.toLowerCase().includes(value.toLowerCase()),
    )
    this.setState({historyList: newList})
  }

  onDelete = value => {
    const newList = this.state.historyList.filter(each => each.id !== value)
    this.setState({historyList: newList})
  }


  render() {
    const {text, historyList} = this.state

    return (
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input type="search" onChange={this.textChange} value={text} />
          </div>
        </div>
        <div>
          {historyList.length !== 0 ? (
            <ul className="card">
              {historyList.map(item => (
                <History item={item} key={item.id} onDelete={this.onDelete} />
              ))}
            </ul>
          ) : (
            <div>
              <p>There is no history to show</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default BgCont
