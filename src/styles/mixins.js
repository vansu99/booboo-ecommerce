import { css, keyframes } from 'styled-components';

export const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexCenterColumn: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  fadeIn: keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,
  grow: keyframes`
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.5);
    }
  `,
  hide: css`
    opacity: 0;
    visibility: hidden;
  `,
  show: css`
    opacity: 1;
    visibility: visible;
  `,
};
