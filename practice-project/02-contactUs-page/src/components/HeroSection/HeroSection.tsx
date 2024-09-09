import './HeroSection.css';
import Button from '../Button/Button';

const HeroSection = () => {
  return (
    <div className='heroMain'>
        <div>
            <div className="mainContent">
                <div className="heroHeading">
                        YOUR FEET 
                        DESERVE
                        THE BEST
                </div>
                <div className="heroDescription">
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </div>
                <div className="shopButtons">
                    <Button name='Shop Now' color='red' textColor='white'/>
                    <Button name='Category' color='white' textColor='black'/>
                </div>
                <div className="amazonFlipkart">
                    <img src="../public/logos/shop.png" alt="amazon-flipkart-Logo" />
                </div>
            </div>
        </div>
        <div className="heroImage">
            <img src="../public/logos/shoe_image.png" alt="shoeImage" />
        </div>
    </div>
  )
}

export default HeroSection