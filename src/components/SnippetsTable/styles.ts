import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--input-text);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      font-size: 1.5rem;
    }

    td {
      padding: 1.5rem;
      border: 0;
      background: var(--input-back);
      color: var(--snippet-text);
      border-radius: 0.5rem;
    }
  }
`;
