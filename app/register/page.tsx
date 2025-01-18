import RegisterForm from '@/components/RegisterForm'

const Register = () => {
  return (
    <div className='min-h-[calc(100vh-32px*2-48px)] flex flex-col items-center justify-center bg-secondary p-4 gap-4 '>
      <RegisterForm />
    </div>
  )
}

export default Register
