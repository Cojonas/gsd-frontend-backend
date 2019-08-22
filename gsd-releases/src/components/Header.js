import logo from '../Pfeiffer-Vacuum-Logo.png';
import React from "react"
import styled from 'styled-components';

function Header() {

    const Span = styled.span`
        font-size: 25px;
        color: #c03;
        line-height: 1;
        vertical-align: middle;
        padding-left: 10px;

    ` 


    const Logo = styled.img`
    height: 60px;
    padding: 2px 0px;
    width: auto; 
    margin: auto;
    vertical-align: middle;
    line-height: 1;
    `

    const Container = styled.div`
    line-height:1;
    vertical-align: middle;
    `

    return  <Container>
                <Logo src={logo} className="App-logo"  alt="logo" />
                <Span>GSD Updates</Span>
    </Container>

}

export default Header