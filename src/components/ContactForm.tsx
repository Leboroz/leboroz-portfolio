import { useForm, ValidationError } from '@formspree/react';
import { FiExternalLink } from 'react-icons/fi';

export default function ContactForm({ onClick, ref }: any) {
  const [state, handleSubmit] = useForm("mpzbggnr");

  const handleFormSubmit = (e: any) => {
    handleSubmit(e);
  }

  if (state.succeeded) {
    return <p>Your message has been delivered, I'll get back to you soon!</p>;
  }

  return (
    <form className="contact-me-form" onSubmit={handleFormSubmit}>
      <label className="form-element" htmlFor="name">
        Name
        <input
          id="name"
          type="name"
          name="name"
        />
      </label>
      <ValidationError
        prefix="Name"
        field="name"
        errors={state.errors}
      />
      <label className="form-element" htmlFor="email">
        Email
        <input
          id="email"
          type="email"
          name="email"
        />
      </label>
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        style={{ height: 200 }}
        className="form-element"
        placeholder="Write your message..."
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button className="btn btn-primary-outline" type="submit" disabled={state.submitting}>
        <FiExternalLink />
        Submit
      </button>
    </form>
  );
}
