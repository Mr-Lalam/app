import React, { Component } from 'react';
class Home extends Component {
style={
    "padding":"25px",
    "margin":"30px",
    "background":"#e9ecef"
}
 render() {
 return(
<div>
<div class=" jumbotron">
    <div class="row">
    <div class="col-4">
            <img src="supmti.png" class="img-responsive img-thumbnail"/>
        </div>
        <div class="col-8">
            <h1> Bienvenu à SUPMTI Learning</h1>
                <p1>c'est un site educatife crier par les etudiantes SUPMTI.</p1>
        </div>
    </div>
</div>
<div class="container">

            <div class="col-10 d-wrap justify-conten-center d-flex">
                <div class="card col-8" style={this.style}>
                    <h1>Article 2021</h1>
                    <h1><a href="#">Derniere cours</a></h1>
                    <p> <span> create by :</span><a href="#">Ahmed Alaoui</a> <span class="glyphicon glyphicon-picture">at 22:12:30</span></p>
                    <img src="img/a.jpg" class="img-responsive img-thumbnail"/>
                    <p> LoremLorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quis accusamus aut odio facere repellat id nemo corporis, veritatis praesentium et eveniet assumenda ex labore, fuga, impedit voluptas.
                        A, nisi? consectetur adipisicing elit. Minus quia assumenda temporibus quae, voluptatem quisquam vel cum alias laudantium eaque quidem illo veniam nostrum consequatur, a iure error quis dolorem?</p>
                </div>
                <div class="card col-6" style={this.style}>
                    <h1>Article 2021</h1>
                    <h1><a href="#">Derniere exercice</a></h1>
                    <p> <span> create by :</span><a href="#">Ahmed Alaoui</a> <span class="glyphicon glyphicon-picture">at 22:12:30</span></p>
                    <img src="img/b.png" class="img-responsive img-thumbnail"/>
                    <p> LoremLorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quis accusamus aut odio facere repellat id nemo corporis, veritatis praesentium et eveniet assumenda ex labore, fuga, impedit voluptas.
                        A, nisi? consectetur adipisicing elit. Minus quia assumenda temporibus quae, voluptatem quisquam vel cum alias laudantium eaque quidem illo veniam nostrum consequatur, a iure error quis dolorem?</p>
                    <a class="btn btn-info"> lire plus</a>
                </div>
                <div class="card col-6" style={this.style}>
                    <h1>Article 2021</h1>
                    <h1><a href="#">Windows derniere question </a></h1>
                    <p> <span> create by :</span><a href="#">Ahmed Alaoui</a> <span class="glyphicon glyphicon-picture">at 22:12:30</span></p>
                    <img src="img/a.jpg" class="img-responsive img-thumbnail"/>
                    <p> LoremLorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quis accusamus aut odio facere repellat id nemo corporis, veritatis praesentium et eveniet assumenda ex labore, fuga, impedit voluptas.
                        A, nisi? consectetur adipisicing elit. Minus quia assumenda temporibus quae, voluptatem quisquam vel cum alias laudantium eaque quidem illo veniam nostrum consequatur, a iure error quis dolorem?</p>
                    <a class="btn btn-info"> lire plus</a>
                </div>
               


            </div>

          

            </div>

        
        </div>



 );  

  }
}
export default Home;

