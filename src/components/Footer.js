import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    border-top: 2px solid grey;
    padding: 40px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const RowTop = styled.div`
    p{
        display: flex;
        text-align: center;
        color: grey;
        font-size: 1.8rem;
    }
    @media screen and (max-width: 968px){
        p{
            font-size: 1.3rem;
        }
    }
`;

const RowBottom = styled.div`    
    text-align: center;
`;

const Icon = styled.a`
font-size: 1.8rem;
margin: 10px;
    text-decoration: none;
    color: black;
`;

function Footer() {
    return (
        <div>
            <Container>
                <RowTop>
                    Made by Ayush Patra
                </RowTop>
                <RowBottom>
                    <Icon href="https://www.linkedin.com/in/ayush-patra-31b36119b" target="_blank"><i class="fab fa-linkedin"></i></Icon>
                    <Icon href="https://github.com/ayushpatra11" target="_blank"><i class="fab fa-github-square"></i></Icon>
                    <Icon href="https://twitter.com/ayushpatra11" target="_blank"><i class="fab fa-twitter"></i></Icon>

                </RowBottom>
            </Container>
        </div>
    )
}

export default Footer
