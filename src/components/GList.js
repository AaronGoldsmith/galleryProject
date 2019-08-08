import React from "react";
import axios from "axios";
import GItem from "./GItem";
class GList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: undefined, showData: undefined };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/photos/")
      .catch(err => console.warn(err))
      .then(resp => {
        // filter last one hundred results
        const data = resp.data.slice(resp.data.length - 100);
        this.setState({ data, showData: data });
      });
  }

  componentDidUpdate(prevProps) {
    const { data } = this.state;
    if (data && this.props.searchKey !== prevProps.searchKey) {
      const key = this.props.searchKey.toLowerCase().trim();
      const showData = data.filter(
        item => item.title.length > 0 && item.title.indexOf(key) >= 0
      );
      this.setState({ showData });
    }
  }

  render() {
    const { showData } = this.state;
    return (
      <div className="gContainer">
        {showData
          ? showData.map((item, i) => {
              return (
                <GItem
                  key={i}
                  label={item.title}
                  src={item.thumbnailUrl}
                  handleClick={this.props.openModal}
                />
              );
            })
          : null}
      </div>
    );
  }
}
export default GList;
