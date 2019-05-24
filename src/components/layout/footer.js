import React from 'react'
import styled from 'styled-components'

const FooterEl = styled.div`
  ${'' /* background: black; */}
  background-image: linear-gradient(to right, #FF5A5A, #FE9959, #FCD859, #9EF657, #53EC86, #5ECDDD, #4655C7, #883DAD);
  color: white;
  text-align: center;
  font-size: 1em;
  font-family: 'markweb-light', Arial;
  font-weight: bold;
  height: 2em;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  line-height: 2em;
`

class Footer extends React.Component {
  render() {
    return (
      <FooterEl>
        <div>
          © {new Date().getFullYear()} <span>Curve</span>
        </div>
      </FooterEl>
    )
  }
}

export default Footer
