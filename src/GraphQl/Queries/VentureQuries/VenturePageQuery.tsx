import { gql } from "@apollo/client";


export const SINGLE_VENTURE_DETAILS = gql`
query GetBusiness($businessId: String!) {
  getBusiness(businessId: $businessId) {
    _id,
    businessName,
    businessDescription
    businessEmail
    businessAddress
    businessCover
    businessLogo
    businessPhone
    businessSize
    businessRegestry {
      _id,
    }
  }
}
   `



