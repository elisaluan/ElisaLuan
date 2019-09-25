/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {Component} from "react";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

  
  

class SectionCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      activeIndex: 0,
      setActiveIndex: 0,
      animating: false,
      setAnimating: false
    }
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
  }

  onExiting = () => {
    this.setState({animating:true})
  };
   onExited = () => {
    this.setState({animating:false})
  };
   next = () => {
    if (this.state.animating) return;
    const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({activeIndex:nextIndex})
  };
   previous = () => {
    if (this.state.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
    this.setState({activeIndex:nextIndex})
  };
   goToIndex = newIndex => {
    if (this.state.animating) return;
    this.setState({activeIndex:newIndex})
  };
  
  render () {

    

    return (
      <>
        <div className="" id="carousel">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="11">
                <Card>
                  <Carousel
                    activeIndex={this.state.activeIndex}
                    next={this.next}
                    previous={this.previous}
                  >
                    <CarouselIndicators
                      items={this.state.items}
                      activeIndex={this.state.activeIndex}
                      onClickHandler={this.goToIndex}
                    />
                    {this.state.items.map(item => {
                      return (
                        <CarouselItem
                          onExiting={this.onExiting}
                          onExited={this.onExited}
                          key={item.src}
                        >
                          <img src={item.src} alt={item.altText} />
                          <CarouselCaption
                            captionText={item.caption}
                            captionHeader=""
                          />
                        </CarouselItem>
                      );
                    })}
                    <a
                      className="left carousel-control carousel-control-prev"
                      data-slide="prev"
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        this.previous();
                      }}
                      role="button"
                    >
                      <span className="fa fa-angle-left" />
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="right carousel-control carousel-control-next"
                      data-slide="next"
                      href="#pablo"
                      onClick={e => {
                        e.preventDefault();
                        this.next();
                      }}
                      role="button"
                    >
                      <span className="fa fa-angle-right" />
                      <span className="sr-only">Next</span>
                    </a>
                  </Carousel>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>{" "}
      </>
    );
  }
}

export default SectionCarousel;
