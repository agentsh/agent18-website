import React from 'react';
import PropTypes from 'prop-types';
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

const ButtonLink = styled.a`
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
    text-decoration: none;
`;

export default class Tickets extends React.PureComponent {
    static propTypes = {
        ticket1Headline: PropTypes.string.isRequired,
        ticket1Price: PropTypes.string.isRequired,
        ticket1Description: PropTypes.string.isRequired,
        ticket1ButtonText: PropTypes.string.isRequired,
        ticket2Headline: PropTypes.string.isRequired,
        ticket2Price: PropTypes.string.isRequired,
        ticket2Description: PropTypes.string.isRequired,
        ticket2ButtonText: PropTypes.string.isRequired,
        ticket3Headline: PropTypes.string.isRequired,
        ticket3Price: PropTypes.string.isRequired,
        ticket3Description: PropTypes.string.isRequired,
        ticket3ButtonText: PropTypes.string.isRequired,
    };

    render() {

        return (
            <TicketWrapper>
                <Title>Tickets, Prices and Benefits</Title>
                <div style={{clear: 'both'}}>
                    <ClosedTicketbox>
                        <Headline>{this.props.ticket1Headline}</Headline>
                        <hr />
                        <Price>{this.props.ticket1Price} €</Price>
                        <hr />
                        <Description dangerouslySetInnerHTML={{__html: this.props.ticket1Description}} />
                        <ButtonLink>{this.props.ticket1ButtonText}</ButtonLink>
                    </ClosedTicketbox>
                    <ActiveTicketbox>
                        <Headline>{this.props.ticket1Headline}</Headline>
                        <hr />
                        <Price>{this.props.ticket2Price} €</Price>
                        <hr />
                        <Description dangerouslySetInnerHTML={{__html: this.props.ticket2Description}} />
                        <ButtonLink href={bookingUrl} target="_blank">{this.props.ticket2ButtonText}</ButtonLink>
                    </ActiveTicketbox>
                    <TicketBox>
                        <Headline>{this.props.ticket3Headline}</Headline>
                        <hr />
                        <Price>{this.props.ticket3Price} €</Price>
                        <hr />
                        <Description dangerouslySetInnerHTML={{__html: this.props.ticket3Description}} />
                            
                        <ButtonLink href={bookingUrl} target="_blank">{this.props.ticket3ButtonText}</ButtonLink>
                    </TicketBox>
                </div>
            </TicketWrapper>
        );
    }
}
