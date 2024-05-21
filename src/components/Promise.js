const Calculate = (val) => {
  return new Promise((res, rej) => {
    if (val === true) {
      res("Promise Resolved");
    } else {
      rej("Not resolved");
    }
  });
};

Calculate(false)
  .then((res) => console.log(res))
  .catch((error) => console.error(error));
