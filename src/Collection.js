const Collection = (props) => {

    return (<>
        <div className="sec2-subhead-title d-flex">
            <div className="demoimage">
            </div>
            <div>
                <h5 >{props.title}</h5>
                <p>{props.discription}</p>
                
            </div>
        </div>

    </>);
};
export default Collection;