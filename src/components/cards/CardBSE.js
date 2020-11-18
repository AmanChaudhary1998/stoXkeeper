import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { BackSide, FrontSide } from './flippycards';
import Flippy from './flippy';

import techMahindra from './images/tech-mahindra.jfif'
import LT from './images/LT.png';
import infosys from './images/infosys.jpg';
import tcs from './images/tcs.jpg';
import reliance from './images/reliance.png';
import airtel from './images/airtel.jpg';
import hcl from './images/hcl.jpg';
import sbi from './images/sbi.png';

import microsoft from './images/microsoft.jpg';
import apple from './images/apple.png';
import amanzon from './images/amazon.png';
import alphabet from './images/alphabet.png';
import facebook from './images/facebook.png';
import intel from './images/intel.png';
import adobe from './images/adobe.png';
import netflix from './images/netflix.png';

const FlippyStyle = {
    width: '200px',
    height: '200px',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'sans-serif',
    fontSize: '30px',
    justifyContent: 'center',
  }

  const TechMahindraCardContents = ({ children }) => (
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
          src={techMahindra}
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
        <Link to={{
                    pathname: '/companydetails',
                    companyName: 'TECHMAHINDRA',
                  }}  className="button">Graph
        </Link>
      </BackSide>
    </React.Fragment>
    );

    const LTCardContents = ({ children }) => (
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
              src={LT}
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
            <Link to={{
                    pathname: '/companydetails',
                    companyName: 'LT',
                  }}  className="button">Graph
              </Link>
            
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
              <Link to={{
                    pathname: '/companydetails',
                    companyName: 'INFOSYS',
                  }}  className="button">Graph
              </Link>
              
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
                <Link to={{
                    pathname: '/companydetails',
                    companyName: 'TCS',
                  }}  className="button">Graph
                </Link>
                
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
                  <Link to={{
                    pathname: '/companydetails',
                    companyName: 'RELIANCE',
                  }}  className="button">Graph</Link>
                  
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
                    <Link to={{
                    pathname: '/companydetails',
                    companyName: 'AIRTEL',
                  }}  className="button">Graph</Link>
                    
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
                      <Link to={{
                        pathname: '/companydetails',
                        companyName: 'HCL',
                      }}  className="button">Graph
                      </Link>
                      
                    </BackSide>
                  </React.Fragment>
                  );

                  const SBICardContents = ({ children }) => (
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
                          src={sbi}
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
                        <Link to={{
                          pathname: '/companydetails',
                          companyName: 'SBI',
                          }}  className="button">Graph
                        </Link>
                        
                      </BackSide>
                    </React.Fragment>
                    );

