console.log('file loaded');

var songTable = 0;

var addActivityItem = function(){
  console.log('change');
}

window.onclick = function() {
  console.log('click');

  songTable = document.getElementsByClassName('song-table')[0]
  songTitles = songTable.getElementsByClassName('song-title')
  for (index = 0; index < songTitles.length; ++index) {
    songTitles[index].innerHTML = songTitles[index].innerText + " <a href='https://music.yandex.ru/search?text=" + songTitles[index].innerText + "' target='_new'>Я.Музыка </a>"
  }
  //songTable.addEventListener("change", addActivityItem, false);
};


