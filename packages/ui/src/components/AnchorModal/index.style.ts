import styled from "@emotion/styled"
import Button from '@mui/material/Button'

export const Box = styled.div`
    position: fixed;
    bottom: -10em;
    display: flex;
    width: 80%;
    max-width: 300px;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.3s cubic-bezier(0.42, 1.02, 0.7, 1.09);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    pointer-events: all;
    overflow: hidden;
    z-index: 99;
    border-radius: 6px;

    &.visible {
        bottom: 72px;
    }
`

export const UrlBox = styled.div`
    user-select: all;
    height: 100%;
    width: 80%;
    font-size: 16px;
    line-height: 28px;
    height: 40px;
    padding: 6px 10px;
    box-sizing: border-box;
    border-radius: 6px 0 0 6px;
    background-color: white;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-right-color: transparent;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }
`

export const GoButton = styled(Button)`
    height: 40px;
    width: 60px;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    border-radius: 0;
    background: #1b82fe;
    color: white;
    border-radius: 0 6px 6px 0;
`