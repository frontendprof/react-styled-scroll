

import React from 'react';
import {
    HeroContainer,
    HeroBg,
    VideoBg
} from "./HeroElements";
import Video from "../../videos/video.mp4";



const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoplay loop muted src={Video} type="video/mp4" />
            </HeroBg>

        </HeroContainer>
    )
}

export default HeroSection;
