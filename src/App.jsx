import { useState } from 'react'
import Web3Model from 'web3modal'
// import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from 'ethers';
import './App.css'

function App() {
  const [currentAccount, setCurrentAccount] = useState()
  const shortenAddress = (address) => `${address.slice(0, 5)}....${address.slice(address.length - 4)}`


  const connectWallet = async () => {
    try {
      let web3modal = new Web3Model({
        cacheProvider: false,
        // providerOptions
      })
      const web3ModelInstance = await web3modal.connect()
      const web3modalProvider = new ethers.providers.Web3Provider(web3ModelInstance)
      web3modalProvider.send("eth_requestAccounts", [])
      .then((accounts)=>{
        if(accounts.length>0) {
          setCurrentAccount(accounts[0])
        }
      }).catch((e)=>console.log(e))

    } catch (error) {
      console.log(error)
    }
  }

  const onClickDisconnect = () => {
    console.log("onClickDisConnect")
    setCurrentAccount('')
  }

  return (
    <div className="App">
      <header>
        <nav>
          <img src="/techrity_web_logo.svg" alt="" />
          <div>
          {!currentAccount ? (
            
            <button className='submit' onClick={() => connectWallet()} >Connect wallet</button>
          ) : <p className='submit' onClick={() => onClickDisconnect()}>{shortenAddress(currentAccount)}</p>

          }
        </div>
        </nav>
      </header>
        <div className='container'>
            <form>
              <input type="text" placeholder='Receiver Address' />
              <input type="text" placeholder='Amount' /> <br />
              <input className='submit' type="submit" value="Send" />
            </form>
        </div>
    </div>
  )
}

export default App
