import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import Swal from 'sweetalert2';

const service_id = import.meta.env.VITE_SERVICE_ID;
const temp_id = import.meta.env.VITE_TEMPLATE_ID;
const public_key = import.meta.env.VITE_PUBLIC_KEY;




export default function MailCard() {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(service_id, temp_id, form.current, {
        publicKey: public_key,
      })
      .then(
        () => {
          console.log('SUCCESS!');

           // Display success toast
           Swal.fire({
            icon: 'success',
            title: 'Email Sent Successfully',
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            toast: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
          });
          
        },
        (error) => {
          console.log('FAILED...', error.text);

           // Display error toast if sending failed
           Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Failed to send email. Please try again later.',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
          });
        },
      );
  };
  return (
    <Form className='box1 p-4' ref={form}  onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" name="name" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" name="email" required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} name="message"  required/>
      </Form.Group>
      <Button type="submit" className='primaryBtm'>
        Send Mail
      </Button>
    </Form>
  );
}
