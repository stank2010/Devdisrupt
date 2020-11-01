import React from "react";

import { NetworkErrorMessage } from "./NetworkErrorMessage";

export function ConnectWallet({ connectWallet, networkError, dismiss}) {
  return (
      <>
      <div className="container" style={{"max-width":"100%"}}  align="center">
          <img src="logo_main.png"  width="300" height="300" />
       </div>

      <div className="container justify-content-md-center">
        <div className="row">
          <div className="col-lg-4 mt-5">
            <img src="gugin.png"  width="140" height="140"  style={{"border-radius":"50%","border":"1px  solid "}}/>
            <h2>Gugin Sushi</h2>
            <p>Exotic sushi restaurant near chulalongkorn university serve premium salmon with fair price</p>
            <p>Token : GG</p>
            <p>Market Value : 1,500,000</p>
            <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div>
          <div className="col-lg-4 mt-5">
            <img src="meow.jpg"  width="140" height="140"  style={{"border-radius":"50%","border":"1px  solid "}}/>            
            <h2>Meowkansen</h2>
            <p>Meow Meow Maw Meow Mhaw Meow Maw Meow Mhaw</p>
            <p>Token : MS</p>
            <p>Market Value : 1,100,000</p>
            <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div>
          <div className="col-lg-4 mt-5">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
            <h2>Heading</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div>
        </div>

  <div className="container">
          <hr className="featurette-divider" />
          <div className="row">
            <div className="col-md-7">
              <h1 className="featurette-heading">Join</h1>
              <p className="lead" > To become our partner please make sure you pass all of our requirement</p>
              <button className="btn btn-primary"> Learn More </button>
            </div>
            <div className="col-md-5">
              <img src="one.jpg" height="500" width="500"/> 
            </div>
          </div>

          <hr className="featurette-divider"/>

          <div className="row">
            <div className="col-md-7">
              <img src="two.jpg" height="500" width="500"/> 
            </div>
            <div className="col-md-5">
              <h1 className="featurette-heading">Grow</h1>
              <p className="lead" > We will provide the funding that you can explore your token here</p>
              <button className="btn btn-primary"> Learn More </button>
            </div>
          </div>

  </div>
        <div className="col-12 text-center">
          {/* Metamask network should be set to Localhost:8545. */}
          {networkError && (
            <NetworkErrorMessage 
              message={networkError} 
              dismiss={dismiss} 
            />
          )}
        </div>
        
        {/*
        <button onClick={()=>SP(Host,1)} > Hi </button>
        <div className="col-6 p-4 text-center">
          <p>Please connect to your wallet.</p>
          <button
            className="btn btn-warning"
            type="button"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        </div> 
        */}
      </div>
      </>
  );
}
