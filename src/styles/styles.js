import styled from 'styled-components';
//teste
export const Div_Principal = styled.div`
    position: relative;
    height: 100vh;
    overflow: hidden;
    .row {
        position: relative;
        display: inline-flex;
        margin-top: -45px;
        &:nth-child(even){
            position: relative;
            display: inline-flex;
            margin-top: -45px;
            margin-left: -75px;
        }
        .cube {
            position: relative;
            width: 150px;
            height: 150px;
            &:hover {
                span {
                    background: #03A9F4;
                    transition: 0s; 
                }
            }
            span {
                position: absolute;
                top: 0;
                left: 0;
                display: block;
                width: 100%;
                height: 100%;
                background: #FFFFFF;
                transition: 2s;
                animation: animate 10s linear infinite;
                @keyframes animate {
                    0% {
                        filter: hue-rotate(0deg);
                    }
                    100% {
                        filter: hue-rotate(360deg);
                    }
                }
                &:nth-child(1) {
                    clip-path: polygon(50% 0, 100% 25%, 50% 50%, 0 25%);
                }
                &:nth-child(2) {
                    clip-path: polygon(0 75%, 50% 100%, 50% 50%, 0 25%);
                    &:before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0,0,0,0.1);
                        clip-path: polygon(0 75%, 50% 100%, 50% 50%, 0 25%);
                    }
                }
                &:nth-child(3) {
                    clip-path: polygon(100% 75%, 50% 100%, 50% 50%, 100% 25%);
                    &:before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0,0,0,0.05);
                        clip-path: polygon(100% 75%, 50% 100%, 50% 50%, 100% 25%);
                    }
                }
            }
        }
    }
`;