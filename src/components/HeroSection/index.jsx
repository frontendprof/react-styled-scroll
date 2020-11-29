

import React, { useState } from 'react';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from "./HeroElements";
//  Video by Pressmaster from Pexels
import Video from "../../videos/video.mp4"

// Video by Pressmaster from Pexels
//import Video from "../../videos/video2.mp4"






const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>

            <HeroContent>
                <HeroH1>Wes surely can save the planet, ONLY TOGETHER</HeroH1>
                <HeroP>Support us by signing up a new account so you'd be posted about our upcoming activities</HeroP>

                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>

        </HeroContainer>
    )
}

export default HeroSection;
