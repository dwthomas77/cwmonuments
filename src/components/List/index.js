import React from 'react';
import styled from 'styled-components';
import ListItem from 'components/ListItem';

const List = (props) => {
    const { activeItem, list, setActiveItem } = props;

    return (
        <ul className={props.className}>
            {list
                .map((listItem) => {
                    const itemProps = {
                        key: listItem.uid,
                        onClick: () => { setActiveItem(listItem.uid); },
                        ...listItem,
                    };
                    console.log(props);
                    if (activeItem === listItem.uid) {
                        itemProps.className = '--active';
                    }
                    return (<ListItem {...itemProps} />);
                })
            }
        </ul>
    );
};

const BaseList = styled(List)`
    border: thin black solid;
    margin-top: 10px;
`;

export default BaseList;
