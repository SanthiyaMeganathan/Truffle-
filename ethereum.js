ethNode
  .getBlockNumber()
  .then((blockNumber) => {
    console.log(`Current block number: ${blockNumber}`);
  })
  .catch((error) => {
    if (error.code === -32603) {
      console.log(`Rate limit exceeded. Retrying in 1 second...`);
      setTimeout(() => {
        ethNode
          .getBlockNumber()
          .then((blockNumber) => {
            console.log(`Current block number: ${blockNumber}`);
          })
          .catch((error) => {
            console.error(`Error: ${error}`);
          });
      }, 1000);
    } else {
      console.error(`Error: ${error}`);
    }
  });
