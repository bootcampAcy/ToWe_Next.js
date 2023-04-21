let lystri = document.querySelector('.category_main_bar_categori_now');
let onclickLystri = document.querySelector('.onclick_lystri');
let category_img_now = document.querySelector('.category_main_bar_categori_active_img_now');
let category_img_after = document.querySelector('.category_main_bar_categori_active_img')

lystri.addEventListener('click', lystriClick)

function lystriClick() {
    if (onclickLystri.style.display == 'none') {
        category_img_now.style.display = 'none'
        category_img_after.style.display = 'block'
        onclickLystri.style.display = 'block'

    } else {
        onclickLystri.style.display = 'none'
        category_img_now.style.display = 'block'
        category_img_after.style.display = 'none'

    }
}

let categoryColors = document.querySelector('.category_main_bar_categori_now2');
let categoryColorsAfter = document.querySelector('.category_main_bar_categori_after_color');
let colorImgBefore = document.querySelector('.category_main_bar_categori_active_img_now2')
let colorImgAfter = document.querySelector('.category_main_bar_categori_active_img2')

categoryColors.addEventListener('click', colorClick)

function colorClick() {
    if (categoryColorsAfter.style.display == 'none') {
        categoryColorsAfter.style.display = 'flex'
        colorImgBefore.style.display = 'none'
        colorImgAfter.style.display = 'block'
    } else {
        categoryColorsAfter.style.display = 'none'
        colorImgBefore.style.display = 'block'
        colorImgAfter.style.display = 'none'
    }
}

let categoryBrands = document.querySelector('.category_main_bar_categori_now3');
let categoryBrandsAfter = document.querySelector('.category_brand');
let brandsImgBefore = document.querySelector('.category_main_bar_categori_active_img_now3')
let brandsImgAfter = document.querySelector('.category_main_bar_categori_active_img3')

categoryBrands.addEventListener('click', brandsClick)

function brandsClick() {
    if (categoryBrandsAfter.style.display == 'none') {
        categoryBrandsAfter.style.display = 'block'
        brandsImgBefore.style.display = 'none'
        brandsImgAfter.style.display = 'block'
    } else {
        categoryBrandsAfter.style.display = 'none'
        brandsImgBefore.style.display = 'block'
        brandsImgAfter.style.display = 'none'
    }
}

let categoryCost = document.querySelector('.category_main_bar_categori_now4');
let categoryCostAfter = document.querySelector('.range_slider_place');
let costImgBefore = document.querySelector('.category_main_bar_categori_active_img_now4')
let costImgAfter = document.querySelector('.category_main_bar_categori_active_img4');

categoryCost.addEventListener('click', CostClick);

function CostClick(){
    if(categoryCostAfter.style.display == 'none'){
        categoryCostAfter.style.display = 'block'
        costImgBefore.style.display = 'none'
        costImgAfter.style.display = 'block'
    }else{
        categoryCostAfter.style.display = 'none'
        costImgBefore.style.display = 'block'
        costImgAfter.style.display = 'none'
    }
}