

const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);

    } catch (error) {
      console.error(error);
    }
  };