///////////////////////////////////////////////    NASDAQ     ////////////////////////////////////////////////////////
                    const MicrosoftCardContents = ({ children }) => (
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
                            src={microsoft}
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
                          <Link to={{
                            pathname: '/companydetails',
                            companyName: 'MICROSOFT',
                            }}  className="button">Graph
                          </Link>
                          
                        </BackSide>
                      </React.Fragment>
                      );

                      const AppleCardContents = ({ children }) => (
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
                              src={apple}
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
                            <Link to={{
                              pathname: '/companydetails',
                              companyName: 'APPLE',
                              }}  className="button">Graph
                            </Link>
                            
                          </BackSide>
                        </React.Fragment>
                        );

                        const AmazonCardContents = ({ children }) => (
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
                                src={amanzon}
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
                              <Link to={{
                                pathname: '/companydetails',
                                companyName: 'AMAZON',
                                }}  className="button">Graph
                              </Link>
                              
                            </BackSide>
                          </React.Fragment>
                          );

                          const AlphabetCardContents = ({ children }) => (
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
                                  src={alphabet}
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
                                <Link to={{
                                  pathname: '/companydetails',
                                  companyName: 'ALPHABET',
                                  }}  className="button">Graph
                                </Link>
                                
                              </BackSide>
                            </React.Fragment>
                            );

                            const FacebookCardContents = ({ children }) => (
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
                                    src={facebook}
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
                                  <Link to={{
                                    pathname: '/companydetails',
                                    companyName: 'FACEBOOK',
                                    }}  className="button">Graph
                                  </Link>
                                  
                                </BackSide>
                              </React.Fragment>
                              );

                              const IntelCardContents = ({ children }) => (
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
                                      src={intel}
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
                                    <Link to={{
                                      pathname: '/companydetails',
                                      companyName: 'INTEL',
                                      }}  className="button">Graph
                                    </Link>
                                    
                                  </BackSide>
                                </React.Fragment>
                                );

                                const AdobeCardContents = ({ children }) => (
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
                                        src={adobe}
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
                                      <Link to={{
                                        pathname: '/companydetails',
                                        companyName: 'ADOBE',
                                        }}  className="button">Graph
                                      </Link>
                                      
                                    </BackSide>
                                  </React.Fragment>
                                  );

                                  const NetflixCardContents = ({ children }) => (
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
                                          src={netflix}
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
                                        <Link to={{
                                          pathname: '/companydetails',
                                          companyName: 'NETFLIX',
                                          }}  className="button">Graph
                                        </Link>
                                        
                                      </BackSide>
                                    </React.Fragment>
                                    );

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      const FlippyOnHover = ({ flipDirection = 'vertical' }) => (
        <Flippy
          flipOnHover={true}
          flipDirection={flipDirection}
          style={FlippyStyle}
        >
          <TechMahindraCardContents> </TechMahindraCardContents>

        </Flippy>
        
      );
      
      const FlippyOH = ({ flipDirection = 'vertical' }) => (
        <Flippy
        flipOnHover={true}
        flipDirection={flipDirection}
        style={FlippyStyle}
        >
          <LTCardContents></LTCardContents>
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
      
      const FlippySBI = ({ flipDirection = 'vertical' }) => (
        <Flippy
        flipOnHover={true}
        flipDirection={flipDirection}
        style={FlippyStyle}
        >
          <SBICardContents></SBICardContents>
        </Flippy>
        
      );

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const FlippyMicrosoft = ({ flipDirection = 'vertical' }) => (
  <Flippy
  flipOnHover={true}
  flipDirection={flipDirection}
  style={FlippyStyle}
  >
    <MicrosoftCardContents></MicrosoftCardContents>
  </Flippy>
  
);
const FlippyApple = ({ flipDirection = 'vertical' }) => (
  <Flippy
  flipOnHover={true}
  flipDirection={flipDirection}
  style={FlippyStyle}
  >
    <AppleCardContents></AppleCardContents>
  </Flippy>
  
);
const FlippyAmazon = ({ flipDirection = 'vertical' }) => (
  <Flippy
  flipOnHover={true}
  flipDirection={flipDirection}
  style={FlippyStyle}
  >
    <AmazonCardContents></AmazonCardContents>
  </Flippy>
  
);
const FlippyAlphabet = ({ flipDirection = 'vertical' }) => (
  <Flippy
  flipOnHover={true}
  flipDirection={flipDirection}
  style={FlippyStyle}
  >
    <AlphabetCardContents></AlphabetCardContents>
  </Flippy>
  
);
const FlippyFacebook = ({ flipDirection = 'vertical' }) => (
  <Flippy
  flipOnHover={true}
  flipDirection={flipDirection}
  style={FlippyStyle}
  >
    <FacebookCardContents></FacebookCardContents>
  </Flippy>
  
);
const FlippyIntel = ({ flipDirection = 'vertical' }) => (
  <Flippy
  flipOnHover={true}
  flipDirection={flipDirection}
  style={FlippyStyle}
  >
    <IntelCardContents></IntelCardContents>
  </Flippy>
  
);
const FlippyAdobe = ({ flipDirection = 'vertical' }) => (
  <Flippy
  flipOnHover={true}
  flipDirection={flipDirection}
  style={FlippyStyle}
  >
    <AdobeCardContents></AdobeCardContents>
  </Flippy>
  
);
const FlippyNetflix = ({ flipDirection = 'vertical' }) => (
  <Flippy
  flipOnHover={true}
  flipDirection={flipDirection}
  style={FlippyStyle}
  >
    <NetflixCardContents></NetflixCardContents>
  </Flippy>
  
);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
                    <div className="" style={{ display: 'flex',width: '75%',columnGap: '70px',marginLeft:'10%', justifyContent: 'space-around', 'flex-wrap': 'wrap'}}>
                        <FlippyOnHover flipDirection="horizontal" />
                        <FlippyOH flipDirection="horizontal" />
                        <FlippyInfosys flipDirection="horizontal" />
                        <FlippyTCS flipDirection="horizontal" />
                        <FlippyReliance flipDirection="horizontal"/>
                        <FlippyAirtel flipDirection="horizontal" />
                        <FlippyHCL flipDirection="horizontal" />
                        <FlippySBI flipDirection="horizontal" />
                    </div>
                </div>

                <div className="">
                    <div className="" style={{ display: 'flex',width: '75%',columnGap: '70px',marginLeft:'10%', justifyContent: 'space-around', 'flex-wrap': 'wrap'}}>
                        <FlippyMicrosoft flipDirection="horizontal" />
                        <FlippyApple flipDirection="horizontal" />
                        <FlippyAmazon flipDirection="horizontal" />
                        <FlippyAlphabet flipDirection="horizontal" />
                        <FlippyFacebook flipDirection="horizontal"/>
                        <FlippyIntel flipDirection="horizontal" />
                        <FlippyAdobe flipDirection="horizontal" />
                        <FlippyNetflix flipDirection="horizontal" />
                    </div>
                </div>
    
            </>
        )
    }
}

export default CardBSE;