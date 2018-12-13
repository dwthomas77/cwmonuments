import React, { Component } from 'react';
import styled from 'styled-components';
import { Column, Layout, Page, Row } from 'components/Base';
import Card from 'components/Card';
import CollectionSteward from 'components/CollectionSteward';
import Header from 'components/Header';
import InteractiveMap from 'components/InteractiveMap';

class App extends Component {
render() {
    const MonumentsSteward = styled(CollectionSteward)`
        background-color: white;
        flex: 3;
    `;

    const ActiveMonumentCard = styled(Card)`
        background-color: #bdbdbd;
        flex: 1;
    `;

    const HistoryCard = styled(Card)`
        background-color: #939393;
        flex: 1;
    `;

    const MonumentMap = styled(InteractiveMap)`
        background-color: #d3d3d3;
        flex: 3;
    `;

    const rowHeight = {
        header: 100,
    };

    return (
        <Page>
            <Layout>
                <Row rowHeight={`${rowHeight.header}px`}>
                    <Header />
                </Row>
                <Row rowHeight={`calc(100% - ${rowHeight.header}px)`}>
                    <Column>
                        <MonumentsSteward />
                        <ActiveMonumentCard />
                    </Column>
                    <Column columnWidth="2">
                        <HistoryCard />
                        <MonumentMap />
                    </Column>
                </Row>
            </Layout>
        </Page>
    );
    }
}

export default App;
