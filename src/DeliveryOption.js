const DeliveryOption = (props) => {
    return (<>
        <div className="col-6">
                        <div className="">
                            <div className="row">

                                <div className="col-6">
                                    <div className="sec3-2nd-row-text">
                                        <h3>{props.title}</h3>
                                        <p>{props.description}</p>

                                    </div>
                                </div>
                                <div className="col-6">
                                    <img className="sec3-2nd-row-img" src={props.image} ></img>

                                </div>
                            </div>
                        </div>
                    </div>
    </>);
};

export default DeliveryOption;