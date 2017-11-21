import React, { Component } from 'react'
import Header from 'components/header'
import Page from 'components/page'
import stylesheet from 'styles/index.scss'
import Div from 'components/core/div'
import styled from 'styled-components'

const PageContainer = styled(Div)`
  flex-direction: column;
  font-family: ${props => props.theme.serifFontFamily};
`
export default class Index extends Component {
  render() {
    return (
      <Page>
        <PageContainer>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <Header />
        </PageContainer>
      </Page>
    )
  }
}
