import React from 'react';
import styled from 'styled-components';

const ListItem = (props) => {
    console.log(props);
    const { city, onClick, state } = props;
    return (
        <li className={props.className} onClick={onClick}>{city}, {state}</li>
    );
};

const BaseListItem = styled(ListItem)`
    padding: 5px 5px 5px 15px;
    border-bottom: thin black solid;
    cursor: pointer;
    
    :hover {
        background-color: #F5F5F5;
    }
    
    :last-child {
        border-bottom: thin transparent solid;
    }
    
    &.--active {
        background-color: #CCCCCC;
        cursor: default;
        :hover {
            background-color: #CCCCCC;
        }
    }
`;

export default BaseListItem;
