const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center h-screen px-4 space-y-5">
      <h1 className="text-5xl text-primaryColor font-bold text-center">
        Bienvenidos a <span className="underline underline-offset-2">Academicool</span>
      </h1>
      <p className="text-primaryColor text-md text-center">
        Obten información en tiempo real sobre la situación académica de tu estudiante
      </p>
      <button className="w-full flex justify-center bg-primaryColor text-white text-md py-1 rounded-sm font-bold">Ingresar con Google</button>
      <div className="space-y-1">
        <p className="text-sm text-primaryColor text-center">¿Tienes problemas para iniciar sesión?</p>
        <p className="text-sm text-primaryColor text-center underline">Envía un mensaje a soporte</p>
      </div>
    </div>
  )
}

export default LoginPage;