import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Cards, Chart, CountryPicker } from './components';
import { render } from '@testing-library/react';
import styles from './App.module.css';
import { fetchData } from './api'
import coronaImage from './images/image.jpeg';

class App extends React.Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData, country:country});
  }
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.grey}>
          <img xs={12} md={3} className={styles.image} src ={coronaImage} alt="COVID-19" />
        </div>
        <Cards data = {data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        </div>
      
    )
  }
  
}

export default App;
