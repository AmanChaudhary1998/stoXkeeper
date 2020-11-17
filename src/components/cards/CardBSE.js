import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { BackSide, FrontSide } from './flippycards';
import Flippy from './flippy';

import hdfc from './images/hdfc.jpg'
import icici from './images/icici.jpg';
import infosys from './images/infosys.jpg';
import tcs from './images/tcs.jpg';
import reliance from './images/reliance.png';
import airtel from './images/airtel.jpg';
import hcl from './images/hcl.jpg';
import itc from './images/itc.jpg';

const FlippyStyle = {
    width: '200px',
    height: '200px',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'sans-serif',
    fontSize: '30px',
    justifyContent: 'center',
    // border: '1px solid green' ,
    // borderRadius: '50px',
  }

  const HDFCCardContents = ({ children }) => (
    <React.Fragment>
      <FrontSide
        style={{
          backgroundColor: '#585858',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          border: '1px solid transparent' ,
          borderRadius: '10px',
        }}
      >
         <img
          src={hdfc}
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />

      </FrontSide>
      <BackSide
        style={{
          backgroundColor: '#585858',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          border: '1px solid transparent' ,
          borderRadius: '10px',
        }}>

        <NavLink to="/" className="button">3Yr. return</NavLink><br/><br/>
        <NavLink to="/" className="button">Graph</NavLink>

      </BackSide>
    </React.Fragment>
    );

    const IciciCardContents = ({ children }) => (
        <React.Fragment>
          <FrontSide
            style={{
              backgroundColor: '#585858',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              border: '1px solid transparent',
              borderRadius: '10px',
            }}
          >
             <img
              src={icici}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            /> 
          </FrontSide>
          <BackSide
            style={{
              backgroundColor: '#585858',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              border: '1px solid transparent' ,
              borderRadius: '10px',
            }}>

            <NavLink to="/" className="button">3Yr. return</NavLink><br/><br/>
        <NavLink to="/" className="button">Graph</NavLink>
            
          </BackSide>
        </React.Fragment>
        );
      
        const InfosysCardContents = ({ children }) => (
          <React.Fragment>
            <FrontSide
              style={{
                backgroundColor: '#585858',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                border: '1px solid transparent' ,
                borderRadius: '10px',
              }}
            >
               <img
                src={infosys}
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              /> 
            </FrontSide>
            <BackSide
              style={{
                backgroundColor: '#585858',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                border: '1px solid transparent' ,
                borderRadius: '10px',
              }}>

              <NavLink to="/" className="button">3Yr. return</NavLink><br/><br/>
              <NavLink to="/" className="button">Graph</NavLink>
              
            </BackSide>
          </React.Fragment>
          );
          
          const TCSCardContents = ({ children }) => (
            <React.Fragment>
              <FrontSide
                style={{
                  backgroundColor: '#585858',
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  border: '1px solid transparent' ,
                  borderRadius: '10px',
                }}
              >
                 <img
                  src={tcs}
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                /> 
              </FrontSide>
              <BackSide
                style={{
                  backgroundColor: '#585858',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  border: '1px solid transparent' ,
                  borderRadius: '10px',
                }}>
                <div className="button">3Yr. return</div><br/><br/>
                <div className="button">Graph</div>
                
              </BackSide>
            </React.Fragment>
            );
      
            const RelianceCardContents = ({ children }) => (
              <React.Fragment>
                <FrontSide
                  style={{
                    backgroundColor: '#585858',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    border: '1px solid transparent' ,
                    borderRadius: '10px',
                  }}
                >
                   <img
                    src={reliance}
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  /> 
                </FrontSide>
                <BackSide
                  style={{
                    backgroundColor: '#585858',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    border: '1px solid transparent' ,
                    borderRadius: '10px',
                  }}>

                  <NavLink to="/" className="button">3Yr. return</NavLink><br/><br/>
                  <NavLink to="/" className="button">Graph</NavLink>
                  
                </BackSide>
              </React.Fragment>
              );
      
              const AirtelCardContents = ({ children }) => (
                <React.Fragment>
                  <FrontSide
                    style={{
                      backgroundColor: '#585858',
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'column',
                      border: '1px solid transparent' ,
                      borderRadius: '10px',
                    }}
                  >
                     <img
                      src={airtel}
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                    /> 
                  </FrontSide>
                  <BackSide
                    style={{
                      backgroundColor: '#585858',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      border: '1px solid transparent' ,
                      borderRadius: '10px',
                    }}>

                    <NavLink to="/" className="button">3Yr. return</NavLink><br/><br/>
                    <NavLink to="/" className="button">Graph</NavLink>
                    
                  </BackSide>
                </React.Fragment>
                );

                const HCLCardContents = ({ children }) => (
                  <React.Fragment>
                    <FrontSide
                      style={{
                        backgroundColor: '#585858',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        border: '1px solid transparent' ,
                        borderRadius: '10px',
                      }}
                    >
                       <img
                        src={hcl}
                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                      /> 
                    </FrontSide>
                    <BackSide
                      style={{
                        backgroundColor: '#585858',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        border: '1px solid transparent' ,
                        borderRadius: '10px',
                      }}>
  
                      <NavLink to="/" className="button">3Yr. return</NavLink><br/><br/>
                      <NavLink to="/" className="button">Graph</NavLink>
                      
                    </BackSide>
                  </React.Fragment>
                  );

                  const ITCCardContents = ({ children }) => (
                    <React.Fragment>
                      <FrontSide
                        style={{
                          backgroundColor: '#585858',
                          display: 'flex',
                          alignItems: 'center',
                          flexDirection: 'column',
                          border: '1px solid transparent' ,
                          borderRadius: '10px',
                        }}
                      >
                         <img
                          src={itc}
                          style={{ maxWidth: '100%', maxHeight: '100%' }}
                        /> 
                      </FrontSide>
                      <BackSide
                        style={{
                          backgroundColor: '#585858',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexDirection: 'column',
                          border: '1px solid transparent' ,
                          borderRadius: '10px',
                        }}>
    
                        <NavLink to="/" className="button">3Yr. return</NavLink><br/><br/>
                        <NavLink to="/" className="button">Graph</NavLink>
                        
                      </BackSide>
                    </React.Fragment>
                    );
      
      const FlippyOnHover = ({ flipDirection = 'vertical' }) => (
        <Flippy
          flipOnHover={true}
          flipDirection={flipDirection}
          style={FlippyStyle}
        >
          <HDFCCardContents> </HDFCCardContents>

        </Flippy>
        
      );
      
      const FlippyOH = ({ flipDirection = 'vertical' }) => (
        <Flippy
        flipOnHover={true}
        flipDirection={flipDirection}
        style={FlippyStyle}
        >
          <IciciCardContents></IciciCardContents>
        </Flippy>
        
      );
      
      const FlippyInfosys = ({ flipDirection = 'vertical' }) => (
        <Flippy
        flipOnHover={true}
        flipDirection={flipDirection}
        style={FlippyStyle}
        >
          <InfosysCardContents></InfosysCardContents>
        </Flippy>
        
      );
      
      const FlippyTCS = ({ flipDirection = 'vertical' }) => (
        <Flippy
        flipOnHover={true}
        flipDirection={flipDirection}
        style={FlippyStyle}
        >
          <TCSCardContents></TCSCardContents>
        </Flippy>
        
      );
      
      const FlippyReliance = ({ flipDirection = 'vertical' }) => (
        <Flippy
        flipOnHover={true}
        flipDirection={flipDirection}
        style={FlippyStyle}
        >
          <RelianceCardContents></RelianceCardContents>
        </Flippy>
        
      );
      
      const FlippyAirtel = ({ flipDirection = 'vertical' }) => (
        <Flippy
        flipOnHover={true}
        flipDirection={flipDirection}
        style={FlippyStyle}
        >
          <AirtelCardContents></AirtelCardContents>
        </Flippy>
        
      );
      
      const FlippyHCL = ({ flipDirection = 'vertical' }) => (
        <Flippy
        flipOnHover={true}
        flipDirection={flipDirection}
        style={FlippyStyle}
        >
          <HCLCardContents></HCLCardContents>
        </Flippy>
        
      );
      
      const FlippyITC = ({ flipDirection = 'vertical' }) => (
        <Flippy
        flipOnHover={true}
        flipDirection={flipDirection}
        style={FlippyStyle}
        >
          <ITCCardContents></ITCCardContents>
        </Flippy>
        
      );
class CardBSE extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isFlipped: false
        };
    
        setInterval(() => {
          this.setState({
            isFlipped: !this.state.isFlipped
          });
        }, 3000);
      }
    render(){

        return(
            <>
                <div className="">
                    <div className="" style={{ display: 'flex',width: '75%',columnGap: '70px',marginLeft:'90px', justifyContent: 'space-around', 'flex-wrap': 'wrap'}}>
                        <FlippyOnHover flipDirection="horizontal" />
                        <FlippyOH flipDirection="horizontal" />
                        <FlippyInfosys flipDirection="horizontal" />
                        <FlippyTCS flipDirection="horizontal" />
                        <FlippyReliance flipDirection="horizontal"/>
                        <FlippyAirtel flipDirection="horizontal" />
                        <FlippyHCL flipDirection="horizontal" />
                        <FlippyITC flipDirection="horizontal" />
                    </div>
                </div>
    
            </>
        )
    }
}

export default CardBSE;