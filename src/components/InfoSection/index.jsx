
import React from 'react';
import { Button } from "../ButtonElements";

import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Column2,
    ImgWrap,
    Img
} from "./InfoElements";



const InfoSection = ({
    id,
    lightBg,
    imgStart,
    topLine,
    lighText,
    darkText,
    headline,
    desc,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>

                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lighText={lighText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{desc}</Subtitle>
                                <BtnWrap>
                                    <Button to="home" smooth={true} duration={500} spy={true}
                                        exact="true" offset={-80} primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}
                                    >
                                        {buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>

                        <Column2>
                            <ImgWrap>
                                <Img img={img} alt={alt} />
                            </ImgWrap>
                        </Column2>

                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection;
