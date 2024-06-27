import { useState } from 'react'
import './App.css'

function App() {
  const [account, setAccount] = useState(null)

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        setAccount(accounts[0])
      } catch (error) {
        console.error("Error connecting to MetaMask", error)
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this app.")
    }
  }

  return (
    <>
      <div className="header">
        <h1>Welcome to CloudyAI</h1>
      </div>
      <div className="card">
        {!account ? (
          <button onClick={connectWallet}>
            Connect MetaMask
          </button>
        ) : (
          <p>Connected Account: {account}</p>
        )}
        <p>
          CloudyAI bridges AI models with blockchain smart contracts, creating a seamless, secure, and efficient ecosystem. Experience the power of AI and blockchain integration with our WebXR interface.
        </p>
        <p>
          Just like the water cycle on Earth, our platform relies on H2O to function. Power your projects with CloudyAI and join the future of technology.
        </p>
      </div>
    </>
  )
}

export default App
