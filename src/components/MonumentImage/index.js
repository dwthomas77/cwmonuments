import React from 'react';
import { Block } from 'components/Base';

const MonumentImage = (props) => {
    const { activeItem, monuments } = props;
    console.log('fuck', props);
    const activeMonument = monuments.find(monument => monument.uid === activeItem);
    console.log('here is the adctive monument', activeMonument);

    return (<Block {...props}>
        <p>Image Goes Here</p>
    </Block>);
};

export default MonumentImage;
