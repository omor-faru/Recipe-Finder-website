import { useState } from "react"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})

  const validate = () => {
    const errs: typeof errors = {}
    if (!name.trim()) errs.name = "Name is required"
    if (!email) {
      errs.email = "Email is required"
    } else {
    
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) errs.email = "Invalid email address"
    }
    if (!message.trim()) errs.message = "Message cannot be empty"
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    alert("Message sent! We’ll be in touch soon.")
    setName(""); setEmail(""); setMessage(""); setErrors({})
  }

  return (
    <div className="p-7 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-orange-600">Contact Us</h2>
      <form noValidate onSubmit={onSubmit} className="bg-white shadow-lg rounded-xl p-6 space-y-4">
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 ${
              errors.name ? "border-red-500 ring-red-200" : "border-gray-300 focus:ring-orange-400"
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

      
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 ${
              errors.email ? "border-red-500 ring-red-200" : "border-gray-300 focus:ring-orange-400"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

       
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 ${
              errors.message ? "border-red-500 ring-red-200" : "border-gray-300 focus:ring-orange-400"
            }`}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

       
        <button
          type="submit"
          className="w-full bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
