import turtle from "../assets/images/turtle-shell.jpg";

const Turtle = (props) => {
    return <img className={props.turtle ?  "visible" : "hidden"} src={turtle} alt="turtle shell with being help by many hands" />
}

export default Turtle;