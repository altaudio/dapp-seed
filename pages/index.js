import React, { Component } from 'react'
import Header from 'components/header'
import SimpleStorage from 'components/simpleStorage'
import Page from 'components/page'
import stylesheet from 'styles/index.scss'
import Div from 'components/core/div'
import styled from 'styled-components'
import contract from 'truffle-contract'
import SimpleStorageContract from '../build/contracts/SimpleStorage.json'
import getWeb3 from '../common/getWeb3'

const PageContainer = styled(Div)`
  flex-direction: column;
  font-family: ${props => props.theme.serifFontFamily};
`
export default class Index extends Component {
  constructor() {
    super()
    this.state = { web3: null, contractInitialised: false }
  }

  componentDidMount() {
    getWeb3
      .then(results => {
        this.setState({ web3: results.web3 })
        this.initialiseContract()
      })
      .catch(() => {
        console.log('Error finding web3.')
      })
  }

  initialiseContract() {
    this.simpleStorage = contract(SimpleStorageContract)
    this.simpleStorage.setProvider(this.state.web3.currentProvider)

    this.state.web3.eth.getAccounts((error, accounts) => {
      this.simpleStorage.deployed().then(instance => {
        this.simpleStorageInstance = instance
        this.simpleStorageAccounts = accounts
        this.setState({ contractInitialised: true })
      })
    })
  }

  render() {
    if (!this.state.contractInitialised) {
      return null
    }

    return (
      <Page>
        <PageContainer>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <Header />
          <SimpleStorage contractInstance={this.simpleStorageInstance} contractAccounts={this.simpleStorageAccounts} />
        </PageContainer>
      </Page>
    )
  }
}
