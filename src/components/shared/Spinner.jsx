import spinner from "./spinner.gif";

function Spinner() {
    return (
        <img
            src={spinner}
            alt='LOADING'
            style={{ width: "100px", margin: "auto", display: "block" }}
        />
    );
}

export default Spinner;
