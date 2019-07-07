import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, PanelHeader, FormLayout, FormLayoutGroup, Input, InfoRow, Radio } from '@vkontakte/vkui';
import costs from './costs'

class Home extends React.Component {  
    
    constructor(props) {  
        super(props);  
        var curdate = new Date;
        this.state = {  
        	id: "home",
            result: "",
            currentTime: curdate.getHours() + ":" + curdate.getMinutes()
        };  
        this.updateMessage = this.updateMessage.bind(this);  
        this.onChangeTime = this.onChangeTime.bind(this); 
    }
   	updateMessage = (e) => {
		this.setState(state => ({
	      result: this.state.currentTime
	    }));
	    console.log(costs)
	}
	onChangeTime = (e) => {
		e.preventDefault();
		this.setState({ currentTime: e.target.value });
	}
    render() {  
         return (  
           <Panel id={this.state.id}>
	         <FormLayout>
		      <FormLayoutGroup top="Номер маршрутки/автобуса/троллейбуса">
		        <Input type="text" alignment="center"/>
		       </FormLayoutGroup>
		       <FormLayoutGroup top="Время">
		        <Input type="text" defaultValue={this.state.currentTime} alignment="center" onChange={this.onChangeTime} />
		      </FormLayoutGroup>
		      <FormLayoutGroup top="Тип оплаты" >
	              <Radio name="type" value="1" defaultChecked>Наличные</Radio>
	              <Radio name="type" value="2">Карта</Radio>
	          </FormLayoutGroup>
	          <Button size="xl" level="primary" stretched="true" onClick={this.updateMessage}>Сколько стоит проезд?</Button>
		      <Div>
			      <InfoRow>
			      	{this.state.result}
			      </InfoRow>
		      </Div>
		    </FormLayout>
           </Panel> 
        )  
    }  
}

 export default Home;