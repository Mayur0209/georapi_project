import DeliveryOption from "./DeliveryOption";
import OurCollection from "./OurCollection";
import ProductItem from "./ProductItem";

const Section3 = () => {

    return (<>

        {/* section-3 */}

        <div className="section3">
            <div className="container-fluid">

               <OurCollection/>

                <div className="row">
                    <div className="col-6">
                        <img className="s3-img1" src="img/jeans-pent-img.png"></img>
                    </div>
                    <div className="col-6">
                        <div className="row sec3-1strow">

                            <ProductItem title="Uniform Beige denim relaxed Jeans" price="$430"/>
                            <ProductItem title="Uniform Beige denim relaxed Jeans" price="$421"/>
                            <ProductItem title="Uniform Beige denim relaxed Jeans" price="$430"/>
                            <ProductItem title="Uniform Beige denim relaxed Jeans" price="$430"/>
                           

                        </div>
                    </div>
                </div>

                <div className="row s3-border-black">
                        <DeliveryOption title="Free delivery and returns" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quia autem, delectus est sit, natus repellendus, quos totam ullam! Optio, magnam distinctio." image="img/section-3-1stimg.jpg"/>

                        <DeliveryOption title="Exclisive deals" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quia autem, delectus est sit, natus repellendus, quos totam ullam! Optio, magnam distinctio."  image="img/section-3-1stimg.jpg"/>
                </div>



            </div>
        </div>

        {/* section-3 */}
    </>);
};
export default Section3;