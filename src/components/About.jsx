const About =(props)=>{
    return(
        <div className="about">
            <h1>About Me</h1>
            <img src="" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore hic accusantium dolorum consequuntur asperiores vel alias. Recusandae, reiciendis labore. Nam itaque eveniet magnam quasi saepe. Hic, vero itaque enim quis dicta nihil inventore optio. Quos similique doloremque facere unde cupiditate sapiente cum vitae architecto culpa explicabo voluptatem, voluptatum ea accusantium mollitia. Voluptate tempore aspernatur explicabo porro inventore eligendi quo ea quidem rerum eaque et vitae aut dolore eos sed sit, quam illo facere dolores, officia omnis. Id suscipit sapiente veritatis?</p>
          {props.children}
        </div>
        //{props.children} in order to display hr tag from index js
    );


}
export default About;