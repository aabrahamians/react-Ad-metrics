import React from "react";
import {Table, Column, Cell} from 'fixed-data-table';
import './fixed-data-table.min.css';
import './style.css';
import _ from 'lodash';


export default class Body extends React.Component { 
 


 constructor(props) {
    super(props);
    this.state = {
	   "ads": [
	    {
	      "id": 1,
	      "remote_id": "123",
	      "name": "123",
	      "status": "ACTIVE",
	    },
	    {
	      "id": 2,
	      "remote_id": "456",
	      "name": "456",
	      "status": "ACTIVE",
	    },
	    {
	      "id": 3,
	      "remote_id": "789",
	      "name": "789",
	      "status": "ACTIVE",
	    },
	    {
	      "id": 4,
	      "remote_id": "901",
	      "name": "901",
	      "status": "ACTIVE",
	    },
	  ],
	   "column_names": [
		      "impressions",
		      "reach",
		      "frequency",
		      "cpm",
		      "spend",
		      "ctr",
		      "cost_per_inline_link_click",
		      "actions:goal",
		      "actions:link_click",
		      "cost_per_action_type:cost_per_goal",
		      "actions:offsite_conversion"
		    ],
		 "rows": [
		       {
		        "remote_id": "456",
		        "impressions": "123",
		        "reach": 1,
		        "frequency": 1.0413449389302,
		        "cpm": 12.30131445905,
		        "spend": 182.49,
		        "ctr": 0.87630603303,
		        "cost_per_inline_link_click": 3.0415,
		        "actions:goal": 3,
		        "actions:link_click": 60,
		        "cost_per_action_type:cost_per_goal": 60.83,
		        "actions:offsite_conversion": 456
		      },
		      {
		        "remote_id": "123",
		        "impressions": "123",
		        "reach": 2,
		        "frequency": 1.0413449389302,
		        "cpm": 12.30131445905,
		        "spend": 182.49,
		        "ctr": 0.87630603303,
		        "cost_per_inline_link_click": 3.0415,
		        "actions:goal": 3,
		        "actions:link_click": 60,
		        "cost_per_action_type:cost_per_goal": 60.83,
		        "actions:offsite_conversion": 123
		      },
		      {
		        "remote_id": "789",
		        "impressions": "123",
		        "reach": 3,
		        "frequency": 1.0413449389302,
		        "cpm": 12.30131445905,
		        "spend": 182.49,
		        "ctr": 0.87630603303,
		        "cost_per_inline_link_click": 3.0415,
		        "actions:goal": 3,
		        "actions:link_click": 60,
		        "cost_per_action_type:cost_per_goal": 60.83,
		        "actions:offsite_conversion": 789
		      },
		      {
		        "remote_id": "901",
		        "impressions": "123",
		        "reach": 4,
		        "frequency": 1.0413449389302,
		        "cpm": 12.30131445905,
		        "spend": 182.49,
		        "ctr": 0.87630603303,
		        "cost_per_inline_link_click": 3.0415,
		        "actions:goal": 3,
		        "actions:link_click": 60,
		        "cost_per_action_type:cost_per_goal": 60.83,
		        "actions:offsite_conversion": 901
		      }
		    ]

    };

  }

  render() {
  	
    return (
      <Table
        rowsCount={this.state.ads.length}
        rowHeight={50}
        headerHeight={50}
        width={600}
        height={260}>
        <Column
          header={<Cell>Name</Cell>}
          cell={props => ( 
            <Cell {...props}>
              {this.state.ads[props.rowIndex].name}
            </Cell>
          )}
          width={150}
          fixed= {true}
        />
	      <Column
          header={<Cell>impressions</Cell>}
          cell={props => (
            <Cell {...props}>
              { _.filter(this.state.rows, { 'remote_id': this.state.ads[props.rowIndex].name })[0].impressions}
            </Cell>
          )}
          width={150}
        />
        <Column
          header={<Cell>reach</Cell>}
          cell={props => (
            <Cell {...props}>
              { _.filter(this.state.rows, { 'remote_id': this.state.ads[props.rowIndex].name })[0].reach}
            </Cell>
          )}
          width={150}
        />
        <Column
          header={<Cell>frequency</Cell>}
          cell={props => (
            <Cell {...props}>
              { _.filter(this.state.rows, { 'remote_id': this.state.ads[props.rowIndex].name })[0].frequency}
            </Cell>
          )}
          width={150}
        />
	      <Column
          header={<Cell>cpm</Cell>}
          cell={props => (
            <Cell {...props}>
              { _.filter(this.state.rows, { 'remote_id': this.state.ads[props.rowIndex].name })[0].cpm}
            </Cell>
          )}
          width={150}
        />
        <Column
          header={<Cell>spend</Cell>}
          cell={props => (
            <Cell {...props}>
              { _.filter(this.state.rows, { 'remote_id': this.state.ads[props.rowIndex].name })[0].spend}
            </Cell>
          )}
          width={150}
        />
        <Column
          header={<Cell>ctr</Cell>}
          cell={props => (
            <Cell {...props}>
              { _.filter(this.state.rows, { 'remote_id': this.state.ads[props.rowIndex].name })[0].ctr}
            </Cell>
          )}
          width={150}
        />
        <Column
          header={<Cell>CP Inline C</Cell>}
          cell={props => (
            <Cell {...props}>
              { _.filter(this.state.rows, { 'remote_id': this.state.ads[props.rowIndex].name })[0].cost_per_inline_link_click}
            </Cell>
          )}
          width={150}
        />
        <Column
          header={<Cell>Actions:Goal</Cell>}
          cell={props => (
            <Cell {...props}>
              { _.filter(this.state.rows, { 'remote_id': this.state.ads[props.rowIndex].name })[0]["actions:goal"]}
            </Cell>
          )}
          width={150}
        />
        <Column
          header={<Cell>CP Action Type</Cell>}
          cell={props => (
            <Cell {...props}>
              { _.filter(this.state.rows, { 'remote_id': this.state.ads[props.rowIndex].name })[0].cost_per_inline_link_click}
            </Cell>
          )}
          width={150}
        />
        <Column
          header={<Cell>Actions:offsite Conversion</Cell>}
          cell={props => (
            <Cell {...props}>
              { _.filter(this.state.rows, { 'remote_id': this.state.ads[props.rowIndex].name })[0]["actions:offsite_conversion"]}
            </Cell>
          )}
          width={150}
        />
      </Table>
    );
  }
}