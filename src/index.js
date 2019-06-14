import React from 'react';
import ReactDOM from 'react-dom';
import {TopNav} from './components/topnav';
import {FormLogoWidget} from './components/form_logo_widget';
import {MainTab} from './components/main_tab'
// import {Tree} from './components/Tree'

const treeStyle = {
	marginLeft : "10px",
	marginRight : "10px",
	padding : "1px",
	// borderRight : "0.5px solid grey",
};

class Parent extends React.Component{
	render()
	{
		return(
			<div>
				<TopNav />
				<hr/>
				<div className="row">
					<div className="col-2">
						<div style = {treeStyle}>
							<h1>Tree Structure</h1>
						Nostrud eu cupidatat de in legam eram hic constias, enim nam constias sed malis,
						appellat id quae. Nisi non possumus, de elit esse a doctrina, ne summis
						cernantur fidelissimae, qui amet expetendis e o deserunt instituendarum et malis
						laboris qui quid quorum eu admodum dolore eiusmod officia, aliqua distinguantur
						senserit irure mandaremus. E appellat reprehenderit.
					</div>
				</div>
					<div className="col-9">
						<FormLogoWidget />
						<p></p>
						<MainTab />
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Parent />, document.getElementById('root'));
