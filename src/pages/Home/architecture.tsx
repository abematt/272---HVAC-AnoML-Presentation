import { lazy } from "react";
import diagram from '../../assets/anomaly_detection.gif'
import styled from "styled-components";
const Container = lazy(() => import("../../common/Container"));

const ArchitectureGif = styled.img`
    width: 100%;
    height: 100%;
`;

const Architecture = () => {
    return (
        <Container>
            <h1>Architecture Diagram</h1>
            <ArchitectureGif src={diagram} alt="loading"></ArchitectureGif>
            <p></p>
        </Container>

    );
};

export default Architecture;