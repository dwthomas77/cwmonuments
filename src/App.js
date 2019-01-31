import React, { Component } from 'react';
import styled from 'styled-components';
import { withContext } from 'context';
import MonumentsContext, { MonumentsProvider } from 'context/Monuments';
import { Column, Layout, Page, Row } from 'components/Base';
import Card from 'components/Card';
import CollectionSteward from 'components/CollectionSteward';
import Header from 'components/Header';
import InteractiveMap from 'components/InteractiveMap';
import MonumentImage from 'components/MonumentImage';
import 'styles.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.withMonumentsContext = withContext(MonumentsContext);
    }

    render() {
        const MonumentsSteward = this.withMonumentsContext(CollectionSteward);
        const ActiveMonumentImage = this.withMonumentsContext(MonumentImage);

        const StyledMonumentsSteward = styled(MonumentsSteward)`
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
            <MonumentsProvider>
                <Page>
                    <Layout>
                        <Row rowHeight={`${rowHeight.header}px`}>
                            <Header />
                        </Row>
                        <Row rowHeight={`calc(100% - ${rowHeight.header}px)`}>
                            <Column>
                                <StyledMonumentsSteward collectionKey='monuments' />
                                <ActiveMonumentImage />
                            </Column>
                            <Column columnWidth="2">
                                <HistoryCard />
                                <MonumentMap />
                            </Column>
                        </Row>
                    </Layout>
                </Page>
            </MonumentsProvider>
        );
    }
}

export default App;
