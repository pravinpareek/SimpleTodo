import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500,grey400 } from 'material-ui/styles/colors';
import {Glyphicon,Table,Grid, Row, Col,Button,Input,Panel,Modal,FormGroup,ControlLabel,FormControl,NavItem,Nav,NavDropdown,TextArea} from 'react-bootstrap';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Snackbar from 'material-ui/Snackbar';
import {List, ListItem} from 'material-ui/List';
import ActionDone from 'material-ui/svg-icons/action/done';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
var TodoList = React.createClass({
	
  render: function() {
    
    return <List>{this.props.items.map
					((item,index)=>
						{
							<ListItem primaryText={item} key={index}/>
						}
					)
				 }
			</List>;
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
	  tempData:'',
	  open: false,
    };
  }
  handleRequestClose(e)
  {
	  this.setState({
      open: false,
    });
  }
handle(e)  {
	   //if (e.keyCode == 13) {
		   var element =  this.state.tempData;
			var da=this.state.dataSource;
			da.push(element);
        this.setState({dataSource:da,tempData: '',open:true});
		
		
		
	console.log(JSON.stringify(this.state));
    //}
}

  handleUpdateInput(value,e)  {
	  this.setState({
      tempData: value
    });
  };
  deleteAction(index,e)
  {
	  var te=this.state.dataSource;
	  delete te[index];
	  this.setState({dataSource:te});
  }
render() 
	{
		
const iconButtonElement = (
  <IconButton
    touch={true}
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);
		var list_row=[];
		list_row=this.state.dataSource.map
					((item,index)=>{
						return (
						<div key={index}>
							<ListItem primaryText={item}    rightIconButton={
																																<IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem onClick={this.deleteAction.bind(this,index)}>Done</MenuItem>
    <MenuItem onClick={this.deleteAction.bind(this,index)}>Delete</MenuItem>
   </IconMenu>										
							} />
							<Divider inset={true} />
							</div>
							
					)}
					)
				 ;
    return (
	<div>
		<Grid>
			<Row>
				<Col xs={12} md={12}>
					<AppBar title="My AppBar" style={{backgroundColor:'#FF5722'}} />
				</Col>
				<Col xs={12} md={12} style={{width:'600px',textAlign: 'center',padding: '5% 28% 5% 28%'}}>
					<Card>
						<CardHeader
						  title="Add To Do"
						  
						  
						/>
						 <AutoComplete
          hintText="Add TODO"
		  searchText={this.state.tempData}
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput.bind(this)}
		  onNewRequest={this.handle.bind(this)}
        />
						<TodoList items={this.state.dataSource} />
						<List>{list_row}</List>
						
					</Card>
				</Col>
				<Snackbar
          open={this.state.open}
          message="Item Added To TODO List"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose.bind(this)}
        />
			</Row>
		</Grid>
  </div>
    );
  }
}
export default App;