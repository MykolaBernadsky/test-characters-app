// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const AsyncParagraph = (props) => {
  // Write your code here
  return <p></p>;
};

document.body.innerHTML = "<div id='root' />";
ReactDOM.render(<AsyncParagraph dataVersion="10"
                                loadData={
                                  () => {
                                    return new Promise((resolve, reject) => { resolve("Data!"); });
                                  }
                                }
/>, document.getElementById("root"));
setTimeout(() => console.log(document.getElementById("root").innerHTML), 300 );