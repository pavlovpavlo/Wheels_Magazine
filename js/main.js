window.addEventListener("load",initListener,false);
let countObject = {
	count: 1,
	minus(){
		if(this.count>1){
			this.count--;
			document.getElementById("product__count").innerHTML = this.count;
		}
	},
	plus(){
		this.count++;
		document.getElementById("product__count").innerHTML = this.count;
	}
};
let modal = document.getElementById('myModal');

function initListener()
{
	document.getElementById("product__minus").addEventListener("click", countObject.minus.bind(countObject),false);
	document.getElementById("product__plus").addEventListener("click", countObject.plus.bind(countObject),false);
	document.querySelector(".product__gallery-main_block-scale").addEventListener("click", scaleImage,false);
	document.getElementsByClassName("close")[0].addEventListener("click", ()=>{modal.style.display = "none";},false);
	let wheelImage = document.getElementsByClassName("product__gallery-additional_block-item");
	for(let i=0; i< wheelImage.length; i++){
		wheelImage[i].addEventListener("click",setImage,false);
	}
}
function setImage(event){
	let i, galleryItem;
    galleryItem = document.getElementsByClassName("product__gallery-additional_block-item");

    for (i = 0; i < galleryItem.length; i++) {
        galleryItem[i].className = galleryItem[i].className.replace(" active", "");
    }
	event.currentTarget.className += " active";
	document.querySelector(".product__gallery-main_block-image img").src = event.currentTarget.children[0].src;
}
function scaleImage(){
	let img = document.getElementById('main__image'),
		modalImg = document.getElementById("img01")
		modal.style.display = "flex";
		modalImg.src = img.src;	
}



