console.log("fun_handleImage.js")


var handleImage = {

};

handleImage.init = function () {
    handleImage.createWrap()
}

/**
 * @description: 创造图片放大的区域
 * @param {type} 
 * @return: 
 */

handleImage.createWrap = function () {
    var imgWrap = document.createElement("div");
    imgWrap.setAttribute("class", "handleimg-wrap");
    imgWrap.setAttribute("id", "imgWrap")
    document.body.appendChild(imgWrap);
    imgWrap.innerHTML = `
    <div class="handleimg-head">
    <img class="imgbtn expand" src="./images/expand.png" onclick="handleImage.expand()" alt="放大"></img>
    <img class="imgbtn narrow" src="./images/narrow.png" onclick="handleImage.narrow()"   alt="缩小"></img>
    <a class="downloadhref" id="downloadHref" onclick="handleImage.download()" download><img class="imgbtn download" src="./images/download.png" alt="下载"></img> </a>
    </div>
    <img class="imgbtn close" src="./images/close.png" alt="关闭"></img>
    `
}



/**
 * @description: 展示图片,绑定图片的点击事件
 * @param {type} 
 * @return: 
 */
handleImage.showImg = function () {
    console.log(this)
    // var src = this.getAttribute("src");
    src = "./images/close.png"

    var imgContent = document.createElement("img");
    imgContent.setAttribute("src", src);
    imgContent.setAttribute("id", "imgContent")
    imgContent.setAttribute("class", "handleimg-box")

    var imgWrap = document.getElementById("imgWrap");
    if (imgContent && imgWrap) {
        // imgContent.setAttribute("src", src);
        imgWrap.style.display = "block"
        imgWrap.appendChild(imgContent)
    }


    // this.
}

/**
 * @description: 关闭图片
 * @param {type} 
 * @return: 
 */
handleImage.closeImg = function () {
    var imgWrap = document.getElementById("imgWrap");
    imgWrap.style.display = "none"
}

/**
 * @description: 放大图片
 * @param {type} 
 * @return: 
 */
handleImage.expand = function () {
    var imgContent = document.getElementById("imgContent");
    if (imgContent) {
        imgContent.style.height = imgContent.offsetHeight * 1.1 + "px"
    }
}


/**
 * @description:缩小图片
 * @param {type} 
 * @return: 
 */
handleImage.narrow = function () {
    var imgContent = document.getElementById("imgContent");
    if (imgContent) {
        imgContent.style.height = imgContent.offsetHeight / 1.1 + "px"
    }
}


/**
 * @description:下载图片，通过a标签的形式只能下载同源图片
 * @param {type} 
 * @return: 
 */
handleImage.download = function () {
    var downloadHref = document.getElementById("downloadHref");
    var imgContent = document.getElementById("imgContent")
    if (downloadHref && imgContent) {
        var src = imgContent.getAttribute("src");
        downloadHref.setAttribute("href", src)
    }
}

handleImage.init()