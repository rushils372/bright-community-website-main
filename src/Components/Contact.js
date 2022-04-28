export default function Contact() {
  return (
    <section className='py-6 container w-full h-screen/2  flex justify-center items-center  '>
      <div className='flex w-1/2 h-1/2 justify-center px-6 '>
        <div className=' py-6 md:py-0 md:px-6'>
          <p className='uppercase tracking-wider text-xs pb-5'>
            Have any query related to Bright Community
          </p>
          <h1 className='text-6xl font-bold font-space'>Contact Us</h1>
          <p className='pt-2 pb-4'>Fill in the form to start a conversation</p>
        </div>
      </div>
      <div className='w-1/2 bg-gray-50 h-1/2 py-10 flex flex-col justify-center'>
        <form
          novalidate=''
          className='py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid'
        >
          <label className='block'>
            <span className='mx-2'>Full name</span>
            <input
              type='text'
              placeholder='E.g. Rishabh Malviya'
              className='block w-full h-10 px-2 my-3  rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-400  '
            />
          </label>
          <label className='block'>
            <span className='mx-2'>Email address</span>
            <input
              type='email'
              placeholder='E.g. rishu@gmail.com'
              className='block h-10 w-full px-2  my-3 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-orange-400  '
            />
          </label>
          <label className='block'>
            <span className='mx-2'>Message</span>
            <textarea
              rows='3'
              className='block w-full px-2 rounded-md my-3 focus:ring focus:ring-opacity-75 focus:ring-orange-400 0'
            ></textarea>
          </label>
          <button type='button' className='btn'>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
