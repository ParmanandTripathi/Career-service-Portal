import React from "react";

export default function Contact() {
  return (
    <>
      <div className='pt-2 pb-5'>
        <img
          src='/Assets/Images/ContactPage/banner.jpg'
          alt='banner-img'
          className='mw-100'
        />
      </div>
      <section className=' p-1 text-center mb-2 ps-5 pe-5'>
        <section className='text-center'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 mb-4'>
              <h4 className='mb-4'>Our Mission</h4>
              <p style={{ textAlign: "justify" }}>
                Our Mission is to provides a wide range of career related
                services including job search, job matching, information on Job
                Fairs, services of local service providers like drivers,
                plumbers, etc. or households and various other services. This
                portal facilitates registration of Job Seekers, Employers, Skill
                Providers, Local Service Providers (LSP’s), Career Centers,
                Placement Organisations, Households (availing services of LSP’s)
                and Government Departments.{" "}
              </p>
            </div>
            <div className='col-lg-3 col-md-6 mb-4'>
              <h4 className='mb-4'>Get in Touch</h4>

              <table style={{ textAlign: "left" }}>
                <tbody>
                  <tr>
                    <td>
                      <div className='pe-3'>
                        <i className='fa-solid fa-phone fa-lg'></i>{" "}
                      </div>
                    </td>
                    <td>
                      <div>
                        +91-9580999666 <br /> +91- 9918010203
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='pe-3'>
                        <i className='fa-solid fa-location-dot fa-lg'></i>{" "}
                      </div>
                    </td>
                    <td>
                      <p className='pt-2'>
                        331, Chak harihar Van, Chatnaag Road, Near patanjali
                        Store, Prayagaraj Uttar Pradesh, Pin- 221507
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='pe-3'>
                        <i className='fa-solid fa-envelope-open-text fa-lg'></i>{" "}
                      </div>
                    </td>
                    <td>
                      <a href='mailto:er.p.tripathi143@gmail.com'>
                        er.p.tripathi143@gmail.com
                      </a>
                      <br />
                      <a href='mailto:p.tripathi0509@gmail.com'>
                        {" "}
                        p.tripathi0509@gmail.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='col-lg-3 col-md-6 mb-4'>
              <h4 className='mb-4'>Write to Us</h4>

              <form>
                <div className='material-textfield mb-3'>
                  <input
                    className='input form-control'
                    placeholder=' '
                    type='text'
                  />
                  <label className='label'>Your Name</label>
                </div>
                <div className='material-textfield mb-3'>
                  <input
                    className='input form-control'
                    placeholder=' '
                    type='text'
                  />
                  <label className='label'>Email Id</label>
                </div>
                <div className='material-textfield mb-3'>
                  <input
                    className='input form-control'
                    placeholder=' '
                    type='text'
                  />
                  <label className='label'>Mobile Number</label>
                </div>

                <div className='material-textfield mb-3 '>
                  <textarea
                    className='input form-control'
                    placeholder=' '
                    type='text'
                    rows='3'
                  ></textarea>
                  <label className='label'>Your Message</label>
                </div>
                <div className='d-grid gap-3'>
                  <button
                    className='btn btn-success rounded-pill'
                    type='button'
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className='col-lg-3 col-md-6 mb-4'>
              <img
                src='./Assets/Images/ContactPage/write.jpg'
                height='340px'
                alt=''
                className=' '
              />
            </div>
          </div>
        </section>
      </section>

      <div className='pb-2'>
        <iframe
          title='Location'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.6394678235397!2d81.83232511433276!3d25.450314327631673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acac520900d91%3A0x1e2e90665ea6b6e9!2sSubhash%20Chauraha%2C%20Civil%20Lines%2C%20Prayagraj%2C%20Uttar%20Pradesh%20211001!5e0!3m2!1sen!2sin!4v1644425442095!5m2!1sen!2sin'
          width='100%'
          height='350'
          style={{ border: "0" }}
          allowFullScreen=''
          loading='lazy'
        ></iframe>
      </div>
    </>
  );
}
