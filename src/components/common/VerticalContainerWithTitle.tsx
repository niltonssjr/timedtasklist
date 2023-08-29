import styled from 'styled-components';

export const VerticalContainerWithTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    height: 100%;
    gap: 10px;
    > div:last-child{
        flex: 1;
    }
`
