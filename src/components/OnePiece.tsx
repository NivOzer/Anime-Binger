export function fillerChecker(x: number) {
  if (54 <= x && x <= 60) {
    return 61;
  } else if (98 <= x && x <= 99) {
    return 100;
  } else if (102 === x) {
    return 103;
  } else if (131 <= x && x <= 143) {
    return 144;
  } else if (196 <= x && x <= 206) {
    return 207;
  } else if (220 <= x && x <= 226) {
    return 227;
  } else if (279 <= x && x <= 283) {
    return 284;
  } else if (291 <= x && x <= 292) {
    return 293;
  } else if (303 === x) {
    return 304;
  } else if (317 <= x && x <= 319) {
    return 320;
  } else if (326 <= x && x <= 336) {
    return 337;
  } else if (382 <= x && x <= 384) {
    return 385;
  } else if (406 <= x && x <= 407) {
    return 408;
  } else if (426 <= x && x <= 429) {
    return 430;
  } else if (457 <= x && x <= 458) {
    return 459;
  } else if (492 === x) {
    return 493;
  } else if (542 === x) {
    return 543;
  } else if (575 <= x && x <= 578) {
    return 579;
  } else if (590 === x) {
    return 591;
  } else if (626 === x || x === 627) {
    return 628;
  } else if (747 <= x && x <= 750) {
    return 751;
  } else if (780 <= x && x <= 782) {
    return 783;
  } else if (895 === x || x === 896) {
    return 897;
  } else if (907 === x) {
    return 908;
  } else if (1029 === x || x === 1030) {
    return 1031;
  } else {
    return x;
  }
}
export function playEpisodeFromInput(episodeNumber: number) {
  // Check if the input value is a valid number
  if (!isNaN(episodeNumber) && episodeNumber > 0) {
    // Call the playEpisode function with the episode number

    const x = fillerChecker(episodeNumber);
    playEpisode(x);
  }
}
export function playEpisode(episodeNumber: number) {
  const episodeURL = `https://animeisrael.website/watch/fulllink/op/fulllinkop-${episodeNumber}.php`;
  window.open(episodeURL);
}
