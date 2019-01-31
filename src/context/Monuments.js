import React, { Component } from 'react';

const hardcodeMonuments = [
    {
        uid: 'test1',
        city: 'Methuen',
        state: 'MA',
        img: 'IMG_3125.JPG'
    },
    {
        uid: 'test2',
        city: 'Haverhill',
        state: 'MA',
        img: 'IMG_3125.JPG'
    },
    {
        uid: 'test3',
        city: 'Boston',
        state: 'MA',
        img: 'IMG_3125.JPG'
    },
];

const MonumentsContext = React.createContext();

class MonumentsProvider extends Component {
    constructor(props) {
        super(props);
        this.key = 'monuments';
        this.setActiveItem = this.setActiveItem.bind(this);
        this.state = {
            activeItem: hardcodeMonuments ? hardcodeMonuments[0].uid : null,
            monuments: hardcodeMonuments,
        };
    }

    setActiveItem(uid) {
        console.log('setting this active item', uid);
        this.setState({ activeItem: uid });
    }

    render() {
        const { activeItem, monuments } = this.state;
        const context = {
            activeItem,
            monuments,
            setActiveItem: this.setActiveItem,
        };

        return (
            <MonumentsContext.Provider value={context}>
                {this.props.children}
            </MonumentsContext.Provider>
        );
    }
}

export default MonumentsContext;
export { MonumentsProvider };
