import React from "react";
import axios from "axios";
import {GItem} from "./GItem";
import {SheetRow} from "../SheetLoader"
const AXIS ='ROWS' // ROWS or COLUMNS
const API = `https://sheets.googleapis.com/v4/spreadsheets/1GCojJDYutm9jpwb3XjIOfha1-7GZrba2LUZLjU3HzA0/values:batchGet?ranges=A2%3AH&valueRenderOption=FORMATTED_VALUE&majorDimension=${AXIS}&key=AIzaSyBG60vXsc4gWWqPFFFB6MeDaSCuLHdOJus`

function getPlaceHolderPhotos(){
  return axios.get("https://jsonplaceholder.typicode.com/photos/")
}
class GList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: undefined, visible: false };
  }
  componentDidMount() {
    // getPlaceHolderPhotos().catch(err => console.warn(err))
    // .then(resp => {
    //   const data = resp.data.slice(resp.data.length - 100);
    //   this.setState({ data, visible: data });
    // });
    fetch(API).then(response => response.json()).then(data => {
      let batchRowValues = data.valueRanges[0].values
      let rows = []
      batchRowValues.map(data => {
        const pre = data[5];
        console.log(pre.split('open?id=').join('file/d/')+'/view')
        const post = data[6]
        console.log(post.split('open?id=').join('file/d/')+'/view')
        let updatedData = {...data, pre, post}
        let row = new SheetRow(...Object.values(updatedData));
        rows.push(row);
        // let str =  data[3] + '\n' + 'site domain: ' + data[1] +'\n'
        // console.log(str)
      })
      this.setState({data: rows, visible: rows})
      // console.log(rows)
    })
  }

  componentDidUpdate(prevProps) {
    const { data } = this.state;
    if (data && this.props.searchKey !== prevProps.searchKey) {
      const key = this.props.searchKey.toLowerCase().trim();
      const visible = data.filter(
        item => item.description.length > 0 && item.description.indexOf(key) >= 0
      );
      this.setState({ visible });
    }
  }

  render() {
    const { visible } = this.state;
    return (
      <section id="grid">
        <div className="grid-content wrapper" onScroll={this.handleScroll}>
          {visible
            ? visible.map((item, i) => {
                return (
                  <GItem
                    key={i}
                    label={item.description}
                    src={typeof item.pre === Object ? item.pre[0] : item.pre}
                    handleClick={e=>this.props.openModal}
                  />
                );
              })
            : null}
        </div>
      </section>
    );
  }
}
export default GList;
