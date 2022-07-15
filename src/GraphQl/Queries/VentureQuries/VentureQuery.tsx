import { gql } from "@apollo/client";


export const ALL_VENTURES = gql`
    query allVentures {
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
        }}
   
   `



