
import React from "react";
import config from "../config"
import GList from "./Gallery/GList";
import Modal from "./Modal";
import SearchHeader from "./SearchHeader";
const AXIS ='ROWS' // ROWS or COLUMNS
const API = `https://sheets.googleapis.com/v4/spreadsheets/1GCojJDYutm9jpwb3XjIOfha1-7GZrba2LUZLjU3HzA0/values:batchGet?ranges=A2%3AH&valueRenderOption=FORMATTED_VALUE&majorDimension=${AXIS}&key=AIzaSyBG60vXsc4gWWqPFFFB6MeDaSCuLHdOJus`
const gapi = window.gapi

// export function load(callback) {

  // window.gapi.client.load("sheets", "v4", () => {
  //   window.gapi.client.sheets.spreadsheets.values
  //     .get({
  //       spreadsheetId: config.spreadsheetId,
  //       range: "Sheet1!A2:H12",
  //     })
  //     .then(
  //       response => {
  //         const data = response.result.values;
  //         console.log(data);
  //         // const cars = data.map(car => ({
  //         //   year: car[0],
  //         //   make: car[1],
  //         //   model: car[2]
  //         // })) || [];
  //         callback({
  //           data
  //         });
  //       },
  //       response => {
  //         callback(false, response.result.error);
  //       }
  //     );
  // });
// }
export function SheetRow(created,domain,
                  platform,description,snippet,
                  pre,post,author){

    this.created = created;
    this.domain = domain;
    this.platform=platform;
    this.description=description
    this.snippet=snippet;
    this.pre=pre;
    this.post=post;
    this.author=author;
}
  //  str += 'created at: ' + data[0] + '\n'
  //  str += 'platform '+ data[2] +'\n'
  //  str += 'pre ' + data[5] + '\n'
  //  str += 'post ' + data[6] + '\n'
class SheetLoader extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      rows: [],
      showModal: false,
      key: ''
    }
  }
  componentDidMount() {
    fetch(API).then(response => response.json()).then(data => {
      let batchRowValues = data.valueRanges[0].values
      let rows = []
      batchRowValues.map(data => {
        let row = new SheetRow(...Object.values(data));
        rows.push(row);
        let str =  data[3] + '\n' + 'site domain: ' + data[1] +'\n'
        console.log(str)
      })
      this.setState({rows})
      // console.log(rows)
    })
  }


  render() {
    const {showModal,data,key} = this.state;
    return (<div>
          <Modal showing={showModal} onClose={() => this.setState({showModal: false})} />
          <GList
            sheets={data}
            searchKey={key}
            openModal={e => {
              this.setState({showModal: true});
            }}
          />
        <p>loaded</p>
      </div>
    )
  }

}
export default SheetLoader;