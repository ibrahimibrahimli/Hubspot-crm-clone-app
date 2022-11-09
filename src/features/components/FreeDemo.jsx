import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {BsCheckCircleFill} from 'react-icons/bs'
import offerPageLeft from '../../assets/img/Offer-Page-Left-Corner.svg'
import offerPageRight from '../../assets/img/Offer-Page-Right-Corner.svg'
import productUIBlobs from '../../assets/img/ProductUI+Blobs.webp'

const FreeDemo = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [websiteUrl, setWebsiteUrl] = useState('')
  const [selectBox, setSelectBox] = useState('')
  const [checkBox, setCheckBox] = useState(false)
  const disabled = [firstName, lastName, email ,phoneNumber, companyName, websiteUrl, selectBox, checkBox].every(Boolean)

  const handleFormController = () =>{

    
    if(disabled){
       alert("fdgdfg") 
    }
     
  }
  //fsfs


  return (
    <>
      <div className='get_demo'>
        <div className='offer_img'>
          <img src={offerPageLeft} alt="" />
          <img src={offerPageRight} alt="" />
        </div>
        <div className='get_demo_content'>
          <div>
             <div className='get_demo_content_left'>
              <h1>Get a Free Demo of HubSpot's CRM Platform</h1>
              <p>HubSpot’s CRM platform has all the tools
                 you need for marketing, sales, content
                 management, operations, and customer service.
                 Each product in the platform is powerful alone,
                 but the real magic happens when you use them together.
               </p>
               <div className='popFeatures'> 
                <h2>Popular features</h2>
                <div>
                  <div>
                    <h3>Marketing</h3>
                    <ul>
                      <li><BsCheckCircleFill/> Lead generation</li>
                      <li><BsCheckCircleFill/> Marketing automation</li>
                      <li><BsCheckCircleFill/> Multi-touch revenue attribution</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Sales</h3>
                    <ul>
                      <li><BsCheckCircleFill/> Advanced CRM</li>
                      <li><BsCheckCircleFill/> Sales automation</li>
                      <li><BsCheckCircleFill/> Sales engagement tools</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Customer Service</h3>
                    <ul>
                      <li><BsCheckCircleFill/> Knowledge base</li>
                      <li><BsCheckCircleFill/> Help desk automation</li>
                      <li><BsCheckCircleFill/> Customer feedback surveys</li>
                    </ul>
                  </div>
                </div>
               </div>
             </div>

             <div className='get_demo_content_right'>
                <form>
                  <div className='demo_content_right_inputs'>
                    <div>
                      <label htmlFor="firstName">First Name *</label>
                      <input type="text"
                       name='firstName'
                       id='firstName'
                       value={firstName}
                       onChange = {(e)=>{setFirstName(e.target.value)}} />
                      <span></span>
                    </div>
                    <div>
                      <label htmlFor="lastName">Last Name *</label>
                      <input type="text"
                       name='lastName'
                       id='lastName'
                       value={lastName}
                       onChange ={(e)=>{setLastName(e.target.value)}}  />
                      <span></span>
                    </div>
                    <div>
                      <label htmlFor="email">Email *</label>
                      <input type="email"
                       name='email'
                       id='email'
                       value={email}
                       onChange={(e)=>{setEmail(e.target.value)}} />
                      <span></span>
                    </div>
                    <div>
                      <label htmlFor="phoneNumber">Phone Number *</label>
                      <input type="number" 
                       name='phoneNumber' 
                       id='phoneNumber'
                       value={phoneNumber}
                       onChange ={(e)=>{setPhoneNumber(e.target.value)}} />
                      <span></span>
                    </div>
                    <div>
                      <label htmlFor="companyName">Company Name *</label>
                      <input type="text"
                       name='companyName'
                       id='companyName'
                       value={companyName}
                       onChange={(e)=>{setCompanyName(e.target.value)}} />
                      <span></span>
                    </div>
                    <div>
                      <label htmlFor="websiteUrl">Website URL *</label>
                      <input type="text"
                       name='websiteUrl'
                       id='websiteUrl'
                       value={websiteUrl}
                       onChange={(e)=>{setWebsiteUrl(e.target.value)}} />
                      <span></span>
                    </div>
                    <div className='selectBox'>
                      <label htmlFor="selectBox">How many employees work there? *</label>
                      <select name="selectBox"
                       id="selectBox"
                       value={selectBox}
                       onChange={(e)=>{setSelectBox(e.target.value)}}>
                        <option value="" disabled="true"></option>
                        <option value="1">1</option>
                        <option value="6 to 10">6 to 10</option>
                        <option value="11 to 25">11 to 25</option>
                        <option value="26 to 50">26 to 50</option>
                        <option value="51 to 200">51 to 200</option>
                        <option value="201 to 1000">201 to 1000</option>
                        <option value="1001 to 10000">1001 to 10000</option>
                        <option value="10001 to more">10001 to more</option>
                       </select>
                       <span></span>
                    </div>
                    <div className='checkBox'>
                      <input type="checkbox"
                       name='checkBox'
                       id='checkBox'
                       value={checkBox}
                       onChange={()=>{
                        if(checkBox){
                          setCheckBox(false)
                        }else{
                          setCheckBox(true)
                        }
                       }} />
                      <label htmlFor='checkBox'>Subscribe to HubSpot's marketing blog</label>
                    </div>
                      
                  </div>
                  <div className='demo_content_right_button'>
                    <p>We're committed to your privacy. HubSpot uses
                       the information you provide to us to contact you
                       about our relevant content, products, and services.
                       You may unsubscribe from these communications at
                       any time. For more information, check out our
                       <Link to={'privacy-policy'}>
                          Privacy Policy.
                       </Link>                          
                    </p>
                    <span></span>
                    <Link to={""}>
                      <button type='submit'
                       onClick={handleFormController}>Get your free demo</button>
                    </Link>
                  </div>
                </form>
             </div>
             </div>

             <div className='get_demo_bottom'>
                       <p>
                       Find out why
                       <strong>150,000+ customers </strong>
                       from more than
                       <strong>120 countries</strong>
                       trust HubSpot to bring their team, tools, and data together in one place.
                       </p>
          </div>

        </div>
      </div>
      <div className='customDemo'>
        <div>
          <div>
            <h3>Don’t Just Take Our Word for It</h3>
            <p>See for yourself how HubSpot’s CRM platform
               can meet your business’s unique
               challenges, needs, and product
               interests. Complete the form above
               to get your free demo.</p>
          </div>
          <img src={productUIBlobs} alt="" />
        </div>
      </div>
    </>
  )
}

export default FreeDemo
