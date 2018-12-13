import React from 'react';
import styled from 'styled-components';

/** Unstyled Base Components **/
const Block = ({ children, className }) => <div className={className}>{children}</div>;
const Section = ({ children, className }) =>
    <section className={className}>{children}</section>;

const BaseRow = (props) => {
    return <Section {...props}>{props.children}</Section>
};

const BaseColumn = (props) => {
    return <Section {...props}>{props.children}</Section>
};

const BasePage = (props) => {
    return (<Section {...props}>{props.children}</Section>);
};

const BaseLayout = (props) => {
    return (<Section {...props}>{props.children}</Section>)
};

/** Styled Base Components **/
const Row = styled(BaseRow)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: ${props => props.rowHeight || 'auto'};
`;

const Column = styled(BaseColumn)`
    display: flex;
    flex-direction: column;
    flex: ${props => props.columnWidth || '1'};
    height: 100%;
`;

const Page = styled(BasePage)`
     height: 100%;
`;

const Layout = styled(BaseLayout)`
    height: 100%;
`;

console.log(Page);


export { Block, Column, Layout, Page, Row, Section };
