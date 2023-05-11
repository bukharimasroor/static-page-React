import Navbar from "./components/Navbar";
import About from "./components/About"
import Section from "./components/Section"
import Footer from "./components/Footer";

import style from "./styles/style.css"
let section_data =[{title:"skills",content:"lLorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore hic accusantium dolorum consequuntur asperiores vel alias. Recusandae, reiciendis labore. Nam itaque eveniet magnam quasi saepe. Hic, vero itaque enim quis dicta nihil inventore optio. Quos similique doloremque facere unde cupiditate sapiente cum vitae architecto culpa explicabo voluptatem, voluptatum ea accusantium mollitia. Voluptate tempore aspernatur explicabo porro inventore eligendi quo ea quidem rerum eaque et vitae aut dolore eos sed sit, quam illo facere dolores, officia omnis. Id suscipit sapiente veritatis?"},

{title:"Education",content:"lLorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore hic accusantium dolorum consequuntur asperiores vel alias. Recusandae, reiciendis labore. Nam itaque eveniet magnam quasi saepe. Hic, vero itaque enim quis dicta nihil inventore optio. Quos similique doloremque facere unde cupiditate sapiente cum vitae architecto culpa explicabo voluptatem, voluptatum ea accusantium mollitia. Voluptate tempore aspernatur explicabo porro inventore eligendi quo ea quidem rerum eaque et vitae aut dolore eos sed sit, quam illo facere dolores, officia omnis. Id suscipit sapiente veritatis?"},

{title:"Experience",content:"lLorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore hic accusantium dolorum consequuntur asperiores vel alias. Recusandae, reiciendis labore. Nam itaque eveniet magnam quasi saepe. Hic, vero itaque enim quis dicta nihil inventore optio. Quos similique doloremque facere unde cupiditate sapiente cum vitae architecto culpa explicabo voluptatem, voluptatum ea accusantium mollitia. Voluptate tempore aspernatur explicabo porro inventore eligendi quo ea quidem rerum eaque et vitae aut dolore eos sed sit, quam illo facere dolores, officia omnis. Id suscipit sapiente veritatis?"
}]//creating and arry objexcts for section 
function App() {
  return(
    <div>
      <Navbar/>
      <About>
        <hr/>
      </About>
    {
      section_data.map((data,index)=>{
        return(
          <Section
          title={data.title}
          content={data.content}>


          {index !==section_data.length-1? <hr/> :""}
          </Section>
        )
      })
    }
      <Footer/>
    </div>
   
  );
}

export default App;
