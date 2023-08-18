import React from 'react'

export default function HeroSection() {
  return (
    <section className='w-full main-container flex flex-col items-center justify-center gap-6 lg:my-24 my-12'>
      <div className='center gap-2'>
      <h1 className='text-2xl lg:text-4xl font-bold text-black uppercase'>MARKETING</h1><span className='text-red-600 text-2xl lg:text-4xl font-bold uppercase'>  CAMPAIGNS</span>
      </div>
      <p className='lg:text-lg  text-black text-center'>Explore our impressive range of advertising campaigns in action. We offer a variety of engagement {`platforms,`} including static {`media,`} digital {`media,`} and {`on-ground activations,`} to help you achieve your marketing goals. We ensure that your message is seen by {`high-value`} audiences in captive workspaces. Browse our gallery to see some of our recent campaigns. 
      <br/>Whether {`you're`}{` looking to launch a new product, raise awareness for a cause, or simply build brand recognition, reach out to dRSTi to learn more about how our expert team can help you achieve your marketing goals.`}</p>
    </section>
  )
}
