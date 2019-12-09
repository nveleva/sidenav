import React from 'react';
import logo from '../images/logoSBTech.png';
import data from '../data/sidenav';
import { Link } from 'react-router-dom';

const CLASS_ACTIVE = 'active';

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ref: React.createRef()
        }
    }

    toggleActive(event) {
        const li = event.target.parentNode;
        Array.from(li.parentNode.querySelectorAll('li')).map(elem => {
            elem.classList.remove(CLASS_ACTIVE);
        })
        li.classList.add(CLASS_ACTIVE);
    }

    render() {
        const {text, type, icon = "", subItems = [], link = '#' } = this.props;
        const { ref } = this.state;

        return (
            <li ref={ref} className={type.toLowerCase()}>
                {icon && <i className={`fa fa-${icon}`} aria-hidden="true"></i>}
                <Link to={link} onClick={e => this.toggleActive(e)}>{text}</Link>
                <ul>
                    {subItems.map(props => (
                        <MenuItem {...props} />
                    ))}
                </ul>
            </li>
        );

    }
}

export default class SideNavMenu extends React.Component {

    render() {
        const { branches } = data;
        return (
            <div className="sidenav">
                <div className="logo-wrapper">
                    <img src={logo} className="sidenav-logo" />
                </div>
                <div className="sports-wrapper">
                    <ul>
                        {branches.map(branch => {
                            const subItems = branch.countries.map(country => ({
                                key: country.countryId,
                                text: country.countryName,
                                type: "country",
                                icon: "flag",
                                subItems: country.countryLeague.map(league => ({
                                    key: league.leagueId,
                                    text: league.leagueName,
                                    type: "league",
                                    link: `league/${league.leagueId}`,
                                    subItems: league.events.map(event => ({
                                        key: event.eventId,
                                        text: event.eventName,
                                        type: "event",
                                        link: `event/${event.eventId}`
                                    }))
                                }))
                            }));
                            return <MenuItem type="branch" key={branch.sportId} text={branch.sportName} subItems={subItems} />
                        }
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}