export const formatTitle = media => {
  let shortTitle = "";
  let newTitle = "";
  // if title is too long is cuts and add "..." to the end
  if (media.data.title) {
    if (media.data.title.length > 24) {
      shortTitle = media.data.title.split("");
      newTitle = shortTitle.slice(0, 15).join("") + "...";
    } else {
      newTitle = media.data.title;
    }
    // constructs new movie object with new title
    return {
      ...media,
      data: {
        ...media.data,
        title: newTitle
      }
    };
  } else if (media.data.name) {
    if (media.data.name.length > 24) {
      shortTitle = media.data.name.split("");
      newTitle = shortTitle.slice(0, 15).join("") + "...";
    } else {
      newTitle = media.data.name;
    }
    // constructs new movie object with new title
    return {
      ...media,
      data: {
        ...media.data,
        name: newTitle
      }
    };
  }
};
// makes sure the title isn't too long - UI

// adds to array with only 4 of the most popular movies in it
