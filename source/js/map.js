let myMap;

ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        center: [59.931501, 30.314894],
        zoom: 15,
        controls: []
    });

    myPlacemark = new ymaps.Placemark([59.9305, 30.3146], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/icons/map-marker.svg',
      iconImageSize: [36, 36],
  })

  myMap.geoObjects.add(myPlacemark)
}
