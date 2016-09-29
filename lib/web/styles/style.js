const style = {
  orders: {
    textAlign: "center"
  },
  order: {
    width: "40%",
    margin: "2.5%",
    borderRadius: 10,
    border: '1px solid black',
    padding: 20,
    // height: 60,
    cursor: "pointer",
    textAlign: "center",
    display: "inline-block",
    fontFamily: "arial"
  },
  button: {
    background: "black",
    borderRadius: 0,
    color: "white",
    padding: "5px 10px",
    border: "none",
    marginTop: 5
  },
  detail: {
    position: "fixed",
    width: 400,
    height: 200,
    left: "50%",
    top: "50%",
    margin: "-100px 0 0 -200px",
    background: "white",
    border: "2px solid black",
    textAlign: "left",
    padding: 30,
    zIndex: 10,
    boxSizing: "border-box"
  },
  close: {
    position: "absolute",
    right: 0,
    width: 40,
    height: 40,
    top: 0,
    textAlign: "center",
    paddingTop: 10
  },
  title: {
    textAlign: "center",
    fontFamily: "arial",
    padding: "20px 0px 30px",
    borderBottom: "3px dotted black"
  },
  modal: {
    position: "fixed",
    fontFamily: "arial",
    width: "100%",
    height: "100%",
    backgroundColor: "grey",
    opacity: 0.5,
    left: 0,
    top: 0
  }
}

export default style
