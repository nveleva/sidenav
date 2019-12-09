import React, { Component } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";

export default class GridExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        {
          headerName: "Athlete",
          children: [
            {
              field: "athlete",
              width: 150
            },
            {
              field: "age",
              lockVisible: true,
              cellClass: "locked-visible"
            },
            {
              field: "country",
              width: 150
            },
            { field: "year" },
            { field: "date" },
            { field: "sport" }
          ]
        },
        {
          headerName: "Medals",
          children: [
            {
              field: "gold",
              lockVisible: true,
              cellClass: "locked-visible"
            },
            {
              field: "silver",
              lockVisible: true,
              cellClass: "locked-visible"
            },
            {
              field: "bronze",
              lockVisible: true,
              cellClass: "locked-visible"
            },
            {
              field: "total",
              lockVisible: true,
              cellClass: "locked-visible",
              hide: true
            }
          ]
        }
      ],
      defaultColDef: { width: 100 },
      rowData: []
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    const httpRequest = new XMLHttpRequest();
    const updateData = data => {
      this.setState({ rowData: data });
    };

    httpRequest.open(
      "GET",
      "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json"
    );
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        updateData(JSON.parse(httpRequest.responseText));
      }
    };
  }

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div class="grid-wrapper">
          <div
            id="myGrid"
            style={{
              boxSizing: "border-box",
              height: "100%",
              width: "100%"
            }}
            className="ag-theme-balham"
          >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              showToolPanel={true}
              toolPanelSuppressRowGroups={true}
              toolPanelSuppressValues={true}
              toolPanelSuppressPivots={true}
              toolPanelSuppressPivotMode={true}
              defaultColDef={this.state.defaultColDef}
              onGridReady={this.onGridReady.bind(this)}
              rowData={this.state.rowData}
            />
          </div>
        </div>
        <div class="legend-bar">
          <span class="legend-box locked-visible">&nbsp;&nbsp;&nbsp;&nbsp;</span> Locked Visible Column
        </div>
      </div>
    );
  }
}

render(<GridExample />);