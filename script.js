
let prRow = document.querySelector("#r1");
let col = "" ;
$.ajax({
    
    url : "pr.json",
    type : "get",
    success : function(response){
            console.log(response);
            response.forEach(element => {
                console.log(element);
                col += `  <div class="col-md-3">
            <div class="card">
                <img class="card-img-top" src="`+element.image+`" alt="">
                <div class="card-body">
                    <h4 class="card-title">`+element.name+`</h4>
                    <p class="card-text">`+element.price+`</p>
                </div>
            </div>
        </div>` 

            });
            prRow.innerHTML = col ;
    }
})