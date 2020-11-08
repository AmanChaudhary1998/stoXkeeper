import React, { Component } from 'react';

import hdfc from './images/hdfc.jpg'
import icici from './images/icici.jpg';
import infosys from './images/infosys.jpg';
import tcs from './images/tcs.png';
import reliance from './images/reliance.png';
import sbi from './images/sbi.jpg';
import { BackSide, FrontSide } from './flippycards';
import Flippy from './flippy';

const FlippyStyle = {
    width: '300px',
    height: '300px',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'sans-serif',
    fontSize: '30px',
    justifyContent: 'center'
  }

  const DefaultCardContents = ({ children }) => (
    <React.Fragment>
      <FrontSide
        style={{
          backgroundColor: '#585858',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
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
          flexDirection: 'column'
        }}>
        <div className="button">3Yr. return</div>
        
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
              flexDirection: 'column'
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
              flexDirection: 'column'
            }}>
            <div className="button">3Yr. return</div>
            
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
                flexDirection: 'column'
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
                flexDirection: 'column'
              }}>
              <div className="button">3Yr. return</div>
              
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
                  flexDirection: 'column'
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
                  flexDirection: 'column'
                }}>
                <div className="button">3Yr. return</div>
                
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
                    flexDirection: 'column'
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
                    flexDirection: 'column'
                  }}>
                  <div className="button">3Yr. return</div>
                  
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
                      flexDirection: 'column'
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
                      flexDirection: 'column'
                    }}>
                    <div className="button">3Yr. return</div>
                    
                  </BackSide>
                </React.Fragment>
                );
      
      const FlippyOnHover = ({ flipDirection = 'vertical' }) => (
        <Flippy
          flipOnHover={true}
          flipDirection={flipDirection}
          style={FlippyStyle}
        >
          <DefaultCardContents> </DefaultCardContents>
        </Flippy>
        
      );
      
      const FlippyOH = ({ flipDirection = 'vertical' }) => (
        <Flippy
          flipOH={true}
          flipDirection={flipDirection}
          style={FlippyStyle}
        >
          <IciciCardContents></IciciCardContents>
        </Flippy>
        
      );
      
      const FlippyInfosys = ({ flipDirection = 'vertical' }) => (
        <Flippy
          flipInfosys={true}
          flipDirection={flipDirection}
          style={FlippyStyle}
        >
          <InfosysCardContents></InfosysCardContents>
        </Flippy>
        
      );
      
      const FlippyTCS = ({ flipDirection = 'vertical' }) => (
        <Flippy
          flipTCS={true}
          flipDirection={flipDirection}
          style={FlippyStyle}
        >
          <TCSCardContents></TCSCardContents>
        </Flippy>
        
      );
      
      const FlippyReliance = ({ flipDirection = 'vertical' }) => (
        <Flippy
          flipTCS={true}
          flipDirection={flipDirection}
          style={FlippyStyle}
        >
          <RelianceCardContents></RelianceCardContents>
        </Flippy>
        
      );
      
      const FlippySBI = ({ flipDirection = 'vertical' }) => (
        <Flippy
          flipTCS={true}
          flipDirection={flipDirection}
          style={FlippyStyle}
        >
          <SBICardContents></SBICardContents>
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
            <h1>Hello</h1>
                <div className="App">
                    <div className="col-md-4 col-10 mx-auto" style={{ display: 'flex', flex: '1 0 200px', justifyContent: 'space-around', 'flex-wrap': 'wrap' }}>
                        <FlippyOnHover flipDirection="horizontal"/>
                        <FlippyOH flipDirection="horizontal" />
                        <FlippyInfosys flipDirection="horizontal" />
                        <FlippyTCS flipDirection="horizontal" />
                        <FlippyReliance flipDirection="horizontal"/>
                        <FlippySBI flipDirection="horizontal" />
                    </div>
                </div>
    
            </>
        )
    }
}

export default CardBSE;