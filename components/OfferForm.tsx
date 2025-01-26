'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mail, User, Check, Phone, MessageCircleReply } from 'lucide-react'
import MotionButton from './MotionButton'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function OfferForm({
  nameUser,
  emailUser,
}: {
  nameUser: string
  emailUser: string
}) {
  const [name, setName] = useState(nameUser)
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState(emailUser)
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!lastName.trim()) {
      newErrors.lastName = 'Last Name is required'
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!phone.trim()) {
      newErrors.phone = 'Phone is required'
    }
    if (!message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitted(true)
      // Reset form fields after submission
      setName(nameUser)
      setEmail(emailUser)
      setMessage('')
      setErrors({})
    }
  }

  return (
    <div className='w-full flex items-center justify-center p-4 '>
      <div className='w-full max-w-md  px-4 rounded-lg shadow-lg'>
        {isSubmitted ? (
          <div className='flex flex-col items-center justify-center space-y-4'>
            <Check className='h-12 w-12 text-green-500' />
            <p className='text-lg text-center font-semibold'>
              {nameUser.toUpperCase()} {lastName.toUpperCase()}
              <br />
              Twoja wiadomość została wysłana pomyślnie!
              <br />
              Pełną ofertę prześlemy wkrótce na podany adres e-mail: {emailUser}
              .<br />
              Dziękujemy za kontakt.
              <br />
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className='mt-4'
            >
              Wyślij kolejną wiadomość
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className='space-y-4'
          >
            <div className='space-y-2'>
              <Label
                htmlFor='name'
                className='flex items-center'
              >
                <User className='mr-2 h-4 w-4' /> Imię
              </Label>
              <Input
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.name && (
                <p className='text-sm text-red-500 mt-1'>{errors.name}</p>
              )}
            </div>
            <div className='space-y-2'>
              <Label
                htmlFor='lastName'
                className='flex items-center'
              >
                <User className='mr-2 h-4 w-4' /> Nazwisko
              </Label>
              <Input
                id='lastName'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={errors.lastName ? 'border-red-500' : ''}
              />
              {errors.lastName && (
                <p className='text-sm text-red-500 mt-1'>{errors.lastName}</p>
              )}
            </div>
            <div className='space-y-2'>
              <Label
                htmlFor='email'
                className='flex items-center'
              >
                <Mail className='mr-2 h-4 w-4' /> Email
              </Label>
              <Input
                id='email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.email && (
                <p className='text-sm text-red-500 mt-1'>{errors.email}</p>
              )}
            </div>
            <div className='space-y-2'>
              <Label
                htmlFor='phone'
                className='flex items-center'
              >
                <Phone className='mr-2 h-4 w-4' /> Nr telefonu
              </Label>
              <Input
                id='phone'
                type='phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.phone && (
                <p className='text-sm text-red-500 mt-1'>{errors.phone}</p>
              )}
            </div>
            <div className='space-y-2'>
              <Label
                htmlFor='message'
                className='flex items-center'
              >
                <MessageCircleReply className='mr-2 h-4 w-4' />
                Wiadomość
              </Label>
              <Textarea
                id='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={errors.message ? 'border-red-500' : ''}
                autoFocus
              />
              {errors.message && (
                <p className='text-sm text-red-500 mt-1'>{errors.message}</p>
              )}
            </div>
            <div className='flex justify-end'>
              <MotionButton
                typeButton='submit'
                label='Potwierdzam'
              />
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
