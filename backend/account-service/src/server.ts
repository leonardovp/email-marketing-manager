import app from './app'
import dataBase from './db'

(async () => {

try {

  const port = parseInt(`${process.env.PORT}`);  
  await dataBase.sync();  
  await app.listen(port);
  console.log(`Running on port ${port}`);

} catch (error) {

  console.log(`${error}`);
  
}
})();



