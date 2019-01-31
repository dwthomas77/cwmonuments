import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Block } from 'components/Base';
import Filter from 'components/Filter';
import List from 'components/List';

class CollectionSteward extends Component {
    static propTypes = {
        activeItem: PropTypes.string.isRequired,
        setActiveItem: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.collection = props[props.collectionKey];
    }

    render() {
        const listProps = {
            activeItem: this.props.activeItem,
            list: this.collection,
            setActiveItem: this.props.setActiveItem,
        };

        return (
            <Block {...this.props}>
                <Filter />
                <List {...listProps} />
            </Block>
        );
    }
}

export default CollectionSteward;
