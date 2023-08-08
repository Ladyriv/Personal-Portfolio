"use client"
import { useState } from 'react';
import type { NextPage } from 'next'
//import Head from 'next/head'
import styles from '../styles/globals.css'
import { useForm } from 'react-hook-form';
import { Link } from "react-scroll/modules"

interface DataProps {
  name: string;
  email: string;
  message: string;
}

const ContactSection: NextPage = () => {
 const [isLoading, setIsLoading] = useState(false);

 const { register, handleSubmit, formState: { errors } } = useForm({
  defaultValues: {
    name: '',
    email: '',
    message: ''
  }
 });

const onSubmit = async (data: DataProps) => {
  try {
    setIsLoading(true)
    const res = await fetch('/api/contact.ts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  
    const body = await res.json(); 

    if(res.ok) {
      alert(`${body.message} 🚀`);
    }

    if(res.status === 400) {
      alert(`${body.message} 😢`);
    }

    setIsLoading(false)
  } catch(err) {
      //return res.json('Something went wrong: ', err);
      console.log('Something went wrong: ', err);

  }
}

  return (
    <div className="bg-purple-200 shadow-md rounded-md px-8 pt-6 pb-8 mb-4 mt-14 mx-auto max-w-screen-md dark:bg-purple-200 dark:shadow-md">
      <div>
          <Link to="contact" activeClass="active"    
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
              <div className="container flex items-center space-x-2 text-center">
                <h2 className="text-2xl text-center font-bold  dark:text-neutral-500">Contactame!</h2>
              </div>
          </Link>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name" className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-700">Nombre y apellido</label>
          <input id="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  dark:text-gray-800 border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-purple-100 dark:border-gray-400 dark:placeholder-purple-100 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" {...register('name', { required: true })} type="text" />
          {errors.name && <p className={styles.error}>{errors.name.type}</p>}

          <label htmlFor="email" className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-700">Email</label>
          <input id="email" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  dark:text-gray-800 border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-purple-100 dark:border-gray-400 dark:placeholder-purple-100 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" {...register('email', { required: true })} type="email" />
          {errors.email && <p className={styles.error}>{errors.email.type}</p>}

          <label htmlFor="message" className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-gray-700">Mensaje</label>
          <input id="message" className="block p-12 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm  dark:text-gray-800 border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-purple-100 dark:border-gray-400 dark:placeholder-purple-100 dark:focus:ring-primary-500 dark:focus:border-primary-500" {...register('message', { required: true })} type="text"/>
          {errors.message && <p className={styles.error}>{errors.message.type}</p>}

          <button type="submit" disabled={isLoading} className="rounded-md bg-purple-800 px-3 py-2 mt-6 text-sm font-semibold text-white shadow-sm hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{isLoading ? 'loading...' : 'submit'}</button>
        </form>
      </div>

    </div>
  )
}

export default ContactSection