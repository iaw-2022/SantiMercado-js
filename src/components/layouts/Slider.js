import React from 'react';
import '../../App.css';
import { Carousel} from 'react-bootstrap';
import gamer1 from "../../assets/Gamer1.png"
import gamer2 from "../../assets/gamer2.png"

const CarouselContainer = () => {
    return (
             <div className="Carousel">
                
                 <Carousel>
                    
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={gamer1}
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={gamer2}
                            alt="Second slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/a-nvidia-rtx-2022.webp"
                            alt="Third slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/a-silla-nuevo-precio3.webp"
                            alt="fourth slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/A-Notebooks-nuevo.webp"
                            alt="fifth slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/pc-armadas-gamer.webp"
                            alt="sixth slide"
                        />
                    </Carousel.Item>

                 </Carousel>
                 
             </div>
            )
}



export default CarouselContainer;