let blocksHead = document.querySelectorAll('.category_card');

blocksHead.forEach(function(block) {
  block.addEventListener('click', function() {
    let activeBlock = document.querySelector('.active_category_menu');

    // Устанавливаем свойства для изображений при смене активного блока
    let activeImg = activeBlock.querySelector('.active_category_menu_img');
    let passiveImg = activeBlock.querySelector('.passive_img');
    activeImg.style.display = 'none';
    passiveImg.style.display = 'block';

    // Удаляем класс у предыдущего активного блока и добавляем его к текущему блоку
    activeBlock.classList.remove('active_category_menu');
    block.classList.add('active_category_menu');

    // Устанавливаем к изображений при активном блоке
    activeImg = block.querySelector('.active_category_menu_img');
    passiveImg = block.querySelector('.passive_img');
    activeImg.style.display = 'block';
    passiveImg.style.display = 'none';
  });
});

// Функция для клика на изображении
function forImg() {
  let activeBlock = document.querySelector('.active_category_menu');
  let passiveImg = activeBlock.querySelector('.passive_img');
  let activeImg = activeBlock.querySelector('.active_category_menu_img');
  
  if (passiveImg.style.display == 'none') {
    passiveImg.style.display = 'block';
    activeImg.style.display = 'none';
  } else {
    passiveImg.style.display = 'none';
    activeImg.style.display = 'block';
  }

  if (activeBlock.classList.contains('active_category_menu')) {
    passiveImg.style.display = 'none';
  }
}

let images = document.querySelectorAll('.category_card img');
images.forEach(function(img) {
  img.addEventListener('click', forImg);
});

let katalog = document.querySelector('.katalog_header');
let katalogBar = document.querySelector('.position_catalog');

katalog.addEventListener('click', cotologo);

function cotologo(){
    if(katalogBar.style.display == 'none'){
        katalogBar.style.display = 'flex'
    }else{
        katalogBar.style.display = 'none'
    }
}


