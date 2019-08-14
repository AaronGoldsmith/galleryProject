export default {
    apiKey: `${process.env.REACT_APP_API}`,
    discoveryDocs: 
      ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    spreadsheetId: `${process.env.REACT_APP_ID}`,
    scope:'https://www.googleapis.com/auth/spreadsheets.readonly'
  };
  