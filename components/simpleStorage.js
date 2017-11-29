import React, { Component } from 'react'
import Div from 'components/core/div'
import styled from 'styled-components'

const LotteryContainer = styled(Div)`
  margin-top: 100px;
  flex-direction: column;
  align-items: center;
`

export default class Lottery extends Component {
  constructor() {
    super()
    this.state = { storedValue: 0, inputValue: 0 }
  }

  componentDidMount() {
    this.props.contractInstance.get.call().then(result => {
      this.setState({ storedValue: result.c[0], inputValue: 0 })
    })
  }

  handleButtonClick() {
    this.props.contractInstance.set(this.state.inputValue, { from: this.props.contractAccounts[0] }).then(() => this.props.contractInstance.get.call()).then(result => {
      this.setState({ storedValue: result.c[0], inputValue: 0 })
    })
  }

  render() {
    return (
      <LotteryContainer>
        <h1>{this.state.storedValue}</h1>
        <input onChange={event => this.setState({ inputValue: event.target.value })} value={this.state.inputValue} />
        <button onClick={() => this.handleButtonClick()}>Set Value</button>
      </LotteryContainer>
    )
  }
}
