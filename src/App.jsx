import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
// import Features from './components/features';
import Operator from './components/operator';
import Partner from './components/partners'
import About from './components/about'
import OperatorLogin from './components/operatorLogin';
import PartnerLogin from './components/partnerLogin';
// import Gallery from './components/gallery';
// import Testimonials from './components/testimonials';
// import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        {/*<Features data={this.state.landingPageData.Features} />*/}
        <Operator />
        <Partner />
        <OperatorLogin />
        <PartnerLogin />
        <About />
        {/*<Services data={this.state.landingPageData.Services} />*/}
        {/*<Gallery />*/}
        {/*<Testimonials data={this.state.landingPageData.Testimonials} />*/}
        {/*<Team data={this.state.landingPageData.Team} />*/}
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
