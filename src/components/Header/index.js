import React from 'react';
import styled from 'styled-components';
import { Block } from 'components/Base';

const Header = (props) => {
    return (<Block {...props}><h2>Header</h2></Block>);
};

const HomePageHeader = styled(Header)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: grey;
    color: ivory;
`;

export default HomePageHeader;
