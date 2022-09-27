function loadRepos() {
   let url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';

   fetch(url)
      .then(res => res.json())
      .then(res => console.log(res.bitcoin.usd))

   // fetch(url)
   //    .then(response => response.json())
   //    .then(data => {
   //       data.films.forEach(film => {
   //          fetch(film)
   //             .then(response => response.json())
   //             .then(data => console.log(data.title))
   //       });
   //    })
   //    .catch(err => console.log(err))

   // console.log('After Fetch');   
}