import PageTitle from "../../Utils/PageTitle/PageTitle"

const Faq = () => {
  return (
    <div className=" mt-16">
        <PageTitle title="FAQ"/>
         <div className="flex lg:p-28 flex-col md:flex-row">
    <div className="flex-1">
      <img src="https://i.ibb.co/0GnDMfF/faq-img-2.png" />
    </div>
    <div className="flex-1">
      <p className="text-[#ec3323] font-medium">Have Questions?</p>
      <h2 className=" md:text-[40px] font-bold">
        Frequently Asked <br />
        Questions
      </h2>
      {/* accordion */}
      <div className="my-5 w-full">
        {/* question-1  */}
        <div className="mb-5 bg-white">
          <details className="collapse">
            <summary className="collapse-title text-xl font-medium">
              How do I search for available rental properties on your
              website?
            </summary>
            <div className="collapse-content">
              <p>
                You can easily search for rental properties on our website
                by using the search bar and applying filters such as
                location, price range, number of bedrooms, and other
                preferences. Our user-friendly interface makes it simple to
                find the perfect home for your needs.
              </p>
            </div>
          </details>
        </div>
        {/* question-2  */}
        <div className="mb-5 bg-white">
          <details className="collapse ">
            <summary className="collapse-title text-xl font-medium">
              What information is typically included in property listings?
            </summary>
            <div className="collapse-content">
              <p>
                Property listings on our website include essential
                information such as the property's address, rental price,
                number of bedrooms and bathrooms, amenities, and a detailed
                description. You'll also find high-quality photos to give
                you a comprehensive view of the property.
              </p>
            </div>
          </details>
        </div>
        {/* question-3  */}
        <div className="mb-5 bg-white">
          <details className="collapse ">
            <summary className="collapse-title text-xl font-medium">
              How can I schedule a viewing of a rental property?
            </summary>
            <div className="collapse-content">
              <p>
                To schedule a viewing, simply navigate to the property
                listing you are interested in and use the provided contact
                information to get in touch with the property manager or
                owner. They will assist you in arranging a convenient time
                for a viewing.
              </p>
            </div>
          </details>
        </div>
        {/* question-4  */}
        <div className="mb-5 bg-white">
          <details className="collapse ">
            <summary className="collapse-title text-xl font-medium">
              Are utilities included in the rental price, or are they
              separate?
            </summary>
            <div className="collapse-content">
              <p>
                The inclusion of utilities varies from property to property.
                Some rentals may include certain utilities in the monthly
                rent, while others may require tenants to pay for utilities
                separately. Check the individual property listings for
                detailed information on what is covered in the rental
                agreement.
              </p>
            </div>
          </details>
        </div>
      </div>
    
    </div>
  </div></div>
  )
}

export default Faq