import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider, gql, HttpLink
} from '@apollo/client';

import { apiLink } from '../Constants/apiLink';

const link = new HttpLink({ uri: apiLink });
const cache = new InMemoryCache()


const client = new ApolloClient({ link, cache });





const query = gql`
{
  getAllBusinesses {
    _id,
    businessAddress,
    businessEmail,
    businessName,
    businessDescription
    businessOwner {
      _id,
      email,
      firstName,
      lastName
      businesses {
        _id,
        businessAddress,
        businessDescription
      }

    }
  
}
}`

client.query({ query }).then(res => console.log('test query', res.data))







export default client;