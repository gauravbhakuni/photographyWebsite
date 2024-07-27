import React from 'react'
import styled from "styled-components";

const slide_image_1 = "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const slide_image_2 = "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D";
const slide_image_3 = "https://images.unsplash.com/photo-1472586662442-3eec04b9dbda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJlYWNofGVufDB8fDB8fHww";
const slide_image_4 = "https://images.unsplash.com/photo-1429734956993-8a9b0555e122?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHNreXxlbnwwfHwwfHx8MA%3D%3D";
const slide_image_5 = "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D";
const slide_image_6 = "https://images.unsplash.com/photo-1542596594-649edbc13630?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhcHB5fGVufDB8fDB8fHww";
const slide_image_7 = "https://plus.unsplash.com/premium_photo-1663054774427-55adfb2be76f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fHww";

const row1 = [slide_image_1, slide_image_2, slide_image_3, slide_image_4, slide_image_5, slide_image_6, slide_image_7];
const row2 = [slide_image_7, slide_image_6, slide_image_5, slide_image_4, slide_image_3, slide_image_2, slide_image_1];

const Photo = () => {
  return (
    <div className='h-full bg-black mt-48 py-[50px] mb-[100px]'>
      <div className='h-full flex justify-center items-center'>
        <Wrapper>
          <Text></Text>
          <Marquee>
            <MarqueeGroup1>
              {
                row1.map((el, index) => (
                  <ImageGroup key={index}>
                    <Image src={el} />
                  </ImageGroup>
                ))
              }
            </MarqueeGroup1>
            <MarqueeGroup1>
              {
                row1.map((el, index) => (
                  <ImageGroup key={index}>
                    <Image src={el} />
                  </ImageGroup>
                ))
              }
            </MarqueeGroup1>
          </Marquee>
          <Marquee>
            <MarqueeGroup2>
              {
                row2.map((el, index) => (
                  <ImageGroup key={index}>
                    <Image src={el} />
                  </ImageGroup>
                ))
              }
            </MarqueeGroup2>
            <MarqueeGroup2>
              {
                row2.map((el, index) => (
                  <ImageGroup key={index}>
                    <Image src={el} />
                  </ImageGroup>
                ))
              }
            </MarqueeGroup2>
          </Marquee>
        </Wrapper>
      </div>
    </div>
  )
}

export default Photo;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  color: #02203c;
`

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;
`

const MarqueeGroup1 = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  animation: marquee 20s linear infinite;

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`

const MarqueeGroup2 = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  animation: marquee 20s linear infinite;
  animation-direction: reverse;
  animation-delay: -3s;

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: 300px;
  height: 170px;
  padding: 10px;
`

const Image = styled.img`
  width: 500px;
  height: auto;
  object-fit: contain;
  padding: 5px 20px;
`
