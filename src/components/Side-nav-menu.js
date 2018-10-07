import React from 'react';
import logo from '../images/logoSBTech.png';
import data from '../data/sidenav.json';

class SideNavMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentToggleSportId: undefined,
            currentToggleCountryId: undefined,
            currentToggleLeagueId: undefined,
            currentToggleEventId: undefined
        };
        this.onToggleItem = this.onToggleItem.bind(this);
    }

    onToggleItem(id){
        const currentToggleItemId = id !== this.state.currentToggleItemId ? id : undefined
        this.setState({ currentToggleItemId })
      }

    render (){
        return(
            <div className="sidenav">
                <div className="logo-wrapper">
                    <img src={logo} className="sidenav-logo" />
                </div>
                <div className="sports-wrapper">
                
                    <div className="sport-item" id="1"  onClick={() => this.onToggleItem(1)}>Soccer</div>
                    {this.state.currentToggleItemId == 1 ? <div className="country-wrapper">
                        <div className="country-item" id="2" onClick={() => this.onToggleItem(2)}>England</div>
                        {this.state.currentToggleItemId == 2 ? <div className="league-wrapper">
                            <div className="league-item">Premier league</div>
                            <div className="events-wrapper">
                                <div className="event-item">Ala Bala</div>
                            </div>
                        </div> : null}
                    </div> : null}
                </div>
            </div>
        );
    }
}

export default SideNavMenu;