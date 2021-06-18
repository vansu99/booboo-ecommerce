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
  blockCenter: css`
    display: block;
    margin: 0 auto;
  `,
  imgCover: css`
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    transition: all 0.2s ease;
  `,
  show: css`
    opacity: 1;
    visibility: visible;
  `,
  textSingle: css`
    white-space: nowrap;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  textTruncate: css`
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
  `,
};
