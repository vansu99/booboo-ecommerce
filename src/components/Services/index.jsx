import React from 'react';
import { StyledServices, SectionTitle, CardInfoService, CardInfoServiceItem, CardInfoServiceDesc, CardInfoServiceImage } from './styles';
import { services } from '../../fakeData/service';

const Services = () => {
  return (
    <StyledServices>
      <SectionTitle>
        Services
      </SectionTitle>
      <CardInfoService>
        {!!services.length &&
          services.map((service, index) => (
            <CardInfoServiceItem key={index}>
              <CardInfoServiceImage>
                <img src={service.image} alt={service.title} />
              </CardInfoServiceImage>
              <CardInfoServiceDesc>
                <h3>{service.title}</h3>
                <span>{service.text}</span>
              </CardInfoServiceDesc>
            </CardInfoServiceItem>
          ))}
      </CardInfoService>
    </StyledServices>
  );
};

export default Services;
