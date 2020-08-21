function updateMap() {
  fetch("https://www.trackcorona.live/api/countries")
    .then(res => res.json())
    .then(rsp => {
      console.log(rsp.data);
      rsp.data.forEach(ele => {
        latitude = ele.latitude;
        longitude = ele.longitude;

        clr=ele.confirmed;
        if (clr>=5000000)
          clr="#660000";
        else if (clr>=3500000 && clr<=5000000)
          clr="#cc0000";
        else if (clr>=1000000 && clr<=3500000)
          clr="#ff0000";
        else if (clr>=500000 && clr<=1000000)
          clr="#ff3333";
        else if (clr>=100000 && clr<=500000)
          clr="#ff6666";
        else if (clr>=50000 && clr<=100000)
          clr="#ff9999";
        else if (clr>=10000 && clr<=50000)
          clr="#ffb3b3";
        else
          clr="#ffe6e6";
        new mapboxgl.Marker({
          color: clr
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      })
    })
}

updateMap();




