import React from 'react'
import axios from 'axios'
export default function findUsers() {
    let results = {}
    // var data = 

    var config = {
        method: 'POST',
        url: 'https://realm.mongodb.com/api/client/v2.0/app/debutmongo-hyers/graphql',
        headers: {
            'apiKey': 'mpOM6wEdQbLUGQFGqwQ97b4r7QudZ9jU9CN2vsEvZ0Xpzu6VsOTVz0Nhp5JQ9ApK',
            'Content-Type': 'application/json',


        },

        data: JSON.stringify({
            query: `query{
              searchUsers(input:"alemayehu"){
                   _id,
                  firstName,
                  lastName,
                  email
              }
              users{
                  _id,
                  firstName,
                  lastName,
                  email
              }
          }`,
            variables: {}
        })
    };

    fetch(config.url, config)
        .then((res) => res.json())
        .then((data) => {

            console.log(data)
            results = data
        })
        .catch((err) => {
            console.log(err)
        })
    return results



    // axios(config,)
    //     .then(function (response) {
    //         console.log(JSON.stringify(response.data));
    //         results = response.data
    //     })
    //     .catch(function (error) {
    //         console.log("error", error);
    //     });
    return results

}
