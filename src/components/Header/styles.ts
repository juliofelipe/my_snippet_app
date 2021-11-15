import styled from 'styled-components';

export const Container = styled.header`
    background: var(--secondary-back)
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
 
    padding: 0.625rem 1rem 0.625rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Buttons = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`;

export const Inputs = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    display: grid;
    grid-template-columns: 160px 480px;
    gap: 1rem;
`;

export const Input = styled.input.attrs(props => ({
    size: props.size || "1rem"
}))`
    font-size: 1rem;
    padding: 0.625rem 1rem 0.625rem;
    max-width: 100%;
    background: var(--input-back);
    color: var(--input-text);
    border-radius: 0.5rem;
    border: 1px solid var(--input-text);
`;

