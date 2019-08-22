import React from "react"
import {Icon} from "antd"
import styled from 'styled-components';

function Footer(){
    const Root = styled.div`
        height: auto;
        max-width: 1024px;
        width:100%;
        margin: auto;
        padding: 30px 10px;

    `

    const Span = styled.span`
    color: white;
    margin-left: 5px;   
    vertical-align: text-center 
    `
    return <Root><Icon style={{color: "white"}}type="copyright" /><Span><a href="http://pfeiffer-vacuum.com">© 2019 Pfeiffer Vacuum GmbH    </a></Span> </Root>
}

export default Footer;