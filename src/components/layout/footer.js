import React from 'react';
import styled from 'styled-components';

const FooterEl = styled.div`
    background: black;
    color: white;
    text-align: center;
    font-size: 1em; 
    font-family: 'markweb-light', Arial; 
    height: 2em;
    width: 100%;
    position: fixed;
    left:0;
    bottom:0;
    line-height:2em;

`;

        

class Footer extends React.Component{
    
    render(){
        return(
            <FooterEl>
                <div>© {new Date().getFullYear()} <span>Curve</span></div>
            </FooterEl>
        )
    }   
    
}

export default Footer;