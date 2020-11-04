import axios from 'axios';
import parameters from '../../parameters';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${parameters.yelp.apiKey}`
  }
});
