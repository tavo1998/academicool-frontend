const ProfileField = ({ className, title, value }) => {
  return (
    <div className={`${className} flex flex-col items-start w-full space-y-1`}>
      <h1 className="text-sm text-customGrey font-semibold">{title}</h1>
      <h1 className="text-sm text-opacity-70 text-customGrey font-semibold bg-primaryColor bg-opacity-20 w-full p-2 rounded-sm">
        {value}
      </h1>
    </div>
  )
}

export default ProfileField