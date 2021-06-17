import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledFooter,
  FooterContainer,
  FooterList,
  FooterItem,
  FooterNewsletter,
  FooterNewsletterImprove,
  FooterNewsletterApp,
  FooterNewsletterForm,
  NewsletterFormItem,
  FooterBox,
  FooterWrap,
  FooterMain,
  FooterSponsor,
  FooterConnectSocial,
  FooterCopyright,
} from './Footer.style';
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterNewsletter>
        <div className="container">
          <div className="newsletter-list">
            <FooterNewsletterForm>
              <h4>GET IN THE KNOW</h4>
              <p>
                Be the first to know about new arrivals, sales & promos by submitting your email! You can opt out at any
                time. privacy policy
              </p>
              <NewsletterFormItem>
                <input type="email" placeholder="Enter your e-mail" />
                <button type="submit">
                  <BsArrowRight />
                </button>
              </NewsletterFormItem>
            </FooterNewsletterForm>
            <FooterNewsletterImprove>
              <h4>HELP US IMPROVE</h4>
              <p>Take a brief survey about today's visit.</p>
              <Link to="/">begin survey</Link>
            </FooterNewsletterImprove>
            <FooterNewsletterApp>
              <h4>GET REVOLVE ON THE GO!</h4>
              <p>Download our super easy-to-use app available for your iPhone, iPad and Android.</p>
              <ul>
                <li>
                  <Link to="/">
                    <svg viewBox="0 0 51.2 16" id="icon-dl_iphone">
                      <path d="M16.736 9.1h-.845v1.008h.845a.507.507 0 1 0 0-1.008zm9.853-4.047a.466.466 0 0 0-.366.161.712.712 0 0 0-.142.483.768.768 0 0 0 .127.483.421.421 0 0 0 .349.161.463.463 0 0 0 .364-.161.711.711 0 0 0 .142-.483.777.777 0 0 0-.125-.483.417.417 0 0 0-.349-.161zm-8.206.008a.459.459 0 0 0-.518.094.61.61 0 0 0-.138.349h.865a.456.456 0 0 0-.209-.443zM24.8 9.034a1.137 1.137 0 0 0-1.143 1.233 1.144 1.144 0 1 0 2.281 0A1.136 1.136 0 0 0 24.8 9.034zm-4.193-3.982a.459.459 0 0 0-.518.094.61.61 0 0 0-.138.349h.865a.456.456 0 0 0-.209-.443zm20.2 1.26a.444.444 0 0 0 .322-.142.499.499 0 0 0 .146-.368V5.54a.51.51 0 0 0-.146-.355.451.451 0 0 0-.334-.125.434.434 0 0 0-.349.169.689.689 0 0 0-.14.453.699.699 0 0 0 .142.457.445.445 0 0 0 .359.173zM24.4 5.996a.93.93 0 0 0 .226-.647.943.943 0 0 0-.226-.656.804.804 0 0 0-.622-.255h-.384v1.817h.384a.806.806 0 0 0 .622-.259zm13.5.113a.251.251 0 0 0 .092.194.437.437 0 0 0 .294.081.445.445 0 0 0 .334-.136.502.502 0 0 0 .14-.341 1.761 1.761 0 0 0-.46-.067q-.4 0-.4.267zm13.3 8.287v-12.8A1.544 1.544 0 0 0 49.725 0H1.476A1.546 1.546 0 0 0 0 1.606v12.8A1.544 1.544 0 0 0 1.476 16h48.25a1.542 1.542 0 0 0 1.474-1.604zm-11.133-9.49a.813.813 0 0 1 .635-.288.632.632 0 0 1 .572.305V3.836h.497v2.866h-.405l-.058-.313a.611.611 0 0 1-.577.372.837.837 0 0 1-.652-.297 1.146 1.146 0 0 1-.272-.785 1.132 1.132 0 0 1 .259-.773zm-1.38.173a.346.346 0 0 0-.28-.102.496.496 0 0 0-.299.077.257.257 0 0 0-.104.219h-.54a.548.548 0 0 1 .244-.501 1.278 1.278 0 0 1 .683-.154.781.781 0 0 1 .81.439.921.921 0 0 1 .063.355v1.29h-.43l-.038-.272a.653.653 0 0 1-.602.33.89.89 0 0 1-.61-.192.605.605 0 0 1-.201-.466.496.496 0 0 1 .221-.434 1.055 1.055 0 0 1 .606-.153 2.35 2.35 0 0 1 .56.079v-.2a.485.485 0 0 0-.086-.315zM22.907 3.99h.88a1.376 1.376 0 0 1 .998.368 1.305 1.305 0 0 1 .384.99 1.3 1.3 0 0 1-.384.986 1.375 1.375 0 0 1-.998.368h-.88zm-3.18.91a.884.884 0 0 1 .672-.284.788.788 0 0 1 .656.296.929.929 0 0 1 .156.309 1.131 1.131 0 0 1 .052.322 1.905 1.905 0 0 1-.017.263h-1.312a.704.704 0 0 0 .121.401.396.396 0 0 0 .342.155.326.326 0 0 0 .364-.267h.497a.73.73 0 0 1-.28.48.923.923 0 0 1-.581.184.881.881 0 0 1-.672-.292 1.11 1.11 0 0 1-.28-.781 1.097 1.097 0 0 1 .28-.785zm-4.04-.234h.493v.405a.596.596 0 0 1 .551-.439.717.717 0 0 1 .18.029l-.008.493a1.1 1.1 0 0 0-.23-.025q-.493 0-.493.68v.9h-.493zm-7.956-.28a1.941 1.941 0 0 1 1.255-.65 1.907 1.907 0 0 1-.436 1.366 1.604 1.604 0 0 1-1.267.599 1.815 1.815 0 0 1 .448-1.316zm2.437 6.815c-.35.524-.717 1.035-1.3 1.045-.566.013-.756-.333-1.406-.333-.655 0-.858.324-1.4.346-.555.02-.98-.56-1.342-1.078-.725-1.06-1.3-2.986-.533-4.296A2.08 2.08 0 0 1 5.939 5.82c.555-.01 1.07.375 1.412.375.335 0 .972-.462 1.63-.393a1.983 1.983 0 0 1 1.562.845 1.937 1.937 0 0 0-.922 1.625 1.872 1.872 0 0 0 1.143 1.722 4.292 4.292 0 0 1-.594 1.21zm4.057.94H13.5v-2.72h.715zm-.36-3.013a.427.427 0 0 1-.422-.428.425.425 0 0 1 .85 0 .428.428 0 0 1-.428.428zm1.142-3.577h-1.11v1.15h-.493V3.99h1.71v.426h-1.216v.714h1.11zm1.84 5.25h-.957v1.34h-.8V8.386h1.757a1.209 1.209 0 1 1 0 2.416zm.665-4.334a1.11 1.11 0 0 1-.28-.781 1.097 1.097 0 0 1 .28-.785.884.884 0 0 1 .672-.284.788.788 0 0 1 .656.296.93.93 0 0 1 .156.309 1.131 1.131 0 0 1 .052.322 1.905 1.905 0 0 1-.017.263h-1.312a.705.705 0 0 0 .121.401.396.396 0 0 0 .342.155.326.326 0 0 0 .364-.267h.497a.729.729 0 0 1-.28.48.923.923 0 0 1-.581.184.881.881 0 0 1-.672-.292zm4.615 5.675h-.805V10.56H19.55v1.583h-.8V8.386h.8v1.476h1.774V8.386h.805zm2.66.067a1.887 1.887 0 0 1-1.965-1.943 1.963 1.963 0 0 1 3.925 0 1.886 1.886 0 0 1-1.96 1.943zm1.784-5.45a.949.949 0 0 1-.702-.267 1.084 1.084 0 0 1-.288-.802 1.096 1.096 0 0 1 .288-.81.948.948 0 0 1 .702-.263 1.13 1.13 0 0 1 .384.065.804.804 0 0 1 .309.198 1.105 1.105 0 0 1 .288.81 1.092 1.092 0 0 1-.288.802.921.921 0 0 1-.693.267zm4.24 5.382h-.77l-1.79-2.45v2.45h-.8V8.386h.822l1.74 2.36v-2.36h.8zm-.622-5.44h-.485l-.376-1.216-.367 1.216h-.49l-.673-2.03h.518l.41 1.45.388-1.337h.447l.39 1.34.414-1.454h.493zm1.115-2.03h.43l.054.35a.738.738 0 0 1 1.209-.159 1.038 1.038 0 0 1 .19.652V6.7h-.493V5.515a.478.478 0 0 0-.109-.34.399.399 0 0 0-.305-.115.418.418 0 0 0-.336.176.867.867 0 0 0-.148.526v.94h-.493zm3.046 4.42h-1.858v.79h1.82v.704h-1.82v.856h1.858v.704h-2.658V8.386h2.658zm.05-2.388h-.5V3.836h.493zm.873-.21a1.084 1.084 0 0 1-.288-.802 1.096 1.096 0 0 1 .288-.81.948.948 0 0 1 .702-.263 1.13 1.13 0 0 1 .384.065.804.804 0 0 1 .309.198 1.105 1.105 0 0 1 .288.81 1.092 1.092 0 0 1-.288.802.921.921 0 0 1-.693.267.949.949 0 0 1-.702-.267zm4.024 5.65l-.237-.636h-1.61l-.236.636H36.3l1.447-3.756h1.002l1.447 3.756zm3.152-1.34h-.957v1.34h-.8V8.386h1.757a1.209 1.209 0 1 1 0 2.416zm3.658 0h-.957v1.34h-.8V8.386h1.75a1.209 1.209 0 1 1 0 2.416zm-10.118-5.76a.466.466 0 0 0-.366.161.712.712 0 0 0-.142.483.768.768 0 0 0 .127.483.421.421 0 0 0 .349.161.463.463 0 0 0 .364-.161.711.711 0 0 0 .142-.483.777.777 0 0 0-.125-.483.417.417 0 0 0-.349-.161zM45.997 9.1h-.845v1.008h.845a.507.507 0 1 0 0-1.008zm-3.658 0h-.845v1.008h.845a.507.507 0 1 0 0-1.008zm-4.666 1.712h1.17l-.586-1.616z"></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg viewBox="0 0 51.2 16" id="icon-dl_iphone">
                      <path d="M16.736 9.1h-.845v1.008h.845a.507.507 0 1 0 0-1.008zm9.853-4.047a.466.466 0 0 0-.366.161.712.712 0 0 0-.142.483.768.768 0 0 0 .127.483.421.421 0 0 0 .349.161.463.463 0 0 0 .364-.161.711.711 0 0 0 .142-.483.777.777 0 0 0-.125-.483.417.417 0 0 0-.349-.161zm-8.206.008a.459.459 0 0 0-.518.094.61.61 0 0 0-.138.349h.865a.456.456 0 0 0-.209-.443zM24.8 9.034a1.137 1.137 0 0 0-1.143 1.233 1.144 1.144 0 1 0 2.281 0A1.136 1.136 0 0 0 24.8 9.034zm-4.193-3.982a.459.459 0 0 0-.518.094.61.61 0 0 0-.138.349h.865a.456.456 0 0 0-.209-.443zm20.2 1.26a.444.444 0 0 0 .322-.142.499.499 0 0 0 .146-.368V5.54a.51.51 0 0 0-.146-.355.451.451 0 0 0-.334-.125.434.434 0 0 0-.349.169.689.689 0 0 0-.14.453.699.699 0 0 0 .142.457.445.445 0 0 0 .359.173zM24.4 5.996a.93.93 0 0 0 .226-.647.943.943 0 0 0-.226-.656.804.804 0 0 0-.622-.255h-.384v1.817h.384a.806.806 0 0 0 .622-.259zm13.5.113a.251.251 0 0 0 .092.194.437.437 0 0 0 .294.081.445.445 0 0 0 .334-.136.502.502 0 0 0 .14-.341 1.761 1.761 0 0 0-.46-.067q-.4 0-.4.267zm13.3 8.287v-12.8A1.544 1.544 0 0 0 49.725 0H1.476A1.546 1.546 0 0 0 0 1.606v12.8A1.544 1.544 0 0 0 1.476 16h48.25a1.542 1.542 0 0 0 1.474-1.604zm-11.133-9.49a.813.813 0 0 1 .635-.288.632.632 0 0 1 .572.305V3.836h.497v2.866h-.405l-.058-.313a.611.611 0 0 1-.577.372.837.837 0 0 1-.652-.297 1.146 1.146 0 0 1-.272-.785 1.132 1.132 0 0 1 .259-.773zm-1.38.173a.346.346 0 0 0-.28-.102.496.496 0 0 0-.299.077.257.257 0 0 0-.104.219h-.54a.548.548 0 0 1 .244-.501 1.278 1.278 0 0 1 .683-.154.781.781 0 0 1 .81.439.921.921 0 0 1 .063.355v1.29h-.43l-.038-.272a.653.653 0 0 1-.602.33.89.89 0 0 1-.61-.192.605.605 0 0 1-.201-.466.496.496 0 0 1 .221-.434 1.055 1.055 0 0 1 .606-.153 2.35 2.35 0 0 1 .56.079v-.2a.485.485 0 0 0-.086-.315zM22.907 3.99h.88a1.376 1.376 0 0 1 .998.368 1.305 1.305 0 0 1 .384.99 1.3 1.3 0 0 1-.384.986 1.375 1.375 0 0 1-.998.368h-.88zm-3.18.91a.884.884 0 0 1 .672-.284.788.788 0 0 1 .656.296.929.929 0 0 1 .156.309 1.131 1.131 0 0 1 .052.322 1.905 1.905 0 0 1-.017.263h-1.312a.704.704 0 0 0 .121.401.396.396 0 0 0 .342.155.326.326 0 0 0 .364-.267h.497a.73.73 0 0 1-.28.48.923.923 0 0 1-.581.184.881.881 0 0 1-.672-.292 1.11 1.11 0 0 1-.28-.781 1.097 1.097 0 0 1 .28-.785zm-4.04-.234h.493v.405a.596.596 0 0 1 .551-.439.717.717 0 0 1 .18.029l-.008.493a1.1 1.1 0 0 0-.23-.025q-.493 0-.493.68v.9h-.493zm-7.956-.28a1.941 1.941 0 0 1 1.255-.65 1.907 1.907 0 0 1-.436 1.366 1.604 1.604 0 0 1-1.267.599 1.815 1.815 0 0 1 .448-1.316zm2.437 6.815c-.35.524-.717 1.035-1.3 1.045-.566.013-.756-.333-1.406-.333-.655 0-.858.324-1.4.346-.555.02-.98-.56-1.342-1.078-.725-1.06-1.3-2.986-.533-4.296A2.08 2.08 0 0 1 5.939 5.82c.555-.01 1.07.375 1.412.375.335 0 .972-.462 1.63-.393a1.983 1.983 0 0 1 1.562.845 1.937 1.937 0 0 0-.922 1.625 1.872 1.872 0 0 0 1.143 1.722 4.292 4.292 0 0 1-.594 1.21zm4.057.94H13.5v-2.72h.715zm-.36-3.013a.427.427 0 0 1-.422-.428.425.425 0 0 1 .85 0 .428.428 0 0 1-.428.428zm1.142-3.577h-1.11v1.15h-.493V3.99h1.71v.426h-1.216v.714h1.11zm1.84 5.25h-.957v1.34h-.8V8.386h1.757a1.209 1.209 0 1 1 0 2.416zm.665-4.334a1.11 1.11 0 0 1-.28-.781 1.097 1.097 0 0 1 .28-.785.884.884 0 0 1 .672-.284.788.788 0 0 1 .656.296.93.93 0 0 1 .156.309 1.131 1.131 0 0 1 .052.322 1.905 1.905 0 0 1-.017.263h-1.312a.705.705 0 0 0 .121.401.396.396 0 0 0 .342.155.326.326 0 0 0 .364-.267h.497a.729.729 0 0 1-.28.48.923.923 0 0 1-.581.184.881.881 0 0 1-.672-.292zm4.615 5.675h-.805V10.56H19.55v1.583h-.8V8.386h.8v1.476h1.774V8.386h.805zm2.66.067a1.887 1.887 0 0 1-1.965-1.943 1.963 1.963 0 0 1 3.925 0 1.886 1.886 0 0 1-1.96 1.943zm1.784-5.45a.949.949 0 0 1-.702-.267 1.084 1.084 0 0 1-.288-.802 1.096 1.096 0 0 1 .288-.81.948.948 0 0 1 .702-.263 1.13 1.13 0 0 1 .384.065.804.804 0 0 1 .309.198 1.105 1.105 0 0 1 .288.81 1.092 1.092 0 0 1-.288.802.921.921 0 0 1-.693.267zm4.24 5.382h-.77l-1.79-2.45v2.45h-.8V8.386h.822l1.74 2.36v-2.36h.8zm-.622-5.44h-.485l-.376-1.216-.367 1.216h-.49l-.673-2.03h.518l.41 1.45.388-1.337h.447l.39 1.34.414-1.454h.493zm1.115-2.03h.43l.054.35a.738.738 0 0 1 1.209-.159 1.038 1.038 0 0 1 .19.652V6.7h-.493V5.515a.478.478 0 0 0-.109-.34.399.399 0 0 0-.305-.115.418.418 0 0 0-.336.176.867.867 0 0 0-.148.526v.94h-.493zm3.046 4.42h-1.858v.79h1.82v.704h-1.82v.856h1.858v.704h-2.658V8.386h2.658zm.05-2.388h-.5V3.836h.493zm.873-.21a1.084 1.084 0 0 1-.288-.802 1.096 1.096 0 0 1 .288-.81.948.948 0 0 1 .702-.263 1.13 1.13 0 0 1 .384.065.804.804 0 0 1 .309.198 1.105 1.105 0 0 1 .288.81 1.092 1.092 0 0 1-.288.802.921.921 0 0 1-.693.267.949.949 0 0 1-.702-.267zm4.024 5.65l-.237-.636h-1.61l-.236.636H36.3l1.447-3.756h1.002l1.447 3.756zm3.152-1.34h-.957v1.34h-.8V8.386h1.757a1.209 1.209 0 1 1 0 2.416zm3.658 0h-.957v1.34h-.8V8.386h1.75a1.209 1.209 0 1 1 0 2.416zm-10.118-5.76a.466.466 0 0 0-.366.161.712.712 0 0 0-.142.483.768.768 0 0 0 .127.483.421.421 0 0 0 .349.161.463.463 0 0 0 .364-.161.711.711 0 0 0 .142-.483.777.777 0 0 0-.125-.483.417.417 0 0 0-.349-.161zM45.997 9.1h-.845v1.008h.845a.507.507 0 1 0 0-1.008zm-3.658 0h-.845v1.008h.845a.507.507 0 1 0 0-1.008zm-4.666 1.712h1.17l-.586-1.616z"></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <svg viewBox="0 0 51.2 16" id="icon-dl_iphone">
                      <path d="M16.736 9.1h-.845v1.008h.845a.507.507 0 1 0 0-1.008zm9.853-4.047a.466.466 0 0 0-.366.161.712.712 0 0 0-.142.483.768.768 0 0 0 .127.483.421.421 0 0 0 .349.161.463.463 0 0 0 .364-.161.711.711 0 0 0 .142-.483.777.777 0 0 0-.125-.483.417.417 0 0 0-.349-.161zm-8.206.008a.459.459 0 0 0-.518.094.61.61 0 0 0-.138.349h.865a.456.456 0 0 0-.209-.443zM24.8 9.034a1.137 1.137 0 0 0-1.143 1.233 1.144 1.144 0 1 0 2.281 0A1.136 1.136 0 0 0 24.8 9.034zm-4.193-3.982a.459.459 0 0 0-.518.094.61.61 0 0 0-.138.349h.865a.456.456 0 0 0-.209-.443zm20.2 1.26a.444.444 0 0 0 .322-.142.499.499 0 0 0 .146-.368V5.54a.51.51 0 0 0-.146-.355.451.451 0 0 0-.334-.125.434.434 0 0 0-.349.169.689.689 0 0 0-.14.453.699.699 0 0 0 .142.457.445.445 0 0 0 .359.173zM24.4 5.996a.93.93 0 0 0 .226-.647.943.943 0 0 0-.226-.656.804.804 0 0 0-.622-.255h-.384v1.817h.384a.806.806 0 0 0 .622-.259zm13.5.113a.251.251 0 0 0 .092.194.437.437 0 0 0 .294.081.445.445 0 0 0 .334-.136.502.502 0 0 0 .14-.341 1.761 1.761 0 0 0-.46-.067q-.4 0-.4.267zm13.3 8.287v-12.8A1.544 1.544 0 0 0 49.725 0H1.476A1.546 1.546 0 0 0 0 1.606v12.8A1.544 1.544 0 0 0 1.476 16h48.25a1.542 1.542 0 0 0 1.474-1.604zm-11.133-9.49a.813.813 0 0 1 .635-.288.632.632 0 0 1 .572.305V3.836h.497v2.866h-.405l-.058-.313a.611.611 0 0 1-.577.372.837.837 0 0 1-.652-.297 1.146 1.146 0 0 1-.272-.785 1.132 1.132 0 0 1 .259-.773zm-1.38.173a.346.346 0 0 0-.28-.102.496.496 0 0 0-.299.077.257.257 0 0 0-.104.219h-.54a.548.548 0 0 1 .244-.501 1.278 1.278 0 0 1 .683-.154.781.781 0 0 1 .81.439.921.921 0 0 1 .063.355v1.29h-.43l-.038-.272a.653.653 0 0 1-.602.33.89.89 0 0 1-.61-.192.605.605 0 0 1-.201-.466.496.496 0 0 1 .221-.434 1.055 1.055 0 0 1 .606-.153 2.35 2.35 0 0 1 .56.079v-.2a.485.485 0 0 0-.086-.315zM22.907 3.99h.88a1.376 1.376 0 0 1 .998.368 1.305 1.305 0 0 1 .384.99 1.3 1.3 0 0 1-.384.986 1.375 1.375 0 0 1-.998.368h-.88zm-3.18.91a.884.884 0 0 1 .672-.284.788.788 0 0 1 .656.296.929.929 0 0 1 .156.309 1.131 1.131 0 0 1 .052.322 1.905 1.905 0 0 1-.017.263h-1.312a.704.704 0 0 0 .121.401.396.396 0 0 0 .342.155.326.326 0 0 0 .364-.267h.497a.73.73 0 0 1-.28.48.923.923 0 0 1-.581.184.881.881 0 0 1-.672-.292 1.11 1.11 0 0 1-.28-.781 1.097 1.097 0 0 1 .28-.785zm-4.04-.234h.493v.405a.596.596 0 0 1 .551-.439.717.717 0 0 1 .18.029l-.008.493a1.1 1.1 0 0 0-.23-.025q-.493 0-.493.68v.9h-.493zm-7.956-.28a1.941 1.941 0 0 1 1.255-.65 1.907 1.907 0 0 1-.436 1.366 1.604 1.604 0 0 1-1.267.599 1.815 1.815 0 0 1 .448-1.316zm2.437 6.815c-.35.524-.717 1.035-1.3 1.045-.566.013-.756-.333-1.406-.333-.655 0-.858.324-1.4.346-.555.02-.98-.56-1.342-1.078-.725-1.06-1.3-2.986-.533-4.296A2.08 2.08 0 0 1 5.939 5.82c.555-.01 1.07.375 1.412.375.335 0 .972-.462 1.63-.393a1.983 1.983 0 0 1 1.562.845 1.937 1.937 0 0 0-.922 1.625 1.872 1.872 0 0 0 1.143 1.722 4.292 4.292 0 0 1-.594 1.21zm4.057.94H13.5v-2.72h.715zm-.36-3.013a.427.427 0 0 1-.422-.428.425.425 0 0 1 .85 0 .428.428 0 0 1-.428.428zm1.142-3.577h-1.11v1.15h-.493V3.99h1.71v.426h-1.216v.714h1.11zm1.84 5.25h-.957v1.34h-.8V8.386h1.757a1.209 1.209 0 1 1 0 2.416zm.665-4.334a1.11 1.11 0 0 1-.28-.781 1.097 1.097 0 0 1 .28-.785.884.884 0 0 1 .672-.284.788.788 0 0 1 .656.296.93.93 0 0 1 .156.309 1.131 1.131 0 0 1 .052.322 1.905 1.905 0 0 1-.017.263h-1.312a.705.705 0 0 0 .121.401.396.396 0 0 0 .342.155.326.326 0 0 0 .364-.267h.497a.729.729 0 0 1-.28.48.923.923 0 0 1-.581.184.881.881 0 0 1-.672-.292zm4.615 5.675h-.805V10.56H19.55v1.583h-.8V8.386h.8v1.476h1.774V8.386h.805zm2.66.067a1.887 1.887 0 0 1-1.965-1.943 1.963 1.963 0 0 1 3.925 0 1.886 1.886 0 0 1-1.96 1.943zm1.784-5.45a.949.949 0 0 1-.702-.267 1.084 1.084 0 0 1-.288-.802 1.096 1.096 0 0 1 .288-.81.948.948 0 0 1 .702-.263 1.13 1.13 0 0 1 .384.065.804.804 0 0 1 .309.198 1.105 1.105 0 0 1 .288.81 1.092 1.092 0 0 1-.288.802.921.921 0 0 1-.693.267zm4.24 5.382h-.77l-1.79-2.45v2.45h-.8V8.386h.822l1.74 2.36v-2.36h.8zm-.622-5.44h-.485l-.376-1.216-.367 1.216h-.49l-.673-2.03h.518l.41 1.45.388-1.337h.447l.39 1.34.414-1.454h.493zm1.115-2.03h.43l.054.35a.738.738 0 0 1 1.209-.159 1.038 1.038 0 0 1 .19.652V6.7h-.493V5.515a.478.478 0 0 0-.109-.34.399.399 0 0 0-.305-.115.418.418 0 0 0-.336.176.867.867 0 0 0-.148.526v.94h-.493zm3.046 4.42h-1.858v.79h1.82v.704h-1.82v.856h1.858v.704h-2.658V8.386h2.658zm.05-2.388h-.5V3.836h.493zm.873-.21a1.084 1.084 0 0 1-.288-.802 1.096 1.096 0 0 1 .288-.81.948.948 0 0 1 .702-.263 1.13 1.13 0 0 1 .384.065.804.804 0 0 1 .309.198 1.105 1.105 0 0 1 .288.81 1.092 1.092 0 0 1-.288.802.921.921 0 0 1-.693.267.949.949 0 0 1-.702-.267zm4.024 5.65l-.237-.636h-1.61l-.236.636H36.3l1.447-3.756h1.002l1.447 3.756zm3.152-1.34h-.957v1.34h-.8V8.386h1.757a1.209 1.209 0 1 1 0 2.416zm3.658 0h-.957v1.34h-.8V8.386h1.75a1.209 1.209 0 1 1 0 2.416zm-10.118-5.76a.466.466 0 0 0-.366.161.712.712 0 0 0-.142.483.768.768 0 0 0 .127.483.421.421 0 0 0 .349.161.463.463 0 0 0 .364-.161.711.711 0 0 0 .142-.483.777.777 0 0 0-.125-.483.417.417 0 0 0-.349-.161zM45.997 9.1h-.845v1.008h.845a.507.507 0 1 0 0-1.008zm-3.658 0h-.845v1.008h.845a.507.507 0 1 0 0-1.008zm-4.666 1.712h1.17l-.586-1.616z"></path>
                    </svg>
                  </Link>
                </li>
              </ul>
            </FooterNewsletterApp>
          </div>
        </div>
      </FooterNewsletter>
      <FooterMain>
        <FooterContainer>
          <FooterBox>
            <FooterWrap>
              <FooterList>
                <FooterItem>
                  <h3>Customer Services</h3>
                  <ul>
                    <li>
                      <Link to="/">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/">+1-562-926-5672</Link>
                    </li>
                    <li>
                      <Link to="/">Payment Options</Link>
                    </li>
                    <li>
                      <Link to="/">Track Your Order</Link>
                    </li>
                  </ul>
                </FooterItem>
                <FooterItem>
                  <h3>infomation</h3>
                  <ul>
                    <li>
                      <Link to="/">Shipping & Delivery</Link>
                    </li>
                    <li>
                      <Link to="/">Returns & Exchanges</Link>
                    </li>
                    <li>
                      <Link to="/">Size Guide</Link>
                    </li>
                    <li>
                      <Link to="/">Gifting REVOLVE</Link>
                    </li>
                  </ul>
                </FooterItem>
                <FooterItem>
                  <h3>infomation</h3>
                  <ul>
                    <li>
                      <Link to="/">Style Experts</Link>
                    </li>
                    <li>
                      <Link to="/">Why REVOLVE</Link>
                    </li>
                    <li>
                      <Link to="/">Accessibility</Link>
                    </li>
                    <li>
                      <Link to="/">Feedback</Link>
                    </li>
                  </ul>
                </FooterItem>
                <FooterItem>
                  <h3>infomation</h3>
                  <ul>
                    <li>
                      <Link to="/">About Us</Link>
                    </li>
                    <li>
                      <Link to="/">Social Impact</Link>
                    </li>
                    <li>
                      <Link to="/">Careers</Link>
                    </li>
                    <li>
                      <Link to="/">Ambassadors</Link>
                    </li>
                  </ul>
                </FooterItem>
              </FooterList>
              <FooterConnectSocial>
                <h3>Connect</h3>
                <div>
                  <a href="https://www.facebook.com/">
                    <AiFillFacebook />
                  </a>
                  <a href="https://www.instagram.com/">
                    <AiOutlineInstagram />
                  </a>
                  <a href="/">
                    <AiOutlineTwitter />
                  </a>
                </div>
              </FooterConnectSocial>
            </FooterWrap>
            <FooterSponsor>
              <img
                src="https://is4.revolveassets.com/images/up/2020/December/121620_FWxPromo_RWfooter_648x438.png"
                alt="sponsor"
              />
            </FooterSponsor>
          </FooterBox>
        </FooterContainer>
      </FooterMain>
      <FooterCopyright>
        <p>Copyright © BooBoo Shopping - Evan Dev</p>
      </FooterCopyright>
    </StyledFooter>
  );
};

export default Footer;
