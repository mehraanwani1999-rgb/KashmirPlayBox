export function ContactDetails() {
  return (
    <section className="px-4 py-6 sm:px-6 lg:py-8">
      <div className="shell">
        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="section-card h-full">
            <p className="eyebrow">Contact Details</p>
            <h2 className="headline-lg mt-3">Contact Details</h2>

            <div className="mt-6 space-y-4">
              {/* KEEP YOUR EXISTING CONTACT DETAIL ITEMS HERE EXACTLY AS THEY ARE */}
              {/* KEEP YOUR EXISTING WHATSAPP TEXT AND BUTTON HERE EXACTLY AS THEY ARE */}
            </div>
          </div>

          <div className="section-card overflow-hidden p-2 sm:p-3">
            <div className="overflow-hidden rounded-[24px] border border-black/8 dark:border-white/10">
              {<div className="aspect-[4/3] overflow-hidden bg-muted">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.3878076657247!2d74.84767957617665!3d34.033921918696734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18ee9dcb649b9%3A0x3b5941bcea905!2zU3JpbmFnYXIgQnJpdGlzaCBTY2hvb2wg2LPYsduM2Ybar9ixINio2LHZuti0INin2LPaqdmI2YQ!5e0!3m2!1sen!2sin!4v1779478289693!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="PlayBox Kashmir Location"
    
  />
</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}