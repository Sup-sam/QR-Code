let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');

// i will call the function in buton tag in html with on click
function generateQR(){
    // if condition here said if i write text in field excute this if not so do not show anything
    if(qrText.value.length > 0 ){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;

    imgBox.classList.add("show-img")

    } else{
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
    

}