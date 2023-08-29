import styled, { css } from 'styled-components';

const standardHeader = css`
    margin: 0px;
    color: var(--dark-color);
    font-weight: 700;
`

export const THeader1 = styled.h1`
    ${standardHeader}
    margin-bottom: 20px;
    font-size: 1.8rem;
`

export const THeader2 = styled.h2`
    ${standardHeader}
    margin-bottom: 10px;
    font-size: 1.4rem;

`
