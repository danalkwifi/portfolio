import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
        <h2 className="my-20 text-center text-4xl text-purple-700">Get in touch</h2>
        <div className="text-center tracking-tighter text-black">
            <p className="my-4">
                {CONTACT.address}
            </p>
            <p className="my-4">
                {CONTACT.phoneNo}
            </p>
            <p href="#" className="border-b">
                {CONTACT.email}
            </p>
        </div>
    </div>
  )
}

export default Contact