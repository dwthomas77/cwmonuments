import React from 'react';

const withContext = Context => ConsumerComponent => props => {
    return (
        <Context.Consumer>
            {(contextProps) => {
                const combinedProps = { ...props, ...contextProps };
                return <ConsumerComponent {...combinedProps} />;
            }}
        </Context.Consumer>
    )};

export { withContext };
