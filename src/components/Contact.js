import React from 'react';
import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';

const Contact = () => {
  return (
    <div className="app-contact background-color-yellow" id="contact">
      <section>
        <div className="container-small row">
          <div className="col-xs-12 margin-top-3">
            <SectionTitle title="Contact" />
            <SectionDescription 
              content="If you would like to get in touch with me, please visit my social networks or send me a message. 
              Thanks a lot!"
            />
            <div className="margin-left-3 margin-right-3 margin-bottom-3 padding-bottom">
              <form method="POST" action="https://formspree.io/completejavascript.super@gmail.com">
                <input className="background-color-white" type="text" id="yname" name="Name" placeholder="Name" required />
                <input className="background-color-white"  type="email" id="yemail" name="Email" placeholder="Email" required />
                <textarea className="background-color-white"  type="text" id="ymsg" name="Message" placeholder="Message" required></textarea>
                <button className="btn-full btn-primary" type="submit" id="send"><strong>Send Message</strong></button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact;
