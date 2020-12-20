
import React from 'react';
import Icon1 from "../../images/undraw_camping_min2.svg";
import Icon2 from "../../images/undraw_nature_m5ll.svg";
import Icon3 from "../../images/undraw_navigator_min2.svg";
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from "./ServicesElements";




const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>

                <ServicesWrapper>

                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Reduce expenses</ServicesH2>
                        <ServicesP>Lorem ipsum icing elit. Eveniet delectus non repellat vitae voluptatibus numquam.</ServicesP>

                    </ServicesCard>
                

                    
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Virtual Offices</ServicesH2>
                        <ServicesP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eligendi fuga corporis!</ServicesP>
                        
                    </ServicesCard>
                        

                    
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Premium benefits</ServicesH2>
                        <ServicesP>Lorem ipsum dolor sit, amet consectet ellat vitae voluptatibus numquam.</ServicesP>
                        
                    </ServicesCard>
            

                </ServicesWrapper>
                
            
        </ServicesContainer>
    )
}




export default Services;
