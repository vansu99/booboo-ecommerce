import styled from 'styled-components';

const SkeletonPulse = styled.div`
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

export const SkeletonImage = styled(SkeletonPulse)`
  width: 100%;
  height: 25rem;
  border-radius: 5px;
`;

export const SSkeletonLine = styled(SkeletonPulse)`
  width: 100%;
  height: 2rem;
  border-radius: 5px;
  margin: 1rem 0;
`;

export const LayoutSkeletonItem = styled.div`
  ${({ space }) => space && `margin: 0 ${space}rem 5rem`};
  ${({ width, space }) => width && `width: calc(${width}% - ${space * 2}rem)`};

  @media ${(props) => props.theme.mediaQueries.medium} {
    ${({ space }) => space && `margin: 0 0.5rem 4rem`};
    ${({ width }) => width && `width: calc(${width * 2}% - 1rem)`};
  }

  @media ${(props) => props.theme.mediaQueries.minMedium} {
    ${({ space }) => space && `margin: 0 1rem 4rem`};
    ${({ width }) => width && `width: calc(${width}% - 2rem)`};
  }
`;
