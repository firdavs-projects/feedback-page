import ymaps from 'ymaps';
import {createElement} from "../utils";

export const Maps = () => {
    const maps = createElement('section', { class: 'maps', id: 'maps' });
    ymaps
        .load()
        .then(maps => {
            const map = new maps.Map('maps', {
                center: [55.749, 37.619],// Москва
                zoom: 15,
                controls: []
            });
            const mark = new maps.Placemark([55.752, 37.619]);
            map.geoObjects.add(mark);
        })
        .catch(error => console.log('Failed to load Yandex Maps', error));

    return maps;
}