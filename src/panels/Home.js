import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, PanelHeader, FormLayout, FormLayoutGroup, Input } from '@vkontakte/vkui';

const Home = ({ id, go, currentTime }) => (
	<Panel id={id}>
		<FormLayout>
	      <FormLayoutGroup>
	        <Input type="text" alignment="center" placeHolder="Номер маршрутки/автобуса/троллейбуса" />
	        <Input type="text" placeHolder="Время" defaultValue={currentTime} alignment="center" />
	      </FormLayoutGroup>
	    </FormLayout>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	currentTime: PropTypes.string.isRequired
};

export default Home;
