import React from 'react'
import Products from './Products/Products'
import { Link } from 'react-router-dom'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';


function Home() {
    
 
  return (

    <>
 <div><img src='https://jysk.ie/sites/jysk.ie/files/wysiwyg/banner-fud-37.jpg' style={{width:'100%',height:'auto'}}></img></div>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>

        <MDBCard className='h-100'>
          <Link to='/furniture' class="nav-link">
          <MDBCardImage
            src='https://th.bing.com/th/id/OIP.DdiU3wPvVaFtK1XRpLZ10gHaFS?pid=ImgDet&rs=1'
            alt='furniture'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>FURNITURE</MDBCardTitle>
            <MDBCardText>
            Are you ready to talk furniture? Whether yours is beautifully antique, handily thrifted, desperately-purchased-when-you-realized-you-had-nothing-to-sit-on, or of any other furniture variety, you have it. And if you’re a word lover, you can class up the joint and maybe even impress a few guests with some detailed knowledge about your stuff! Or the stuff at that fancy hotel you try to stay in once a year. 
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardFooter>
          </Link>
        </MDBCard>


      </MDBCol>
      <MDBCol>

        <MDBCard className='h-100'>
          <Link to='/mattresses' class="nav-link">
          <MDBCardImage
            src='https://springtek.in/images/product/3/EuroTopHybrid1LatexPocketSpring1.jpg'
            alt='mattresses'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>MATTRESSES</MDBCardTitle>
            <MDBCardText>
            A mattress is a large, usually rectangular pad for supporting a lying person. It is designed to be used as a bed, or on a bed frame as part of a bed. Mattresses may consist of a quilted or similarly fastened case, usually of heavy cloth, containing materials such as hair, straw, cotton, foam rubber, or a framework of metal springs. Mattresses may also be filled with air or water.
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardFooter>
          </Link>
        </MDBCard>



      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100' >
          <Link to='SofasSeating' class="nav-link">
          <MDBCardImage
            src='https://th.bing.com/th/id/OIP.a8d1WE7h21krz56qydtFFAHaFj?w=262&h=196&c=7&r=0&o=5&dpr=1.5&pid=1.7'
            alt='sofaseating'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>SOFAS & SEATINGS</MDBCardTitle>
            <MDBCardText>
            When it comes to designing and furnishing your living space, selecting the right sofa and seating options is crucial. Sofas and seating not only provide comfort but also play a significant role in defining the style and functionality of a room. Here are some key considerations to keep in mind:
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardFooter>
          </Link>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    
   <div><img src='https://mooreshomemakers.com.au/cdn/shop/files/2083_AUS_SuperSpringSale_E-Sig_2917x1113-0016520_2048x.jpg?v=1694121340' style={{width:'100%',height:'auto'}}></img></div>
<Products/>


</>

  )
}

export default Home