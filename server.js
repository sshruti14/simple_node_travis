const FAVOURITE_INSTRUCTOR = process.env.INSTRUCTOR_NAME ;


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function main() {
  while(true) {
    console.log("Microservices rock!");
    console.log(`${FAVOURITE_INSTRUCTOR}`);
    await sleep(5000);
  }
}

main();
