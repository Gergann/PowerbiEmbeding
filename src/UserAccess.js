const config = require(__dirname + "/../config/config.json");
const fetch = require('node-fetch');


// Checks if user exists 
// Returns: 
// (stirng) - a list of data access permissions

async function getUserAccess(user='Test') {
  formData = {};
  formData["user"] = user;
  access_token = config.getUserAccessToken;
  header = {'Content-Type': 'application/json',Authorization:"Bearer " + access_token};

  console.log(JSON.stringify(formData))
  UserAccess = "https://europe-west3-myfirstgmb-249012.cloudfunctions.net/GetUserDataAccess_gmbapi"

  const result = await fetch(UserAccess, {
    method: 'POST',
    headers: header,
    json: true,
    body: JSON.stringify(formData),
  });

  if (!result.ok)
          throw result;
          
  return result.json();

}

// Assigns Data Access permissions to user
// Returns true on success

async function useActivationToken(code='26bdf1bc-99c1-44b6-94af-856a5d5acddc',user='Hallee') {
  formData = {}
  formData["user"] = user;
  formData["activationcode"] = code;
  access_token = config.UseActivationCodeToken;
  header = {'Content-Type': 'application/json',Authorization:"Bearer " + access_token};

  console.log(JSON.stringify(formData))
  UserAccess = "https://europe-west3-myfirstgmb-249012.cloudfunctions.net/AssignUserAccess_gmbapi"

  const result = await fetch(UserAccess, {
    method: 'POST',
    headers: header,
    json: true,
    body: JSON.stringify(formData),
  });

  if (!result.ok)
          throw result;
          
  return result.ok;

}


// getUserAccess().then(function(result){
//     console.log(result)
//   })
