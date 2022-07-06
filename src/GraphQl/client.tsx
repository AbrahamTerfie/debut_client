import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider, gql, HttpLink
} from '@apollo/client';



const link = new HttpLink({ uri: 'http://localhost:4000' })
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

client.query({ query }).then(res => console.log(res.data))







export default client;