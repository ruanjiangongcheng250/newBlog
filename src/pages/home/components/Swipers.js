import React from 'react';
import { Carousel } from 'antd-mobile';

class Swipers extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 160,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  render() {
    return (
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => {}}
          afterChange={index =>{}}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 160 });
                }}
              />
            </a>
          ))}
        </Carousel>
    );
  }
}

export default Swipers;