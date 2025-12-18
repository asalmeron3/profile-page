import {Container, Image, Row, Col} from 'react-bootstrap';
import './Banner.css';

function Banner({mainText, subText, imgSrc}) {
  return (
    <Container className="banner-container">
      <Row>
        <Col sm={12} md={6} lg={4}>
          <Image className="profilePic" src={imgSrc} />
        </Col>
        <Col sm={12} md={6} lg={8}>
          <h1 className="banner-main-text">{mainText}</h1>
          <p className="banner-subtext">{subText}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;