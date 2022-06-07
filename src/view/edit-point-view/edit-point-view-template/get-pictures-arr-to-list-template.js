export const getListPicturesTemplate = (picturesArray) => {
  if (picturesArray !== null) {
    const picturesList = picturesArray.map( (picture) => {
      const pictureSrc = (picture.src !== null) ? picture.src : '';
      const pictureDescription = (picture.description !== null) ? picture.description : '';
      const bodyPictureItem = `<img class="event__photo" src="${pictureSrc}" alt="${pictureDescription}">`;
      return bodyPictureItem;
    }).join('\n');
    return picturesList;
  }
};
