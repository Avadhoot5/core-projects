import './Form.css';
import Button from '../Button/Button';
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Form = () => {
  return (
    <div>
        <div className="formComplete">
            <div className="formDescription container">
                <h2>contact us</h2>
                <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
            </div>
            <div className="formDetails container">
                <div className="contactButtons">
                    <div className="chatCallButtons">
                        <Button
                        icon = {<MdMessage/>}
                        text='via support chat'
                        color= 'white'
                        background='black'
                        />
                        <Button 
                        icon = {<FaPhoneAlt/>}
                        text='via call'
                        color= 'white'
                        background='black'
                        />
                    </div>
                    <Button
                        icon = {<MdMessage/>}
                        text='via email form'
                        color= 'black'
                        background='white'
                        border='2px solid black'
                        width='95%'
                        />
                        <div>
                    <div className='inputDetails'>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" name ='name' />
                        </div>
                        <div>
                            <label htmlFor="email">E-Mail</label>
                            <input type="email" name ='email' />
                        </div>
                        <div>
                        <label>TEXT</label>
                            <textarea name="postContent" rows={3} />
                        </div>
                        <div className='submitBttn'>
                        <Button
                            text='SUBMIT'
                            color= 'white'
                            background='black'
                        />
                        </div>
                    </div>
                </div>
                </div>
                
                <div className="contactImage">
                <img src="../images/service.svg" alt="contactImage" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Form