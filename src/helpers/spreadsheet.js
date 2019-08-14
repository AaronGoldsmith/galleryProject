

  window.onload = () => {
    authenticate();
  }
  
  function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/spreadsheets.readonly"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey("YAIzaSyBG60vXsc4gWWqPFFFB6MeDaSCuLHdOJus");
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/sheets/v4/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.sheets.spreadsheets.values.batchGet({
      "spreadsheetId": "1GCojJDYutm9jpwb3XjIOfha1-7GZrba2LUZLjU3HzA0",
      "dateTimeRenderOption": "FORMATTED_STRING",
      "majorDimension": "ROWS",
      "ranges": [
        "A1:H14"
      ],
      "valueRenderOption": "FORMATTED_VALUE"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "376636661487-rnqvhckb00es7tk83fjspupn4hou9pgn.apps.googleusercontent.com"});
  });
