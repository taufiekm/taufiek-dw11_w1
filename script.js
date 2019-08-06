const houses = [
  {
    name: 'Rumah Bang Haji',
    address: 'Jalan Kaliurang no 34 Yogyakarta',
    longitude: -6.280229,
    latitude:  106.720818,
    price: 1123111,
    cover: 'https://static.mamikos.com/uploads/cache/data/style/2019-07-26/HMBkCoNa-540x720.jpg'
  },
  {
    name: 'Rumah Bang Jono',
    address: 'Jalan Kaliurang no 35 Yogyakarta',
    longitude: -6.284310,  
    latitude: 106.727432,
    price: 1123222,
    cover: 'https://static.mamikos.com/uploads/cache/data/style/2019-07-26/HMBkCoNa-540x720.jpg'
  },
  {
    name: 'Rumah Bang Karni',
    address: 'Jalan Kaliurang no 36 Yogyakarta',
    longitude: -6.280613, 
    latitude: 106.720325,
    price: 1123333,
    cover: 'https://static.mamikos.com/uploads/cache/data/style/2019-08-05/urFdLr1U-540x720.jpg'
  },
  {
    name: 'Rumah Bang miun',
    address: 'Jalan Kaliurang no 37 Yogyakarta',
    longitude: -6.283002, 
    latitude: 106.722428,
    price: 1123444,
    cover: 'https://static.mamikos.com/uploads/cache/data/style/2019-08-05/rqjtRQqI-540x720.jpg'
  },
  {
    name: 'Rumah Bang jali',
    address: 'Jalan Kaliurang no 38 Yogyakarta',
    longitude: -6.282341, 
    latitude: 106.722792,
    price: 1123555,
    cover: 'https://static.mamikos.com/uploads/cache/data/style/2019-08-05/c1QOnr0p-540x720.jpg'
  },
  {
    name: 'Rumah Bang tarmin',
    address: 'Jalan Kaliurang no 39 Yogyakarta',
    longitude: -6.282980, 
    latitude: 106.724423,
    price: 1123666,
    cover: 'https://static.mamikos.com/uploads/cache/data/style/2019-08-01/cPEYt5ij-540x720.jpg'
  },
 ]

 let card = document.getElementById('cardlist');
 for (let i=0; i<houses.length; i++) {
      card.innerHTML +=
      '<div class="col-6" style="margin-top: 20px"><div class="card" id="card"><img style="border-radius; 20px;" class="card-img-top" alt="" src="' + 
      houses[i].cover +
      '"><button type="button" class="btn btn-success price" style="position: absolute; margin-left: 150px; border-radius: 9px; margin-top: 170px; font-size: 15px; border-radius: 18px;">Rp ' + 
      houses[i].price +
      '</button><div class="card-body"><p id="name">' + 
      houses[i].name +
      '</p><h5 id="address">'+ 
      houses[i].address +
      '</h5><span class="btn btn-outline-dark properties disabled">Kawalerka</span><span class="btn btn-outline-dark properties disabled">37m<sup>2</sup></span></div></div></div>';
 }

  var map = L.map('map').setView([-6.282794, 106.723500], 16);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: ''
        }).addTo(map);
        for (let i = 0; i < houses.length; i++){
  L.marker([houses[i].longitude, houses[1].latitude])
        .addTo(map)
            .bindPopup('<img style="border-radius; 18px;" class="card-img-top" alt="" src="' + 
      houses[i].cover +
      '">')
            .openPopup();
  }
 
 