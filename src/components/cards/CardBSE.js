import React, { Component } from 'react';

import hdfc from './images/hdfc.jpg'
import icici from './images/icici.jpg';
import infosys from './images/infosys.jpg';
import tcs from './images/tcs.png';
import reliance from './images/reliance.png';
import sbi from './images/sbi.jpg';
import { BackSide, FrontSide } from './flippycards';
import Flippy from './flippy';
import { NavLink } from 'react-router-dom';

const FlippyStyle = {
    width: '150px',
    height: '150px',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'sans-serif',
    fontSize: '30px',
    justifyContent: 'center',
    // border: '1px solid green' ,
    // borderRadius: '50px',
  }

  const DefaultCardContents = ({ children }) => (
    <React.Fragment>
      <FrontSide
        style={{
          backgroundColor: '#585858',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          border: '1px solid transparent' ,
          borderRadius: '30px',
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
          borderRadius: '30px',
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

                  <NavLink to="/" className="button">3Yr. return</NavLink><br/><br/>
                  <NavLink to="/" className="button">Graph</NavLink>
                  
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
                <div className="">
                    <div className="" style={{ display: 'flex',width: '80%',marginLeft:'10%', marginRight:'40%', justifyContent: 'space-between', 'flex-wrap': 'wrap'}}>
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