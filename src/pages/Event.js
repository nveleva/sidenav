import React from "react";

const data = {
  sites: [
    [
      "NordicBet",
      "Betsson",
      "WillHillPreLive",
      "BetFairPreLive",
      "MarathonBetPreLive",
      "Dafabet",
      "SBO",
      "K998",
      "PinnacleFeed",
      "Bet366Prelive",
      "UnibetV3",
      "SBTech"
    ],
    ["ML", "ML", "ML", "ML", "ML", "ML", "ML", "ML", "ML", "ML", "ML", "ML"],
    [
      "-188 370 535",
      "-188 370 535",
      "-192 359 480",
      "-212 370 500",
      "-188 365 550",
      "-204 340 490",
      "-192 320 480",
      "-188 370 535",
      "-188 370 535",
      "-188 370 535",
      "-188 370 535",
      "-210 345 517"
    ],
    ["HC", "HC", "HC", "HC", "HC", "HC", "HC", "HC", "HC", "HC", "HC", "HC"],
    [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "-3.75 1150 -2000",
        ""
      ],
      [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "-3.5 800 -1250",
        ""
      ],
      [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "-3.25 750 -1115",
        ""
      ],
      [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "-3 700 -1000",
        ""
      ],
      [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "-2.75 425 -625",
        "-2.75 450 -590",
        ""
      ],
      [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "-2.5 300 -434",
        "-2.5 330 -420",
        ""
      ],
      [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "-2.25 270 -384",
        "-2.25 290 -360",
        ""
      ]
  ]
};

class Event extends React.Component {
  constructor(props) {
    super(props);
    const [visible] = data.sites;
    this.state = {
      visible: visible.reduce((acc, site, index) => {
        acc[index] = true;
        return acc;
      }, {})
    };
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  handleVisibilityChange(e, index) {
    this.setState(prev => {
      return {
        visible: {
          ...prev.visible,
          [index]: !prev.visible[index]
        }
      };
    });
  }

  render() {
    const { visible } = this.state;
    const { sites } = data;

    return (
      <div className="content-wraper">
        <h2>This is event with id: !!!</h2>
        <div>
          {sites[0].map((site, index) => {
            return (
              <label key={site} style={{marginRight: "10px"}}>
                <input
                  key={site}
                  type="checkbox"
                  onChange={e => this.handleVisibilityChange(e, index)}
                  checked={visible[index]}
                />
                {site}
              </label>
            );
          })}
        </div>

        <table id="event-details" border="1">
          <tbody>
            {sites.map(row => {
              return (
                <tr>
                  {row.map((value, i) => {
                    return visible[i] && <td>{value}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Event;
