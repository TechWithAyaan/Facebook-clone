function openeye(){
    document.getElementById("password").type = "password"
    document.getElementsByClassName("o") [0].style.display = "none"
    document.getElementsByClassName("n") [0].style.display = "inline"

}
function closeye(){
        document.getElementById("password").type = "text"
    document.getElementsByClassName("n") [0].style.display = "none"
document.getElementsByClassName("o")[0].style.display = "inline"
}

function post(){
    var post = document.getElementById("post")
    // console.log(post)
var file = document.getElementById("file");
var preview = document.getElementById("poster-img");
// var desc = document.getElementsById("inp").value;
// console.log(desc.value)
var des = document.getElementsByName("des");
var desc = des[0];

var img = file.files[0]; 
var imgUrl = URL.createObjectURL(img);
console.log(imgUrl)


 post.innerHTML +=` 
 <div class="post-section">
                    <div class="post-profile">
                        <img src="img/abdullah.jpg" alt="" class="post-profile-img">
                        <div class="post-profile-name">
                            <h2 class="post-profile-name-text">Abdullah Faheem</h2>
                            <p class="post-profile-time">5 min ago</p>
                            
                            
                            <p class="post-description">${desc.value}</p>
                            </div>
                            </div>
<div class="post-img-wrapper">
<a href="${imgUrl}"><img src="${imgUrl}" alt="" class="post-image"></a>

          </div> 
          <div class="user-happy">
    <div class="user-like">
<i  data-visualcompletion="css-img" class="x1b0d499 xq8hly8" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v4/yQ/r/xsQQBPUtjdX.png&quot;); background-position: 0px -714px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block; cursor: pointer;"></i>
<p class="like and-manage">Like</p>
    </div>
    <div class="user-like">
      <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v4/yQ/r/xsQQBPUtjdX.png&quot;); background-position: 0px -588px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block; cursor: pointer;"></i>
      <p class="comment and-manage">Comment</p>
    </div>
    <div class="user-like">
   <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v4/yQ/r/xsQQBPUtjdX.png&quot;); background-position: 0px -924px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;cursor: pointer;"></i>
   <p class="Share and-manage">Share</p>
    </div>  
</div>

</div>
 `
}
