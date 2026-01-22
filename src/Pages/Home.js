const Home=()=>{
return (
   <>
  
           <div id="demo" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2" class="active"></button>
        </div>

        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="data:image/webp;base64,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" alt="logo" class="d-block w-100" height="300" width="300"/>
            </div>
            <div class="carousel-item">
           <img src="https://th.bing.com/th/id/OIP.-80zhZ9VZpCOq63Gz7JyKAHaEK?w=313&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" alt="2nd-logo" class="d-block w-100" height="300" width="300"/>
            </div>
            <div class="carousel-item">
                <img src="https://th.bing.com/th/id/OIP.-80zhZ9VZpCOq63Gz7JyKAHaEK?w=313&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" alt="logo" class="d-block w-100" height="300" width="300"/>
            </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
    </div> 


   </>
)
}

export default Home;