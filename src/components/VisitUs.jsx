import React from 'react'

const VisitUs = () => {
  return (
    <section class="visit-us">
    <div class="visit-container">


    <div class="visit-text">
        <h2 className='orange'>Visit Tea Mafia 295 in Jammu</h2>

        <p>
            We are conveniently located near <strong>Shiv Hardware Store, Miran Sahib </strong> 
            in <strong>Jammu</strong>, making us easy to reach from all parts of the city.
        </p>

        <h3>If you are searching for:</h3>

        <ul class="search-list">
            <li>best cafe near me</li>
            
            <li>birthday celebration cafe</li>
            <li>late night cafe in Jammu</li>
        </ul>

        <p class="highlight">
            Tea Mafia 295 is the perfect destination for you.
        </p>
    </div>

    <div class="visit-map">
        <section className="embed-map-fixed"> <div className="embed-map-container"> <iframe
       className="embed-map-frame"
       src="https://maps.google.com/maps?width=600&height=400&hl=en&q=tea%20mafia%20295&t=&z=19&ie=UTF8&iwloc=B&output=embed"
       title="Teamafia295 Location Map"
       loading="lazy"
       referrerPolicy="no-referrer-when-downgrade"
       allowFullScreen
     ></iframe> </div> </section>
    </div>


</div>
</section>

  )
}

export default VisitUs