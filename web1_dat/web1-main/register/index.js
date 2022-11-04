var btn_res=document.getElementById('btn_res')
var tf_ho=document.getElementById('ho')
var tf_ten=document.getElementById('ten')
var rd_nu=document.getElementById('radio1')
var rd_nam=document.getElementById('radio2')
var tf_tk=document.getElementById('taikhoan')
var tf_mk=document.getElementById('matkhau')
//thẻ hiện chữ "đang kí thành công"
var label_correct=document.getElementsByClassName("correct")
var label_error=document.getElementsByClassName("errors")
var label_error_mail=document.getElementsByClassName("errors_mail")




var arr_local=JSON.parse(localStorage.getItem("arr_account"));
var arr_acc=[]
arr_acc=arr_local


function account(tk, mk, sex,ho,ten) {         // Hàm khởi tạo
    this.tk = tk;                         // this tham khảo đến đối tượng cần tạo
    this.mk = mk;
    this.sex = sex;
    this.ho=ho;
    this.ten=ten;
  }
  
//   var p1 = new account("minelady92@gmail.com",2,3,4,6); 
//   arr_acc.push(p1)
//   localStorage.setItem("arr_account", JSON.stringify(arr_acc));

function add_arr(){
    var sex="Nữ"
    if (rd_nam.checked==true)
    {
        sex="Nam"
    }
    var p1 = new account(tf_tk.value,tf_mk.value,sex,tf_ho.value,tf_ten.value); 
    var check_same=false
    for(var i=0;i<arr_acc.length;i++)
    {
        if(p1.tk==arr_acc[i].tk)
        {
            check_same=true
            return false
        }
    }
    if(check_same==false){
        arr_acc.push(p1)
        return true
    }
    

}
// 

btn_res.onclick=()=>{
    label_correct[0].style.display="none"
    label_error[0].style.display="none"
    label_error_mail[0].style.display="none"
    if(check_res()==true &&  checkEmail()==true){
       
       
        if(add_arr()==true){
            localStorage.setItem("arr_account", JSON.stringify(arr_acc));
            label_correct[0].style.display="block"
            clear_tf()
        }
        else{
            label_error_mail[0].style.display="block"
        }
        
     
    }
    else{
        label_error[0].style.display="block"
    }

}

function check_res(){
    if(tf_ho.value==""||tf_ten.value==""||tf_tk.value==""||tf_mk.value=="" || rd_nam.checked==false && rd_nu.checked==false ){
        return false
    }
    else{
        return true
    }
}

function checkEmail() { 
   
    var filter =  /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if (!filter.test(tf_tk.value)) { 
            
             return false; 
    }
    else{
        return true
    }
} 

function clear_tf(){
    tf_ho.value=""
    tf_ten.value=""
    tf_tk.value=""
    tf_mk.value=""
    rd_nam.checked=false
    rd_nu.checked=false
}


   
   

import ImgAnimation from '../components/ImgAnimation/index.js'

const $=document.querySelector.bind(document)


$('.img_footer').innerHTML += ImgAnimation(
    'https://file.hstatic.net/200000522597/file/240x240_4_eff4b4e0d3e5496790737063aefc92d5.jpg');
    $('.img_footer').innerHTML += ImgAnimation(
    'https://file.hstatic.net/200000522597/file/240x240_1_fcccf4c902ec4c5dbffb267d55480361.jpg');
    $('.img_footer').innerHTML += ImgAnimation(
    'https://file.hstatic.net/200000522597/file/240x240_2_eb3aab14e3c4460598b186581e14319c.jpg');
    $('.img_footer').innerHTML += ImgAnimation(
    'https://file.hstatic.net/200000522597/file/240x240_3_4ea1528b7b6c4b768edca82c5177b63f.jpg');
    $('.img_footer').innerHTML += ImgAnimation(
    'https://file.hstatic.net/200000522597/file/240x240_5_796788d0cc3c4cb8becdd4095b9657ec.jpg');
    $('.img_footer').innerHTML += ImgAnimation(
    'https://file.hstatic.net/200000522597/file/240x240_6_cbc7d744bbad464393bbf3b378eb17e0.jpg');
    $('.img_footer').innerHTML += ImgAnimation(
    'https://file.hstatic.net/200000522597/file/240x240_7_c8ce843f94c74e0e8e8aa51372ddf97b.jpg');
    $('.img_footer').innerHTML += ImgAnimation(
    'https://file.hstatic.net/200000522597/file/240x240_8_bfbc1f9a56f24921979f053befbb7d67.jpg');
        