import React from 'react';
import styled from 'styled-components';
const bookingUrl = 'https://www.eventbrite.de/e/agentconf-2018-tickets-31262914218?ref=elink';
const TicketWrapper = styled.div`
    position: absolute;
    z-index: 2;
    width: 1060px;
    max-width: 100%;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 500px;
    margin-bottom: 400px;
`;

const Title = styled.div`
    width: 150px;
    font-size: 48px;
    line-height: 54px;
    float: right;
    color: white;
    margin-bottom: 50px;
    margin-top: 200px;
    text-transform: uppercase;
    font-family: Teko;
`;

const TicketBox = styled.div`
    width: 338px;
    text-align: center;
    float: left;
    padding: 30px 20px;
    box-sizing: border-box;
    background: #282828;
    color: white;

    hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid #757575;
        margin: 1em 0;
        padding: 0;
    }
`;

const ActiveTicketbox = styled(TicketBox)`
    margin-top: -24px;
    color:black;
    background:white;
    border:none;
    width:380px;
`;

const ClosedTicketbox = styled(TicketBox)`
    color: #757575;
    border:none;
`;

const Headline = styled.div`
    font-size: 28px;
    line-height: 40px;
    text-transform: uppercase;
    font-family: Teko;
`;
const Price = styled.div`
    font-size: 24px;
    line-height: 30px;
    font-weight: 600;
`;
const Description = styled.div`
    padding-top:50px;
    padding-bottom: 70px
    font-size: 16px;
    line-height: 40px;
    font-weight: 600;
`;

const ButtonLink = styled.div`
    display: block;
    height: 40px;
    border-radius: 100px;
    background-color: #231f20;
    color: white;
    text-align: center;
    width: 260px;
    font-family: Teko;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 2px;
    line-height: 40px;
    text-align: center;
    text-transform: uppercase;
    margin: 0 auto;
    cursor: pointer;
`;

export default class Tickets extends React.PureComponent {
    render() {
        return (
            <TicketWrapper>
                <Title>Tickets, Prices and Benefits</Title>
                <div style={{clear: 'both'}}>
                    <ClosedTicketbox>
                        <Headline>Blind Bird</Headline>
                        <hr />
                        <Price> 99€ </Price>
                        <hr />
                        <Description>
                            Conference 20.01 & 21.01<br />
                            All Talks <br />
                            Conference refreshments<br />
                        </Description>
                        <ButtonLink>sold out</ButtonLink>
                    </ClosedTicketbox>
                    <ActiveTicketbox>
                        <Headline>Super Early Bird</Headline>
                        <hr />
                        <Price> 199€</Price>
                        <hr />
                        <Description>
                            Conference 20.01 & 21.01<br />
                            All Talks <br />
                            Conference refreshments<br />
                            Networking Events
                        </Description>
                        <ButtonLink>buy now</ButtonLink>
                    </ActiveTicketbox>
                    <TicketBox>
                        <Headline>Ski addon</Headline>
                        <hr />
                        <Price> 400€</Price>
                        <hr />
                        <Description>
                            2 Nights Hostel in Lech<br />
                            2 Ski passes in Lech<br />
                            <br />
                        </Description>
                        <ButtonLink>buy now</ButtonLink>
                    </TicketBox>
                </div>
            </TicketWrapper>
        );
    }
}
