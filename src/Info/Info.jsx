import "./info.css"

const Info = (props) => {
    return (
        <>
            <div className="container-info">
                <div className="card-info"> 
                    <h2 className="nombre"> {props.nombre} </h2>
                    <span className="bio"> {props.biografia} </span>
                </div>
            </div>
        </>
    )
}
export default Info;