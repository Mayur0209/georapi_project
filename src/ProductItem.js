const ProductItem = (props) => {
    return (<>
    <div className="col-6">
        <div className="s3-all-img">
            <img className="s3-img1" src="img/jeans-pent-img.png"></img>

            <h6>{props.title}</h6>
            <h4>{props.price}</h4>
        </div>

    </div>
    </>);
};
export default ProductItem;