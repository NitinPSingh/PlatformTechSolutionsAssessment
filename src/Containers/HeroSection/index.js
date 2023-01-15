import { Container } from "react-bootstrap";
import img from "../../assests/images/hero.png"
export default function HeroSection(){

    return(<>
            <div>
                <div>
                    <Container fluid="md">
                        <div className="flex w-full flex-col">
                            <p className="lg:px-12 pad-x lg:text-5xl md:text-4xl text-xl leading-tight font-semibold text-center">
                            Start selling {" "}
                            <span className="text-[rgb(0,210,245)]">
                                 today
                            </span>
                            <br />
                            with superfast deliveries.
                            </p>
                            <p className="mt-2 md:text-base text-sm font-medium text-if-gray text-center">
                              Delight your customers with
                                <span className="text-[rgb(0,210,245)]">
                                {" "} unparalleled fulfilment experience {" "}

                            
                                </span>
                                while growing your business
                            </p>
                            <div className="md:pt-12 pt-7">
                                <img className="md:relative rounded-2xl md:z-10 z-0" src={img} />
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
      </>
    )


}