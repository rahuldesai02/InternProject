import React from 'react';
import ReactDOM from 'react-dom';
import {TopNav} from './components/topnav';
import {FormLogoWidget} from './components/form_logo_widget';
import {ControlledTabs} from './components/main_tab'
// import {Tree} from './components/Tree'

const treeStyle = {
	marginLeft : "10px",
	marginRight : "10px",
	padding : "1px",
	borderRight : "0.5px solid grey",
};

class Parent extends React.Component{
	render()
	{
		return(
			<div>
				<TopNav />
				<hr/>
				<div class="row">
					<div class="col-2">
						<div style = {treeStyle}>
						Nostrud eu cupidatat de in legam eram hic constias, enim nam constias sed malis,
						appellat id quae. Nisi non possumus, de elit esse a doctrina, ne summis
						cernantur fidelissimae, qui amet expetendis e o deserunt instituendarum et malis
						laboris qui quid quorum eu admodum dolore eiusmod officia, aliqua distinguantur
						senserit irure mandaremus. E appellat reprehenderit.
					</div>
				</div>
					<div class="col-9">
						<FormLogoWidget />
						<p></p>
						<ControlledTabs />
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Parent />, document.getElementById('root'));
