import Collection from "./Collection";
import Collection2 from "./Collection2";
import OurCollection from "./OurCollection";

const Section2 = () => {

    return (<>

        {/* section-2 */}

        <div className="section2">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <OurCollection />
                    </div>
                </div>

                <div className="row">
                    <OurCollection />
                </div>
                <div className="row">
                    <div className="col-4">
                  
                        <div className="sec2-subhead">
                            <Collection title="Lorem ipsum" discription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. nemo unde eum perferendis atque deleniti rem praesentium omnis qui consequatur."/>

                            <Collection title="Lorem ipsum" discription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. nemo unde eum perferendis atque deleniti rem praesentium omnis qui consequatur." />

                            <Collection title="Lorem ipsum" discription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. nemo unde eum perferendis atque deleniti rem praesentium omnis qui consequatur." />
                        </div>
                    </div>

                    <div className="col-4">
                        <img className="sec2-center-img" src="img/jeans.png"></img>
                    </div>
                    

                    <div className="col-4">
                        <div className="sec2-subhead2">
                            <Collection2 title="Lorem Ipsum" discription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. nemo unde eum perferendis atque deleniti rem praesentium." />


                            <Collection2 title="Lorem Ipsum" discription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. nemo unde eum perferendis atque deleniti rem praesentium." />


                            <Collection2 title="Lorem Ipsum" discription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. nemo unde eum perferendis atque deleniti rem praesentium." />

                        </div>

                    </div>
                </div>

            </div>
        </div>

        {/* section-2 */}

    </>);
};
export default Section2;