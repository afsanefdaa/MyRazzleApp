import React from 'react';
import { Helmet } from 'react-helmet';
import ceo from '../../../../_mock_/data';
// import style from './Home.module.scss';

class Home extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    title: '',
    description: '',
    image: '',
  };

  componentDidMount() {
    this.setState({
      title: ceo.title,
      description: ceo.description,
      image: ceo.image,
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>{this.state.title ? this.state.title : 'Volunteer Hub by Indorelawan'}</title>
          <meta name="title" content={this.state.title ? this.state.title : 'Volunteer Hub by Indorelawan'} />
          <meta
            name="description"
            content={this.state.description ? this.state.description : 'Volunteer Hub by Indorelawan adalah tempat kolaborasi antara relawan dan komunitas sosial yang memiliki semangat kerelawanan dan gotong royong untuk Indonesia.'}
          />
          <meta
            property="og:title"
            content={this.state.title ? this.state.title : 'Volunteer Hub by Indorelawan'}
          />
          <meta
            property="og:description"
            content={this.state.description ? this.state.description : 'Volunteer Hub by Indorelawan adalah tempat kolaborasi antara relawan dan komunitas sosial yang memiliki semangat kerelawanan dan gotong royong untuk Indonesia.'}
          />
          <meta
            property="og:image"
            content={this.state.image ? this.state.image : 'https://volunteerhub.id/assets/logo/seo.jpg'}
          />
          <meta property="og:url" content="https://volunteerhub.id" />
          <meta
            name="twitter:title"
            content={this.state.title ? this.state.title : 'Volunteer Hub by Indorelawan'}
          />
          <meta
            name="twitter:description"
            content={this.state.description ? this.state.description : 'Volunteer Hub by Indorelawan adalah tempat kolaborasi antara relawan dan komunitas sosial yang memiliki semangat kerelawanan dan gotong royong untuk Indonesia.'}
          />
          <meta
            name="twitter:image"
            content={this.state.image ? this.state.image : 'https://volunteerhub.id/assets/logo/seo.jpg'}
          />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        Home
      </div>
    );
  }
}

export default Home;
